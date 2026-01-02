# Mobile Plans - Development Roadmap

**Current Version**: v0.2.0 (January 2, 2026)  
**Status**: 🚀 **LIVE** at https://weareour.github.io/mobile-plans/  
**Data**: 15 UK providers, 189 verified plans  
**See**: [CHANGELOG.md](CHANGELOG.md) for completed work

---

## 🚧 Next Steps (v0.3)

### Priority 1: Deployment & Community
1. **Community Bootstrap**
   - Announcement on r/UKPersonalFinance, r/AskUK
   - Create "good first issue" labels
   - Set up GitHub Discussions
   - Add contributor recognition

### Priority 2: Schema & Features Enhancements
1. **Zero-rated services field** (user requested)
   - Add `zeroRatedServices` field to schema
   - Structure: `{ social: [], music: [], video: [], other: [] }`
   - Migrate Voxi and other providers with zero-rated apps
   - Display with icons/badges in views

## 🔮 Future Development (v0.4+)

### Data Expansion
- [ ] Add more countries (Spain, France, etc.)
- [ ] Business plans support
- [ ] Prepaid vs postpaid distinction

### Features
- [ ] **Comparison Tools**
  - Side-by-side plan comparison (select multiple)
  - "Best for me" recommendation wizard

- [ ] **Advanced Views**
  - Coverage map view
  - Price trend graphs over time
  - Mobile-optimized card view

- [ ] **Provider API** (if verification process is defined)
  - REST API for verified providers
  - Automated data updates

## 🎯 Success Metrics

### v0.3 Goals
- [ ] 10+ contributors
- [ ] First community discussion

### v1.0 Goals
- [ ] 500+ plans across 3 countries
- [ ] 50+ contributors
- [ ] 5,000+ monthly visitors
