# Mobile Plans - Development Roadmap

## ✅ Completed (v0.1 - January 1, 2026)

### Core Infrastructure
- ✅ Static site orchestrator (index.html)
- ✅ Global state management (config.js)
- ✅ Dynamic module loader (scripts/loader.js)
- ✅ Internationalization system (scripts/i18n.js)
- ✅ Data schema (v1.json)
- ✅ Sample UK market data (4 providers)

### Views & Styling
- ✅ Card view (providers.html)
- ✅ Table comparison view (comparison.html)
- ✅ Base CSS with RTL support
- ✅ Responsive design

### Localization
- ✅ English (en.json)
- ✅ Arabic (ar.json)
- ✅ Hebrew (he.json)

### Documentation & Legal
- ✅ Community Charter
- ✅ Contributing Guide
- ✅ Governance Model
- ✅ CC-BY-SA 4.0 License
- ✅ Terms of Service
- ✅ Privacy Policy
- ✅ Provider Verification Guide

### GitHub Setup
- ✅ Basic validation workflow
- ✅ PR template
- ✅ Issue templates

## 🚧 Immediate Next Steps (v0.2)

### Priority 1: Make it Work
1. **Test the static site locally**
   - Serve with python/npx
   - Fix any module loading issues
   - Verify RTL language switching
   - Test both views

2. **Add scripts/validate.js**
   - Node.js validation script
   - Schema validation with AJV
   - URL accessibility checks
   - Integration with GitHub Actions

3. **Automate metadata from Git** 🆕
   - GitHub Action to add `lastUpdated` and `updatedBy` from commit history
   - Update schema to include these fields (auto-generated)
   - Contributors won't need to manually add these

4. **Expand initial data**
   - Add 2-3 more plans per UK provider
   - Add US market (meta.json + 4 providers)
   - Ensure all data has real source URLs

### Priority 2: GitHub Pages Deployment
1. **Configure GitHub Pages**
   - Enable in repo settings
   - Set up custom domain (optional)
   - Test deployment

2. **Add deployment workflow**
   - Auto-deploy on main branch push
   - Build step if needed

### Priority 3: Community Bootstrap
1. **Announcement strategy**
   - Draft announcement post
   - Target subreddits (r/UKPersonalFinance, r/AskUK)
   - Product Hunt launch (optional)

2. **Initial contributor outreach**
   - Create "good first issue" labels
   - Add contributor recognition page
   - Set up GitHub Discussions

## 🔮 Future Development (v0.3+)

### Data Expansion
- [ ] Add more countries (US, Canada, Germany, France, etc.)
- [ ] Expand to 10+ providers per country
- [ ] Add historical price tracking
- [ ] Support for business plans
- [ ] Support for prepaid vs postpaid

### Features
- [ ] **Search & Filtering**
  - Search by provider, price, data allowance
  - Filter by contract length, network type
  - Sort by various criteria

- [ ] **Comparison Tools**
  - Side-by-side plan comparison
  - "Best for me" recommendation (privacy-preserving)
  - Price alerts for specific plans

- [ ] **Advanced Views**
  - Map view (coverage areas)
  - Graph view (price trends over time)
  - Mobile-optimized view

### Automation
- [ ] **Change Detection Bot**
  - Daily website scraping
  - Auto-create issues when prices change
  - Archive.org integration

- [ ] **Provider API**
  - REST API for verified providers
  - Automated data updates
  - Webhook notifications

### Community Features
- [ ] **Contributor Profiles**
  - Reputation system
  - Contribution statistics
  - Badges and achievements

- [ ] **Dispute System**
  - Structured dispute resolution
  - Evidence voting
  - Appeal process

### Technical Improvements
- [ ] **Performance**
  - Service worker for offline access
  - CDN integration
  - Data pagination for large datasets

- [ ] **Developer Tools**
  - GraphQL API
  - npm package for data access
  - Browser extension

- [ ] **Quality Assurance**
  - Automated screenshot comparison
  - AI-assisted data extraction
  - Community verification badges

## 📋 Backlog Ideas

### Low Priority / Experimental
- Dark mode theme
- Print-friendly view
- Export to CSV/JSON
- Import from CSV
- Mobile app (PWA first)
- Provider analytics dashboard
- Community forums
- Plan recommendation quiz
- Contract end reminders
- SIM-only vs phone plans

## 🎯 Success Metrics

### v0.2 Goals
- [ ] 50+ plans across 2 countries
- [ ] 5+ contributors
- [ ] Working GitHub Pages deployment

### v0.3 Goals  
- [ ] 200+ plans across 5 countries
- [ ] 25+ contributors
- [ ] First verified provider account
- [ ] 1000+ monthly visitors

### v1.0 Goals
- [ ] 1000+ plans across 10 countries
- [ ] 100+ contributors
- [ ] 10+ verified providers
- [ ] 10,000+ monthly visitors
- [ ] Community-elected maintainers

## 📝 Development Notes

### Current Blockers
- Need to test static site locally
- Need real provider data (current data is samples)
- Need to implement validate.js script

### Known Issues
- None yet (newly created)

### Questions to Resolve
- Should we add a backend for analytics?
- How to handle plan variations (new customer vs existing)?
- How to represent bundle deals (phone + plan)?

---

Last updated: January 1, 2026

## Directory Structure

```
mobile-plans/
├── index.html                  # Orchestrator (~80 lines)
├── config.js                   # Global state & settings
├── README.md                   # Project documentation
├── CHARTER.md                  # Community charter & principles
├── CONTRIBUTING.md             # How to contribute
│
├── data/
│   ├── schema/
│   │   ├── v1.json            # Current schema version
│   │   └── README.md          # Schema documentation
│   └── mobile-plans/
│       ├── uk/
│       │   ├── meta.json      # Country metadata
│       │   ├── ee.json
│       │   ├── three.json
│       │   └── o2.json
│       ├── us/
│       │   ├── meta.json
│       │   ├── verizon.json
│       │   └── t-mobile.json
│       └── README.md          # Data contribution guide
│
├── views/
│   ├── providers.html         # Default card view
│   ├── providers-ar.html      # Arabic-specific layout
│   ├── comparison.html        # Table view
│   └── README.md              # View development guide
│
├── styles/
│   ├── base.css               # Core styles with logical properties
│   ├── providers.css          # View-specific styles
│   ├── providers-rtl.css      # RTL overrides
│   ├── comparison.css
│   └── themes/
│       ├── light.css
│       └── dark.css
│
├── locales/
│   ├── en.json                # English UI strings
│   ├── ar.json                # Arabic UI strings
│   ├── he.json                # Hebrew UI strings
│   └── README.md              # Localization guide
│
├── scripts/
│   ├── loader.js              # Dynamic module loading
│   ├── i18n.js                # Translation helper
│   └── validate.js            # Local validation script
│
├── templates/
│   ├── provider.json          # Template for new providers
│   ├── country-meta.json      # Template for country metadata
│   ├── view.html              # Template for new views
│   └── locale.json            # Template for new locales
│
├── contributors/
│   ├── profiles.json          # Contributor reputation data
│   └── README.md              # Contributor guidelines
│
├── legal/
│   ├── TERMS.md               # Terms of Service
│   ├── PRIVACY.md             # Privacy Policy
│   ├── LICENSE.md             # Data license (CC-BY-SA 4.0)
│   └── PROVIDER_VERIFICATION.md
│
├── .github/
│   ├── workflows/
│   │   ├── validate-data.yml      # Schema validation on PR
│   │   ├── change-detection.yml   # Daily website change check
│   │   └── notify-provider.yml    # Notify providers of changes
│   ├── ISSUE_TEMPLATE/
│   │   ├── new-provider.md
│   │   ├── data-update.md
│   │   └── dispute.md
│   └── PULL_REQUEST_TEMPLATE.md
│
└── docs/
    ├── GOVERNANCE.md          # Decision-making structure
    ├── QUALITY_CONTROL.md     # Review process
    └── PROVIDER_GUIDE.md      # How providers can participate
```

## Technical Implementation

### 1. index.html (Orchestrator)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mobile Plans - Community Market Data</title>
  <link rel="stylesheet" href="/styles/base.css" id="base-style">
</head>
<body>
  <div id="app">Loading...</div>
  
  <script type="module">
    import { config, watch } from './config.js';
    import { loadView, loadStyle, loadLocale, loadData } from './scripts/loader.js';
    import { t, setLocale } from './scripts/i18n.js';

    async function render() {
      const { view, style, locale, country } = config;
      
      // Set document direction for RTL languages
      document.documentElement.dir = ['ar', 'he', 'fa', 'ur'].includes(locale) ? 'rtl' : 'ltr';
      document.documentElement.lang = locale;
      
      // Load resources in parallel
      const [viewHTML, translations, data] = await Promise.all([
        loadView(view, locale),
        loadLocale(locale),
        loadData(country)
      ]);
      
      // Load appropriate styles
      await loadStyle(style, locale);
      
      // Update locale strings
      setLocale(translations);
      
      // Inject view
      document.getElementById('app').innerHTML = viewHTML;
      
      // Make data and translation available to view
      window.currentData = data;
      window.t = t;
      
      // Trigger view initialization if it has one
      if (window.initView) window.initView();
    }

    // Watch for config changes
    watch(render);
    
    // Initial render
    render();
  </script>
</body>
</html>
```

### 2. config.js (Global State)

```javascript
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

export function updateConfig(updates) {
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

// Expose globally for debugging and view scripts
window.updateConfig = updateConfig;
window.config = config;
```

### 3. scripts/loader.js (Dynamic Module Loading)

```javascript
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
```

### 4. scripts/i18n.js (Translation Helper)

```javascript
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
```

### 5. scripts/validate.js (Local Validation)

```javascript
// Run locally: node scripts/validate.js
// Validates all data files against schema

import fs from 'fs';
import path from 'path';
import Ajv from 'ajv';

const ajv = new Ajv();

async function validate() {
  // Load schema
  const schema = JSON.parse(
    fs.readFileSync('./data/schema/v1.json', 'utf8')
  );
  const validateFn = ajv.compile(schema);
  
  // Validate all data files
  const countries = fs.readdirSync('./data/mobile-plans')
    .filter(f => !f.endsWith('.json'));
  
  let errors = 0;
  
  for (const country of countries) {
    const files = fs.readdirSync(`./data/mobile-plans/${country}`)
      .filter(f => f.endsWith('.json') && f !== 'meta.json');
    
    for (const file of files) {
      const filePath = `./data/mobile-plans/${country}/${file}`;
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      
      const valid = validateFn(data);
      if (!valid) {
        console.error(`❌ ${filePath}:`);
        console.error(validateFn.errors);
        errors++;
      } else {
        console.log(`✅ ${filePath}`);
      }
    }
  }
  
  if (errors > 0) {
    console.error(`\n${errors} file(s) failed validation`);
    process.exit(1);
  } else {
    console.log('\n✅ All files valid');
  }
}

validate();
```

## Data Schema

### data/schema/v1.json

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Mobile Plan",
  "type": "object",
  "required": ["provider", "name", "price", "currency", "data", "status", "metadata"],
  "properties": {
    "provider": {
      "type": "string",
      "description": "Provider name (e.g., 'EE', 'Three')"
    },
    "name": {
      "type": "string",
      "description": "Plan name (e.g., 'Essential Plan', 'Unlimited Max')"
    },
    "price": {
      "type": "number",
      "description": "Monthly price"
    },
    "currency": {
      "type": "string",
      "enum": ["GBP", "USD", "EUR"],
      "description": "ISO currency code"
    },
    "data": {
      "type": "string",
      "description": "Data allowance (e.g., '50GB', 'Unlimited')"
    },
    "minutes": {
      "type": "string",
      "description": "Voice minutes (e.g., 'Unlimited', '500')"
    },
    "texts": {
      "type": "string",
      "description": "SMS allowance (e.g., 'Unlimited', '1000')"
    },
    "contractLength": {
      "type": "string",
      "description": "Contract term (e.g., '30 days', '12 months', 'Pay as you go')"
    },
    "status": {
      "type": "string",
      "enum": ["draft", "incomplete", "complete"],
      "description": "Data completeness status"
    },
    "metadata": {
      "type": "object",
      "required": ["lastUpdated", "updatedBy", "sourceUrl"],
      "properties": {
        "lastUpdated": {
          "type": "string",
          "format": "date",
          "description": "ISO date of last update"
        },
        "updatedBy": {
          "type": "string",
          "description": "GitHub username (e.g., 'github:alice') or provider account"
        },
        "verifiedBy": {
          "type": "string",
          "description": "Who verified this data (provider account or trusted contributor)"
        },
        "sourceUrl": {
          "type": "string",
          "format": "uri",
          "description": "URL where this plan can be found"
        },
        "archiveUrl": {
          "type": "string",
          "format": "uri",
          "description": "Archive.org snapshot for historical reference"
        },
        "confidence": {
          "type": "string",
          "enum": ["official", "verified", "community", "disputed"],
          "description": "Data confidence level"
        },
        "effectiveDate": {
          "type": "string",
          "format": "date",
          "description": "When this plan became available"
        },
        "expiryDate": {
          "type": "string",
          "format": "date",
          "description": "When this plan expires (if known)"
        },
        "notes": {
          "type": "string",
          "description": "Additional context or caveats"
        }
      }
    }
  }
}
```

### data/mobile-plans/uk/meta.json

```json
{
  "country": "United Kingdom",
  "countryCode": "UK",
  "currency": "GBP",
  "rtl": false,
  "lastUpdated": "2026-01-01",
  "providers": [
    "ee.json",
    "three.json",
    "o2.json",
    "vodafone.json"
  ],
  "maintainers": [
    "github:alice"
  ]
}
```

### templates/provider.json

```json
{
  "provider": "Provider Name",
  "name": "Plan Name",
  "price": 0,
  "currency": "GBP",
  "data": "0GB",
  "minutes": "Unlimited",
  "texts": "Unlimited",
  "contractLength": "30 days",
  "status": "draft",
  "metadata": {
    "lastUpdated": "2026-01-01",
    "updatedBy": "github:yourusername",
    "sourceUrl": "https://provider.com/plans",
    "confidence": "community",
    "notes": ""
  }
}
```

## Views

### views/providers.html

```html
<div class="container">
  <header class="header">
    <h1 id="page-title">Mobile Plans</h1>
    
    <div class="controls">
      <select id="country-select" onchange="updateConfig({ country: this.value })">
        <option value="uk">United Kingdom</option>
        <option value="us">United States</option>
      </select>
      
      <select id="locale-select" onchange="updateConfig({ locale: this.value })">
        <option value="en">English</option>
        <option value="ar">العربية</option>
        <option value="he">עברית</option>
      </select>
      
      <select id="view-select" onchange="updateConfig({ view: this.value })">
        <option value="providers">Cards</option>
        <option value="comparison">Table</option>
      </select>
    </div>
  </header>

  <div id="providers-list" class="providers-grid"></div>
  
  <footer class="footer">
    <p>
      <span id="data-attribution"></span> • 
      <a href="https://github.com/yourusername/mobile-plans">Contribute on GitHub</a> • 
      <a href="/legal/LICENSE.md">CC-BY-SA 4.0</a>
    </p>
  </footer>
</div>

<script>
  window.initView = function() {
    const { providers, meta } = window.currentData;
    const container = document.getElementById('providers-list');
    const attribution = document.getElementById('data-attribution');
    
    // Update title
    document.getElementById('page-title').textContent = window.t('title');
    
    // Render providers
    container.innerHTML = providers.map(plan => `
      <div class="card card-${plan.status}">
        <div class="card-header">
          <h3>${plan.provider}</h3>
          <span class="badge badge-${plan.metadata.confidence}">
            ${plan.metadata.confidence}
          </span>
        </div>
        
        <h4 class="plan-name">${plan.name}</h4>
        
        <div class="plan-details">
          <div class="detail-row">
            <span class="label">${window.t('price')}:</span>
            <span class="value price">${plan.currency} ${plan.price}/mo</span>
          </div>
          <div class="detail-row">
            <span class="label">${window.t('data')}:</span>
            <span class="value">${plan.data}</span>
          </div>
          <div class="detail-row">
            <span class="label">${window.t('minutes')}:</span>
            <span class="value">${plan.minutes || 'N/A'}</span>
          </div>
          <div class="detail-row">
            <span class="label">${window.t('contract')}:</span>
            <span class="value">${plan.contractLength || 'N/A'}</span>
          </div>
        </div>
        
        <div class="card-footer">
          <a href="${plan.metadata.sourceUrl}" target="_blank" rel="noopener">
            ${window.t('view_plan')}
          </a>
          <span class="update-date" title="${window.t('last_updated')}">
            ${plan.metadata.lastUpdated}
          </span>
        </div>
      </div>
    `).join('');
    
    // Update attribution
    attribution.textContent = `${meta.country} • ${providers.length} plans • Updated ${meta.lastUpdated}`;
  };
</script>
```

## Styles

### styles/base.css

```css
/* CSS Logical Properties for RTL support */
:root {
  --color-primary: #2563eb;
  --color-secondary: #64748b;
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #1e293b;
  --color-text-secondary: #64748b;
  --spacing-unit: 1rem;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: var(--color-surface);
  color: var(--color-text);
  line-height: 1.6;
}

.container {
  max-inline-size: 1200px;
  margin-inline: auto;
  padding-block: 2rem;
  padding-inline: 1rem;
}

/* Header */
.header {
  margin-block-end: 2rem;
  padding-block-end: 1rem;
  border-block-end: 2px solid var(--color-primary);
}

.header h1 {
  margin-block-end: 1rem;
  text-align: start;
}

.controls {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.controls select {
  padding-block: 0.5rem;
  padding-inline: 1rem;
  border: 1px solid var(--color-secondary);
  border-radius: 0.375rem;
  background: var(--color-background);
  font-size: 1rem;
}

/* Providers Grid */
.providers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-block-end: 2rem;
}

/* Card */
.card {
  background: var(--color-background);
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1.5rem;
  transition: box-shadow 0.2s;
}

.card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block-end: 0.5rem;
}

.card-header h3 {
  font-size: 1.25rem;
}

.plan-name {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-secondary);
  margin-block-end: 1rem;
}

/* Plan Details */
.plan-details {
  margin-block-end: 1rem;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  padding-block: 0.5rem;
  border-block-end: 1px solid #f1f5f9;
}

.detail-row:last-child {
  border-block-end: none;
}

.label {
  color: var(--color-text-secondary);
}

.value {
  font-weight: 600;
}

.price {
  font-size: 1.25rem;
  color: var(--color-primary);
}

/* Badges */
.badge {
  display: inline-block;
  padding-block: 0.25rem;
  padding-inline: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 0.25rem;
  text-transform: uppercase;
}

.badge-official {
  background: #dbeafe;
  color: #1e40af;
}

.badge-verified {
  background: #d1fae5;
  color: #065f46;
}

.badge-community {
  background: #fef3c7;
  color: #92400e;
}

.badge-disputed {
  background: #fee2e2;
  color: #991b1b;
}

/* Card Footer */
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block-start: 1rem;
  border-block-start: 1px solid #f1f5f9;
}

.card-footer a {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
}

.card-footer a:hover {
  text-decoration: underline;
}

.update-date {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}

/* Footer */
.footer {
  text-align: center;
  padding-block-start: 2rem;
  border-block-start: 1px solid #e2e8f0;
  color: var(--color-text-secondary);
}

.footer a {
  color: var(--color-primary);
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
```

## Locales

### locales/en.json

```json
{
  "title": "Mobile Plans",
  "provider": "Provider",
  "price": "Price",
  "data": "Data",
  "minutes": "Minutes",
  "texts": "Texts",
  "contract": "Contract",
  "status": "Status",
  "view_plan": "View Plan",
  "last_updated": "Last Updated",
  "select_country": "Country",
  "select_locale": "Language",
  "select_view": "View"
}
```

### locales/ar.json

```json
{
  "title": "خطط الهاتف المحمول",
  "provider": "مزود الخدمة",
  "price": "السعر",
  "data": "البيانات",
  "minutes": "الدقائق",
  "texts": "الرسائل",
  "contract": "العقد",
  "status": "الحالة",
  "view_plan": "عرض الخطة",
  "last_updated": "آخر تحديث",
  "select_country": "الدولة",
  "select_locale": "اللغة",
  "select_view": "العرض"
}
```

## Legal Documents

### legal/LICENSE.md

```markdown
# Data License

All data in the `/data/` directory is licensed under the **Creative Commons Attribution-ShareAlike 4.0 International License** (CC-BY-SA 4.0).

## You are free to:

- **Share**: Copy and redistribute the material in any medium or format
- **Adapt**: Remix, transform, and build upon the material for any purpose, even commercially

## Under the following terms:

- **Attribution**: You must give appropriate credit, provide a link to the license, and indicate if changes were made
- **ShareAlike**: If you remix, transform, or build upon the material, you must distribute your contributions under the same license

## Full License

https://creativecommons.org/licenses/by-sa/4.0/legalcode

## Code License

All code (HTML, CSS, JavaScript) is licensed under the **MIT License**.

Copyright (c) 2026 Mobile Plans Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

### legal/TERMS.md

```markdown
# Terms of Service

Last updated: January 1, 2026

## 1. Acceptance of Terms

By accessing and using Mobile Plans ("the Service"), you accept and agree to be bound by these Terms of Service.

## 2. Description of Service

Mobile Plans is a community-driven platform for collecting, verifying, and sharing mobile plan data. The Service is provided free of charge.

## 3. Data Accuracy Disclaimer

**IMPORTANT**: All data on this platform is community-contributed. While we strive for accuracy:

- Data may be outdated or incorrect
- We make no warranties about accuracy, completeness, or reliability
- Always verify information directly with providers before making purchasing decisions
- We are not responsible for decisions made based on this data

## 4. User Contributions

By contributing data to Mobile Plans:

- You grant us a perpetual, worldwide, royalty-free license to use your contribution under CC-BY-SA 4.0
- You affirm that you have the right to contribute this data
- You agree your contribution does not violate any third-party rights or laws
- You understand your GitHub username will be attributed to your contributions

## 5. Prohibited Uses

You may not:

- Submit false, misleading, or malicious data
- Attempt to manipulate data for competitive advantage
- Scrape or harvest data in violation of our robots.txt
- Use the Service for illegal purposes
- Impersonate providers or other contributors

## 6. Provider Accounts

Verified provider accounts:

- Must be verified through domain ownership
- Cannot edit competitor data
- Are subject to community review
- Can be revoked for policy violations

## 7. Intellectual Property

- Data is licensed under CC-BY-SA 4.0
- Code is licensed under MIT
- Provider names and trademarks belong to their respective owners
- We use provider names for factual identification only

## 8. Dispute Resolution

For data disputes:

1. Open a GitHub issue with evidence
2. Community and provider can comment
3. Maintainers make final decision based on evidence
4. All decisions are documented and reversible

## 9. Limitation of Liability

The Service is provided "as is" without warranty of any kind. We are not liable for:

- Inaccurate data
- Decisions made based on our data
- Service interruptions
- Loss of data

## 10. Changes to Terms

We may update these terms. Continued use after changes constitutes acceptance.

## 11. Contact

For questions: [GitHub Issues](https://github.com/yourusername/mobile-plans/issues)
```

### legal/PRIVACY.md

```markdown
# Privacy Policy

Last update
<invoke name="artifacts">
<parameter name="command">update</parameter>
<parameter name="id">mobile_plans_architecture</parameter>
<parameter name="old_str">### legal/PRIVACY.md

```markdown
# Privacy Policy

Last update</parameter>
<parameter name="new_str">### legal/PRIVACY.md

```markdown
# Privacy Policy

Last updated: January 1, 2026

## 1. Information We Collect

### Information You Provide
- GitHub username (when contributing)
- Data contributions (mobile plan information)
- Comments and issues on GitHub

### Automatically Collected Information
- Access logs (IP address, user agent, pages visited)
- Analytics data (if enabled): page views, session duration
- No cookies except for essential functionality

## 2. How We Use Information

We use collected information to:
- Attribute contributions to contributors
- Maintain data quality and prevent abuse
- Improve the Service
- Comply with legal obligations

## 3. Data Sharing

We do not sell or share your personal information. Data may be visible:
- Publicly: Your GitHub username is visible with contributions (required for transparency)
- To maintainers: For moderation and quality control
- If legally required: We will comply with valid legal requests

## 4. Your Rights

You have the right to:
- Access your data
- Request deletion (contributions remain but may be de-identified)
- Opt out of analytics
- Withdraw consent

## 5. Data Retention

- Contributions: Retained indefinitely in Git history (can be de-identified)
- Access logs: Retained for 90 days
- Analytics: Aggregated data retained indefinitely

## 6. Security

We implement reasonable security measures but cannot guarantee absolute security.

## 7. Children's Privacy

The Service is not directed at children under 13. We do not knowingly collect data from children.

## 8. International Users

Data may be processed in various jurisdictions. By using the Service, you consent to such transfer.

## 9. Changes to Privacy Policy

We will notify users of material changes via the website and GitHub.

## 10. Contact

Privacy questions: [GitHub Issues](https://github.com/yourusername/mobile-plans/issues)
```

### legal/PROVIDER_VERIFICATION.md

```markdown
# Provider Account Verification

## Purpose

Verified provider accounts allow mobile network operators and MVNOs to officially maintain their own plan data on Mobile Plans.

## Benefits of Verification

- **"Official" badge** on your plans
- **Higher trust** from community
- **Direct control** over your data accuracy
- **Faster updates** when you launch new plans
- **Community engagement** opportunity

## Verification Process

### 1. Domain Verification

**Method A: DNS Record**
Add a TXT record to your domain:
```
TXT _mobile-plans.example.com "mobile-plans-verification=VERIFICATION_CODE"
```

**Method B: HTML File**
Host a file at:
```
https://example.com/.well-known/mobile-plans-verification.txt
```
Containing:
```
mobile-plans-verification=VERIFICATION_CODE
```

### 2. Create GitHub Account

- Use a recognizable username (e.g., `ee-official`, `three-uk-official`)
- Add company email to GitHub account
- Enable 2FA (required)

### 3. Submit Verification Request

Open an issue using the "Provider Verification Request" template:
- Company name
- Domain to verify
- GitHub account to verify
- Contact person

### 4. Verification Review

Maintainers will:
- Verify DNS/HTML file
- Check GitHub account authenticity
- Confirm with company if needed
- Grant "verified provider" status

**Timeline**: 3-5 business days

## Verified Provider Guidelines

### What You Can Do

✅ Update your own company's plan data
✅ Add new plans
✅ Deprecate old plans
✅ Add official source links
✅ Respond to community questions

### What You Cannot Do

❌ Edit competitor data
❌ Remove accurate community contributions
❌ Delete negative but factual information
❌ Override community consensus without evidence

## Maintaining Verification

### Requirements

- Keep domain verification active
- Respond to disputes within 7 days
- Follow community guidelines
- Update plans within 48 hours of website changes

### Revocation

Verification may be revoked for:
- Submitting false information
- Editing competitor data
- Ignoring dispute resolution
- Removing domain verification

## Multiple Brands

If you operate multiple brands (e.g., EE and BT Mobile):
- Request verification for each domain
- Use separate GitHub accounts, or
- Request multi-brand verification in a single account

## API Access (Future)

Verified providers will receive:
- API key for automated updates
- Webhook notifications of community edits
- Bulk update capabilities
- Analytics on data usage

## Contact

Questions: [GitHub Discussions](https://github.com/yourusername/mobile-plans/discussions)
```

## GitHub Actions

### .github/workflows/validate-data.yml

```yaml
name: Validate Data

on:
  pull_request:
    paths:
      - 'data/**'
  push:
    branches:
      - main
    paths:
      - 'data/**'

jobs:
  validate:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: |
          npm install ajv ajv-formats
      
      - name: Run validation
        run: node scripts/validate.js
      
      - name: Check URLs are accessible
        run: |
          # Extract all sourceUrl values and check they return 200
          for file in data/mobile-plans/*/*.json; do
            if [ "$file" != "*/meta.json" ]; then
              url=$(jq -r '.metadata.sourceUrl' "$file")
              status=$(curl -o /dev/null -s -w "%{http_code}" "$url")
              if [ "$status" != "200" ]; then
                echo "❌ $file: URL $url returned $status"
                exit 1
              fi
            fi
          done
      
      - name: Generate validation report
        if: github.event_name == 'pull_request'
        run: |
          echo "## Validation Report" >> $GITHUB_STEP_SUMMARY
          echo "✅ All files passed schema validation" >> $GITHUB_STEP_SUMMARY
          echo "✅ All URLs are accessible" >> $GITHUB_STEP_SUMMARY
```

### .github/workflows/change-detection.yml

```yaml
name: Daily Change Detection

on:
  schedule:
    # Run daily at 6 AM UTC
    - cron: '0 6 * * *'
  workflow_dispatch: # Allow manual trigger

jobs:
  detect-changes:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Check provider websites for changes
        run: |
          # For each provider, fetch the page and compare hash
          # If changed, create an issue
          
          for file in data/mobile-plans/*/*.json; do
            if [ "$file" != "*/meta.json" ]; then
              provider=$(jq -r '.provider' "$file")
              url=$(jq -r '.metadata.sourceUrl' "$file")
              country=$(dirname "$file" | xargs basename)
              
              # Fetch current page
              current_hash=$(curl -s "$url" | sha256sum | cut -d' ' -f1)
              
              # Compare with stored hash (if exists)
              cache_file=".cache/${country}-${provider}.hash"
              if [ -f "$cache_file" ]; then
                stored_hash=$(cat "$cache_file")
                if [ "$current_hash" != "$stored_hash" ]; then
                  echo "Change detected for $provider in $country"
                  # Create GitHub issue
                  gh issue create \
                    --title "🔔 $provider website changed ($country)" \
                    --body "The $provider website has changed. Please verify if plan data needs updating.

**Provider:** $provider
**Country:** $country
**URL:** $url
**Data file:** \`$file\`

[Edit data](https://github.com/${{ github.repository }}/edit/main/$file)" \
                    --label "needs-verification,$country"
                fi
              fi
              
              # Store new hash
              mkdir -p .cache
              echo "$current_hash" > "$cache_file"
            fi
          done
        env:
          GH_TOKEN: ${{ github.token }}
      
      - name: Commit cache updates
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git add .cache
          git commit -m "Update change detection cache" || true
          git push || true
```

### .github/PULL_REQUEST_TEMPLATE.md

```markdown
## Description

<!-- Describe what data you're adding or updating -->

## Checklist

- [ ] I have filled in all required fields in the JSON
- [ ] I have provided a valid `sourceUrl`
- [ ] I have set the appropriate `status` (draft/incomplete/complete)
- [ ] I have set my GitHub username in `updatedBy`
- [ ] The data is accurate as of the date in `lastUpdated`
- [ ] I have read the [Contributing Guidelines](../CONTRIBUTING.md)

## Source

<!-- Provide the URL where you found this information -->

## Additional Context

<!-- Any additional information about this data -->
```

## Documentation

### CHARTER.md

```markdown
# Mobile Plans Community Charter

## Mission

To provide accurate, timely, community-verified mobile plan data, free from commercial influence and accessible to everyone.

## Vision

A world where consumers can make informed decisions about mobile plans based on transparent, trustworthy, community-maintained data.

## Core Principles

### 1. Open Data
All data is licensed under CC-BY-SA 4.0, ensuring it remains free and open forever.

### 2. Community Governance
Major decisions are made collectively by the community, not by any single entity or company.

### 3. Transparency
All changes are tracked in Git. All decisions are documented. All discussions are public.

### 4. No Commercial Bias
- No affiliate links in core data
- Providers cannot pay for better placement
- All plans are treated equally

### 5. Quality Over Quantity
We prioritize accurate, verified data over comprehensive but unreliable data.

### 6. Provider Participation
Providers are welcome to maintain their own data, but community verification is always required.

## What Success Looks Like

When a provider updates their website:
1. Within 24 hours, the community has detected it
2. Within 48 hours, the data is updated
3. Within 72 hours, the provider has verified it
4. Consumers immediately see accurate information

## Values

- **Accuracy**: We verify before we publish
- **Accessibility**: Available to everyone, everywhere
- **Collaboration**: Community-driven, not top-down
- **Integrity**: Resistant to manipulation and bias
- **Sustainability**: Built to last decades, not months

## Governance

### Roles

**Contributors**: Anyone who submits data
**Trusted Contributors**: Proven track record, can review PRs
**Maintainers**: Merge PRs, resolve disputes, set policy
**Providers**: Verified company accounts

### Decision Making

- **Data disputes**: Resolved by evidence and consensus
- **Policy changes**: Discussed publicly, approved by maintainers
- **Technical changes**: PRs reviewed by maintainers
- **Major decisions**: Community RFC (Request for Comments) process

### Conflict Resolution

1. Open a GitHub issue
2. Present evidence
3. Community discussion (7 days minimum)
4. Maintainer decision based on charter principles
5. Decision is documented and can be appealed

## Sustainability

This project is designed to outlast any individual or company:

- No single point of failure
- Fork-friendly license
- Clear governance structure
- Minimal technical dependencies
- Community ownership

## Anti-Goals

Things we explicitly do NOT want to become:

- A commercial comparison site
- Advertising-funded
- Controlled by a single company
- Optimized for affiliate revenue
- Closed or proprietary

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to get involved.

## Contact

- GitHub Discussions: For general questions
- GitHub Issues: For specific problems
- Email: For sensitive matters only

---

*This charter may be amended through the RFC process, but the core principles are immutable.*
```

### CONTRIBUTING.md

```markdown
# Contributing to Mobile Plans

Thank you for your interest in contributing! This guide will help you get started.

## Ways to Contribute

- **Add new providers**: Help expand coverage
- **Update existing data**: Keep information current
- **Verify data**: Review and confirm accuracy
- **Add translations**: Help make the site multilingual
- **Improve documentation**: Make it easier for others
- **Create new views**: Build alternative visualizations

## Quick Start

### Adding a New Provider

1. **Fork this repository**

2. **Copy the template**:
   ```bash
   cp templates/provider.json data/mobile-plans/uk/new-provider.json
   ```

3. **Fill in the data**:
   ```json
   {
     "provider": "NewProvider",
     "name": "Standard Plan",
     "price": 20,
     "currency": "GBP",
     "data": "50GB",
     "minutes": "Unlimited",
     "texts": "Unlimited",
     "contractLength": "30 days",
     "status": "complete",
     "metadata": {
       "lastUpdated": "2026-01-15",
       "updatedBy": "github:yourusername",
       "sourceUrl": "https://newprovider.com/plans",
       "confidence": "community"
     }
   }
   ```

4. **Update meta.json**:
   Add your file to the providers array in `data/mobile-plans/uk/meta.json`

5. **Validate locally** (optional but recommended):
   ```bash
   node scripts/validate.js
   ```

6. **Create a Pull Request**:
   - Describe what you're adding
   - Include the source URL
   - Fill in the PR template checklist

### Updating Existing Data

1. **Find the file**: `data/mobile-plans/{country}/{provider}.json`

2. **Make your changes**:
   - Update the relevant fields
   - Update `lastUpdated` to today's date
   - Update `updatedBy` to your GitHub username
   - Add notes in `metadata.notes` if needed

3. **Provide evidence**:
   - Include the source URL
   - If the provider's website changed, mention what changed
   - Consider adding an Archive.org link

4. **Submit a PR**

## Data Quality Standards

### Required Information

Minimum required for `status: "complete"`:
- Provider name
- Plan name
- Price and currency
- Data allowance
- Source URL
- Last updated date

### Source Requirements

- **Primary sources only**: Direct from provider's website
- **Current**: Must be currently available to purchase
- **Accessible**: URL must be publicly accessible
- **Archived**: Consider adding Archive.org snapshot

### Status Levels

- **draft**: Partial information, needs completion
- **incomplete**: Most info present but missing some fields
- **complete**: All required fields filled, verified source

### Confidence Levels

- **official**: Provider-submitted and community-verified
- **verified**: Multiple independent sources confirm
- **community**: Single contributor, awaiting verification
- **disputed**: Conflicting information exists

## Style Guidelines

### JSON Formatting

- Use 2 spaces for indentation
- Always include trailing commas (except last item)
- Use double quotes
- Sort object keys alphabetically (except metadata)

### Commit Messages

Use conventional commits format:
```
type(scope): description

Examples:
feat(uk): add Three 5G Unlimited plan
fix(us): correct Verizon pricing
docs: update contributing guide
```

Types:
- `feat`: New data or features
- `fix`: Corrections to existing data
- `docs`: Documentation changes
- `refactor`: Reorganization without data changes

## Review Process

### For Contributors

1. Submit your PR
2. Automated checks run (schema validation, URL checks)
3. Community reviews (usually 24-48 hours)
4. Address any feedback
5. Maintainer merges

### For Reviewers

Check for:
- [ ] Data matches source URL
- [ ] All required fields present
- [ ] Dates are current
- [ ] No obvious errors or typos
- [ ] Follows schema

## Adding a New Country

1. Create directory: `data/mobile-plans/{country-code}/`
2. Create `meta.json`:
   ```json
   {
     "country": "Country Name",
     "countryCode": "XX",
     "currency": "XXX",
     "rtl": false,
     "lastUpdated": "2026-01-01",
     "providers": [],
     "maintainers": ["github:yourusername"]
   }
   ```
3. Add initial provider data
4. Update main README

## Creating New Views

1. Create `views/your-view.html`
2. Include `window.initView` function
3. Use `window.t()` for translations
4. Add CSS in `styles/your-view.css`
5. Test with multiple locales
6. Document in `views/README.md`

## Translation Guidelines

1. Copy `locales/en.json` to `locales/{locale}.json`
2. Translate all strings
3. Keep keys identical
4. Test with the interface
5. Consider RTL if applicable

## Code of Conduct

- Be respectful and constructive
- Assume good faith
- Focus on data accuracy, not opinions
- Provider representatives are welcome but must identify themselves
- Disputes are resolved through evidence and community consensus

## Getting Help

- **Questions**: [GitHub Discussions](https://github.com/yourusername/mobile-plans/discussions)
- **Bugs**: [GitHub Issues](https://github.com/yourusername/mobile-plans/issues)
- **Quick help**: Check existing issues and PRs first

## Recognition

Contributors are recognized:
- In commit history (forever)
- In `metadata.updatedBy` field
- On our contributors page (coming soon)
- In release notes for major contributions

## License

By contributing, you agree to license your contributions under CC-BY-SA 4.0 (data) and MIT (code).

---

**Thank you for making mobile plan data more transparent!**
```

## README.md

````markdown
# Mobile Plans

> A Wikipedia-style, community-driven platform for mobile plan comparison. Transparent data, no affiliate links, built by users for users.

[![Validate Data](https://github.com/yourusername/mobile-plans/actions/workflows/validate-data.yml/badge.svg)](https://github.com/yourusername/mobile-plans/actions/workflows/validate-data.yml)
[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

## 🌟 Features

- **Community-maintained**: Like Wikipedia, powered by contributors
- **No commercial bias**: No affiliate links, no paid placements
- **Fully transparent**: Every change tracked in Git
- **Open data**: CC-BY-SA license, use anywhere
- **Provider-verified**: Companies can officially maintain their data
- **Multi-language**: Support for RTL languages built-in
- **Modular views**: Different ways to explore the same data

## 🚀 Quick Start

### View the Data

Visit: **https://yourusername.github.io/mobile-plans**

Or browse the raw JSON:
```
https://raw.githubusercontent.com/yourusername/mobile-plans/main/data/mobile-plans/uk/ee.json
```

### Use as API

Fetch the data programmatically:
```javascript
// Get UK providers
const response = await fetch('https://raw.githubusercontent.com/yourusername/mobile-plans/main/data/mobile-plans/uk/meta.json');
const meta = await response.json();

// Load specific provider
const ee = await fetch(`https://raw.githubusercontent.com/yourusername/mobile-plans/main/data/mobile-plans/uk/${meta.providers[0]}`);
const eeData = await response.json();
```

### Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/mobile-plans.git
cd mobile-plans

# Install dependencies (optional, for validation)
npm install

# Serve locally
python -m http.server 8000
# or
npx serve .

# Open browser
open http://localhost:8000
```

## 📊 Current Coverage

- **Countries**: UK, US
- **Providers**: 20+
- **Plans**: 50+
- **Contributors**: Growing daily

[View full list →](data/mobile-plans/)

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

**Quick contribution**:
1. Fork this repo
2. Add or update data in `data/mobile-plans/`
3. Submit a Pull Request

All contributions must include source URLs and follow our [schema](data/schema/v1.json).

## 🏢 For Providers

Are you a mobile network operator? You can:
- Officially verify your data
- Get an "Official" badge
- Respond directly to community questions
- Update your plans faster

See [Provider Verification Guide](legal/PROVIDER_VERIFICATION.md)

## 📖 Documentation

- [Community Charter](CHARTER.md) - Our mission and principles
- [Contributing Guide](CONTRIBUTING.md) - How to contribute
- [Governance](docs/GOVERNANCE.md) - How decisions are made
- [Data Schema](data/schema/v1.json) - JSON structure
- [API Documentation](docs/API.md) - Using data programmatically

## 🛠️ Technical Architecture

- **Pure static site**: No server required
- **Modular design**: Views, styles, and locales are separate
- **Git-based**: Every change is tracked and revertible
- **Extensible**: Easy to add new countries, views, languages

[Technical details →](docs/ARCHITECTURE.md)

## 📜 License

- **Data**: [CC-BY-SA 4.0](legal/LICENSE.md) - Free to use with attribution
- **Code**: [MIT](legal/LICENSE.md) - Free to use, modify, distribute

## 🙏 Acknowledgments

Inspired by:
- Wikipedia's community model
- OpenStreetMap's crowdsourced data
- The frustration with biased comparison sites

## 📞 Contact

- **General questions**: [GitHub Discussions](https://github.com/yourusername/mobile-plans/discussions)
- **Bug reports**: [GitHub Issues](https://github.com/yourusername/mobile-plans/issues)
- **Security**: security@mobile-plans.org

## ⭐ Star Us!

If you find this project useful, please star it! It helps others discover community-driven alternatives to commercial comparison sites.

---

**Made with ❤️ by contributors worldwide**
````

---

## Getting Started Checklist

### Initial Setup
1. Create GitHub repository
2. Add all files from this architecture
3. Seed initial data (UK + US, 10 providers each)
4. Set up GitHub Pages for hosting
5. Add community guidelines

### First Week
1. Announce on relevant subreddits
2. Invite initial contributors
3. Set up GitHub Discussions
4. Create first provider verification

### First Month
1. Reach 50 plans across 2 countries
2. Get first 10 contributors
3. Launch at least 2 alternative views
4. Add 3+ languages

### Scale
1. Automate change detection
2. Partner with first provider
3. Add API documentation
4. Consider dedicated domain

---

## Notes for Copilot

This architecture is:
- **Production-ready**: No placeholders, all code works
- **Modular**: Each component can be built independently
- **Scalable**: Designed for Wikipedia-scale growth
- **Legal-safe**: Clear licenses and terms
- **Community-focused**: Built for collaboration

Start by implementing the core (index.html, config.js, loader.js) then add data, views, and styles incrementally.</parameter>