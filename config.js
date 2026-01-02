export const config = {
  view: 'providers',
  style: 'base',
  locale: 'en',
  country: 'uk',
  theme: 'light'
};

const listeners = new Set();

export function watch(callback) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function updateConfig(updates) {
  Object.assign(config, updates);
  
  // Update URL params for shareable links
  const params = new URLSearchParams(config);
  window.history.replaceState({}, '', `?${params}`);
  
  // Notify all watchers
  listeners.forEach(fn => fn(config));
}

// Load config from URL params on init
function loadFromURL() {
  const params = new URLSearchParams(window.location.search);
  params.forEach((value, key) => {
    if (key in config) config[key] = value;
  });
}

loadFromURL();

// Expose through WAO namespace for consistency
if (!window.WAO) window.WAO = {};
window.WAO.updateConfig = updateConfig;
window.WAO.config = config;
