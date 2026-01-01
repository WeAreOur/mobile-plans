const cache = new Map();

export async function loadView(viewName, locale) {
  // Try locale-specific view first (e.g., providers-ar.html)
  const localeView = `/views/${viewName}-${locale}.html`;
  const defaultView = `/views/${viewName}.html`;
  
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
    `/styles/${styleName}.css`,
    isRTL && `/styles/${styleName}-rtl.css`
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
  
  const response = await fetch(`/locales/${locale}.json`);
  if (!response.ok) {
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
  const metaResponse = await fetch(`/data/mobile-plans/${country}/meta.json`);
  const meta = await metaResponse.json();
  
  // Load all provider files listed in meta
  const providers = await Promise.all(
    meta.providers.map(async (filename) => {
      const response = await fetch(`/data/mobile-plans/${country}/${filename}`);
      return response.json();
    })
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
