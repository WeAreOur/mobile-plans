let currentTranslations = {};

export function setLocale(translations) {
  currentTranslations = translations;
}

export function t(key, replacements = {}) {
  let text = currentTranslations[key] || key;
  
  // Simple interpolation: {{ variable }}
  Object.keys(replacements).forEach(k => {
    text = text.replace(new RegExp(`{{\\s*${k}\\s*}}`, 'g'), replacements[k]);
  });
  
  return text;
}
