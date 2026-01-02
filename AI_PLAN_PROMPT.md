# Mobile Plans - Development Roadmap

**Current Version**: v0.2.0 (January 2, 2026)  
**Status**: 15 UK providers, 189 verified plans - Ready for deployment  
**See**: [CHANGELOG.md](CHANGELOG.md) for completed work

---

## 🚧 Next Steps (v0.3)

### Priority 1: Deployment & Community
1. **GitHub Pages Deployment**
   - ✅ GitHub Actions workflow created
   - ✅ Auto-deploy on main branch push
   - Enable in repo settings (manual step)
   - Set up custom domain (optional)
   - Test deployment

2. **Community Bootstrap**
   - Announcement on r/UKPersonalFinance, r/AskUK
   - Create "good first issue" labels
   - Set up GitHub Discussions
   - Add contributor recognition

### Priority 2: Schema & Features Enhancements
1. **Zero-rated services field** (user requested)
   - Add `zeroRatedServices` field to schema
   - Structure: `{ social: [], music: [], video: [], other: [] }`
   - Migrate Voxi and other providers with zero-rated apps

2. **Display enhancements**
   - Show network, speedCap, 5G badges in views
   - Add priceIncrease filter ("No rises" vs "Annual increases")
   - Display zero-rated services with icons/badges

## 🔮 Future Development (v0.4+)

### Data Expansion
- [ ] Add US market data
- [ ] Add more countries (Canada, Germany, France, etc.)
- [ ] Historical price tracking
- [ ] Business plans support
- [ ] Prepaid vs postpaid distinction

### Features
- [ ] **Search & Filtering**
  - Search by provider, price, data
  - Filter by contract length, network, price increases
  - Advanced filtering (5G, speed caps, roaming)

- [ ] **Comparison Tools**
  - Side-by-side plan comparison (select multiple)
  - "Best for me" recommendation wizard
  - Price alerts for specific plans

- [ ] **Advanced Views**
  - Coverage map view
  - Price trend graphs over time
  - Mobile-optimized card view

### Automation
- [ ] **Change Detection Bot**
  - Daily website scraping
  - Auto-create issues when prices change
  - Archive.org integration

- [ ] **Provider API** (if verification process is defined)
  - REST API for verified providers
  - Automated data updates
  - Webhook notifications

## 📋 Backlog Ideas

- Dark mode theme
- Export to CSV/JSON
- Print-friendly view
- Mobile app (PWA)
- Plan recommendation quiz
- Contract end reminders

## 🎯 Success Metrics

### v0.3 Goals
- [ ] GitHub Pages live
- [ ] 10+ contributors
- [ ] First community discussion

### v1.0 Goals
- [ ] 500+ plans across 3 countries
- [ ] 50+ contributors
- [ ] 5,000+ monthly visitors

---

**Next Milestone**: v0.3 - GitHub Pages deployment & community launch

---

## 📁 Project Files

All implementation details are now in the actual codebase:
- **Data**: `/api/v1/` - All provider data and schema
- **Views**: `/views/` - UI components
- **Styles**: `/styles/` - CSS
- **Scripts**: `/scripts/` - JavaScript modules
- **Docs**: `/legal/`, `/docs/`, `CHARTER.md`, `CONTRIBUTING.md`, etc.

See [README.md](README.md) for usage and [CONTRIBUTING.md](CONTRIBUTING.md) for how to contribute.
