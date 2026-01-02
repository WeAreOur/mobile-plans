const cache = new Map();

// Base path for deployment
// - Empty for localhost (development) or custom domain
// - '/mobile-plans' for GitHub Pages production only
const BASE_PATH = (window.location.hostname === 'localhost' || 
                   window.location.hostname === '127.0.0.1' ||
                   window.location.hostname === '' ||
                   window.location.hostname.includes('weareour.tech'))
  ? (window.location.pathname.startsWith('/mobile-plans') ? '/mobile-plans' : '')
  : '/mobile-plans';

export async function loadView(viewName, locale) {
  // Try locale-specific view first (e.g., providers-ar.html)
  const localeView = `${BASE_PATH}/views/${viewName}-${locale}.html`;
  const defaultView = `${BASE_PATH}/views/${viewName}.html`;
  
  const key = `view:${viewName}:${locale}`;
  if (cache.has(key)) return cache.get(key);
  
  try {
    const response = await fetch(localeView);
    if (response.ok) {
      const html = await response.text();
      cache.set(key, html);
      return html;
    }
  } catch (e) {
    // Fall through to default
  }
  
  // Load default view
  const response = await fetch(defaultView);
  if (!response.ok) throw new Error(`View not found: ${viewName}`);
  const html = await response.text();
  cache.set(key, html);
  return html;
}

export async function loadStyle(styleName, locale) {
  const isRTL = ['ar', 'he', 'fa', 'ur'].includes(locale);
  
  // Build style URLs
  const urls = [
    `${BASE_PATH}/styles/${styleName}.css`,
    isRTL && `${BASE_PATH}/styles/${styleName}-rtl.css`
  ].filter(Boolean);
  
  // Remove old dynamic styles
  document.querySelectorAll('link[data-dynamic]').forEach(el => el.remove());
  
  // Inject new styles
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    link.dataset.dynamic = 'true';
    document.head.appendChild(link);
  });
}

export async function loadLocale(locale) {
  const key = `locale:${locale}`;
  if (cache.has(key)) return cache.get(key);
  
  const response = await fetch(`${BASE_PATH}/locales/${locale}.json`);
  if (!response.ok) {
    // Prevent infinite recursion if 'en' itself is not found
    if (locale === 'en') {
      console.error('Default locale (en) not found');
      return {}; // Return empty translations object
    }
    console.warn(`Locale not found: ${locale}, falling back to en`);
    return loadLocale('en');
  }
  const translations = await response.json();
  cache.set(key, translations);
  return translations;
}

export async function loadData(country) {
  const key = `data:${country}`;
  if (cache.has(key)) return cache.get(key);
  
  // Load country metadata
  const metaResponse = await fetch(`${BASE_PATH}/api/v1/${country}/meta.json`);
  const meta = await metaResponse.json();
  
  // Load all provider files listed in meta
  const providerData = await Promise.all(
    meta.providers.map(async (filename) => {
      const response = await fetch(`${BASE_PATH}/api/v1/${country}/providers/${filename}`);
      return response.json();
    })
  );
  
  // Flatten provider.plans[] into individual plans with provider field
  const providers = providerData.flatMap(providerFile => 
    providerFile.plans.map(plan => ({
      ...plan,
      provider: providerFile.provider
    }))
  );
  
  const data = { meta, providers };
  cache.set(key, data);
  return data;
}

// Clear cache on demand (useful for development)
export function clearCache() {
  cache.clear();
  console.log('Cache cleared');
}

window.clearCache = clearCache;
