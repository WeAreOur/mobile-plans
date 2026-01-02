# Changelog

All notable changes to the Mobile Plans project will be documented in this file.

> ⚠️ **AI-Generated Project**: This entire project was generated and is maintained by AI (Claude). The codebase, documentation, and architecture were created through AI assistance.

## [Unreleased]

## [0.2.0] - 2026-01-02

### Added
- All 15 UK mobile providers with verified, complete data (189 plans total)
  - **MNOs**: EE (25 plans), Three (3 plans), Vodafone (8 plans), O2 (4 plans)
  - **O2 MVNOs**: GiffGaff (22), Tesco Mobile (14), Lycamobile (24), Sky Mobile (8)
  - **Vodafone MVNOs**: ASDA Mobile (10), Talkmobile (8), Lebara (12), Voxi (5)
  - **Three MVNOs**: iD Mobile (25), Superdrug Mobile (5), Smarty (16)
- Enhanced schema with additional fields:
  - `network`: Network operator (EE, Vodafone, Three, O2)
  - `speedCap`: Speed limit (e.g., "10Mbps", "100Mbps", "Uncapped")
  - `5g`: Boolean for 5G support
  - `priceIncrease`: Annual price rise mechanism (e.g., "CPI + 3.9%", "None", "£2.50 per April")
- Sorting functionality with 6 options (price, data, provider - ascending/descending)
- Migration scripts for batch schema updates

### Changed
- **BREAKING**: Restructured data directory to `/api/v1/` for cleaner API-style URLs
  - Old: `/data/mobile-plans/uk/ee.json` → New: `/api/v1/uk/providers/ee.json`
  - Schema: `/data/schema/v1.json` → `/api/v1/schema.json`
  - Country metadata: `/data/mobile-plans/uk/meta.json` → `/api/v1/uk/meta.json`
  - Versioning now built into API path for future compatibility
- Views now filter to show only verified and complete plans
- Replaced "verified" confidence badges with "Last reviewed: DATE" display
- Moved review date from card header to footer for better UX
- Changed "EU Roaming" to "Roaming" for international applicability
- Improved roaming display: "Free EU" vs "Free EU (up to 25GB)" for clarity
- Hidden language and country selectors (only one option available currently)
- Fixed Sky Mobile roaming to show £2/day charge
- Fixed Sky Mobile plans to show unlimited calls and texts

### Removed
- Provider verification process documentation (process not yet defined)
- "Provider-verified" feature from README (not yet implemented)
- Draft and community confidence plans from public views

### Fixed
- Sky Mobile plans now correctly show unlimited calls and texts (not data-only)
- Roaming display no longer shows "Unknown" - displays "Free EU" instead
- Eliminated duplicate "Data-only plan" text in Sky Mobile notes

## [0.1.0] - 2026-01-01

### Changed
- **BREAKING**: Restructured data schema to provider-centric model
  - Each provider now has single JSON file with `plans[]` array
  - Consolidated 12 individual plan files into 8 provider files
  - Updated schema to use Wikipedia-style `sources[]` citations instead of single `sourceUrl`
  - Each source citation includes: `url`, `accessDate`, `notes`, and optional `archiveUrl`
  - Updated loader.js to flatten `provider.plans[]` into individual plans
  - Updated template files to reflect new structure
- Removed `lastUpdated` and `updatedBy` fields from data schema (will automate via CI in future)
- Renamed PROJECT_SUMMARY.md to CHANGELOG.md
- Added AI disclaimer to README

### Migration Notes
- Old format: One file per plan (e.g., `ee.json`, `ee-full-works.json`)
- New format: One file per provider with plans array (e.g., `ee.json` contains both Essential and Full Works plans)
- Metadata now uses `sources[]` array instead of `sourceUrl` string
- Loader automatically flattens provider.plans[] for backwards compatibility with views

## [0.1.0] - 2026-01-01

### Added - Initial Release

**Date**: January 1, 2026  
**Version**: v0.1  
**Status**: ✅ Core Implementation Complete

## 🎉 What Has Been Built

A fully functional, community-driven mobile plan comparison platform inspired by Wikipedia's model.

### Core Features Implemented

1. **Static Site Architecture**
   - Pure HTML/CSS/JavaScript - no build step required
   - Modular design with dynamic view loading
   - URL-based state management for shareable links
   - Works offline once loaded

2. **Data Infrastructure**
   - JSON-based data storage
   - Schema validation (v1.json)
   - Template files for easy contribution
   - Sample UK market data (4 providers)

3. **User Interface**
   - **Card View**: Visual, mobile-friendly plan cards
   - **Table View**: Comparison table for side-by-side analysis
   - Responsive design (works on all devices)
   - RTL language support (Arabic, Hebrew)

4. **Internationalization**
   - English, Arabic, Hebrew translations
   - Easy to add more languages
   - Automatic RTL layout switching

5. **Legal & Governance**
   - CC-BY-SA 4.0 license for data
   - MIT license for code
   - Terms of Service
   - Privacy Policy
   - Community Charter
   - Governance model

6. **Developer Experience**
   - Clear contribution guidelines
   - PR templates
   - Issue templates
   - GitHub Actions validation
   - Comprehensive documentation

## 📂 Project Structure

```
mobile-plans/
├── index.html              ✅ Orchestrator
├── config.js               ✅ Global state
├── README.md               ✅ Updated
├── CHARTER.md              ✅ Community principles
├── CONTRIBUTING.md         ✅ Contribution guide
├── AI_PLAN_PROMPT.md       ✅ Development roadmap
│
├── api/
│   └── v1/
│       ├── schema.json      ✅ Data schema
│       └── uk/              ✅ UK market data
│           ├── meta.json
│           └── providers/
│               ├── ee.json
│               ├── three.json
│               ├── o2.json
│               └── vodafone.json
│
├── views/
│   ├── providers.html      ✅ Card view
│   └── comparison.html     ✅ Table view
│
├── styles/
│   ├── base.css            ✅ Core styles
│   └── base-rtl.css        ✅ RTL overrides
│
├── scripts/
│   ├── loader.js           ✅ Module loader
│   └── i18n.js             ✅ Translation system
│
├── locales/
│   ├── en.json             ✅ English
│   ├── ar.json             ✅ Arabic
│   └── he.json             ✅ Hebrew
│
├── templates/
│   ├── provider.json       ✅ Provider template
│   └── country-meta.json   ✅ Country template
│
├── legal/
│   ├── LICENSE.md          ✅ Licenses
│   ├── TERMS.md            ✅ Terms of Service
│   └── PRIVACY.md          ✅ Privacy Policy
│
├── docs/
│   └── GOVERNANCE.md       ✅ Governance model
│
└── .github/
    ├── workflows/
    │   └── validate-data.yml ✅ CI validation
    ├── PULL_REQUEST_TEMPLATE.md ✅
    └── ISSUE_TEMPLATE/
        ├── new-provider.md  ✅
        └── data-update.md   ✅
```

## 🚀 How to Use

### For Users

1. **View the site**:
   ```bash
   python3 -m http.server 8000
   open http://localhost:8000
   ```

2. **Switch views**: Use the dropdown to toggle between Cards and Table views

3. **Change language**: Select English, Arabic, or Hebrew

4. **Switch countries**: Currently supports UK (US coming soon)

### For Contributors

1. **Add a provider**:
   ```bash
   cp templates/provider.json data/mobile-plans/uk/new-provider.json
   # Edit the file with real data
   # Update meta.json to include the new file
   # Submit a PR
   ```

2. **Update existing data**:
   - Edit the JSON file directly
   - Update `lastUpdated` and `updatedBy`
   - Include source URL
   - Submit a PR

3. **Add a translation**:
   ```bash
   cp locales/en.json locales/fr.json
   # Translate all strings
   # Submit a PR
   ```

### For Developers

1. **Data API**:
   ```javascript
   // Fetch UK data
   const res = await fetch('/api/v1/uk/meta.json');
   const meta = await res.json();
   ```

2. **Create a new view**:
   - Add HTML file to `views/`
   - Include `window.initView()` function
   - Use `window.t()` for translations
   - Access data via `window.currentData`

3. **Add CSS**:
   - Styles in `styles/`
   - Use CSS logical properties for RTL
   - Create `-rtl.css` variant if needed

## ✅ Testing Checklist

- [x] Static site loads correctly
- [x] Card view renders providers
- [x] Table view renders comparison
- [x] Language switching works
- [x] View switching works
- [x] RTL layout works correctly
- [x] All JSON files are valid
- [x] Documentation is complete

## 📋 Next Immediate Steps

### Priority 1: Quality Assurance
1. Test in multiple browsers (Chrome, Firefox, Safari)
2. Test on mobile devices
3. Verify all links work
4. Check for console errors

### Priority 2: Real Data
1. Replace sample data with real provider information
2. Add actual source URLs
3. Add 2-3 plans per provider
4. Add US market data

### Priority 3: Deployment
1. Enable GitHub Pages
2. Configure custom domain (optional)
3. Set up auto-deployment
4. Test live site

### Priority 4: Community Launch
1. Create launch announcement
2. Share on Reddit (r/UKPersonalFinance)
3. Create initial "good first issues"
4. Enable GitHub Discussions

## 🎯 Success Criteria for v0.1

- ✅ Static site works locally
- ✅ Two views implemented
- ✅ Multi-language support
- ✅ Sample data in place
- ✅ Documentation complete
- ✅ Legal framework established
- ✅ Contribution workflow defined

## 🔧 Known Limitations

1. **Sample Data**: Current provider data is for demonstration only
2. **No Validation Script**: `validate.js` needs to be implemented
3. **Single Country**: Only UK data exists
4. **No Deployment**: Not yet on GitHub Pages
5. **No Analytics**: No visitor tracking (by design, but could add privacy-preserving)

## 💡 Key Design Decisions

1. **No Build Step**: Keeps barrier to entry low for contributors
2. **Git History**: Serves as the audit trail, no separate database
3. **Static First**: Can scale to millions of visitors on GitHub Pages
4. **Schema-Based**: Ensures data consistency across contributions
5. **Community-Owned**: Governance prevents single-party control

## 📚 Important Files to Know

- **AI_PLAN_PROMPT.md**: Development roadmap and future features
- **CHARTER.md**: Project principles (immutable)
- **CONTRIBUTING.md**: How to contribute
- **GOVERNANCE.md**: How decisions are made
- **data/schema/v1.json**: Data structure definition

## 🎓 Learning Resources

For contributors new to the project:
1. Read CHARTER.md to understand the mission
2. Review CONTRIBUTING.md for guidelines
3. Check existing JSON files for examples
4. Start with a simple data update PR
5. Ask questions in GitHub Discussions

## 🙏 Credits

Built with inspiration from:
- **Wikipedia**: Community governance model
- **OpenStreetMap**: Crowdsourced data approach
- **The Wirecutter**: Quality over quantity

## 📞 Support

- Issues: https://github.com/WeAreOur/mobile-plans/issues
- Discussions: https://github.com/WeAreOur/mobile-plans/discussions

---

**Status**: Ready for local testing and initial deployment
**Next Milestone**: v0.2 - Real data and GitHub Pages deployment
**Long-term Vision**: The Wikipedia of mobile plan data

Last updated: January 1, 2026
