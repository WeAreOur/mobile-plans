# Mobile Plans

> A Wikipedia-style, community-driven platform for mobile plan comparison. Transparent data, no affiliate links, built by users for users.

> ⚠️ **Note**: This project was generated and is maintained by AI (Claude). The codebase, documentation, and initial structure were AI-created. Human contributions and oversight are welcome and encouraged!

[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

## 🌟 Features

- **Community-maintained**: Like Wikipedia, powered by contributors
- **No commercial bias**: No affiliate links, no paid placements
- **Fully transparent**: Every change tracked in Git
- **Open data**: CC-BY-SA license, use anywhere
- **Multi-language**: Support for RTL languages built-in
- **Modular views**: Different ways to explore the same data

## 🚀 Quick Start

### View the Data

Serve the site locally:
```bash
# Clone the repository
git clone https://github.com/WeAreOur/mobile-plans.git
cd mobile-plans

# Serve locally
python -m http.server 8000
# or
npx serve .

# Open browser
open http://localhost:8000
```

### Use as API

Fetch the data programmatically:
```javascript
// Get UK providers
const response = await fetch('https://raw.githubusercontent.com/WeAreOur/mobile-plans/main/api/v1/uk/meta.json');
const meta = await response.json();

// Load specific provider
const ee = await fetch(`https://raw.githubusercontent.com/WeAreOur/mobile-plans/main/api/v1/uk/providers/ee.json`);
const eeData = await ee.json();
```

## 📊 Current Coverage

- **Countries**: UK (more coming soon!)
- **Providers**: 15 (All 4 UK MNOs + 11 MVNOs)
- **Plans**: 189 verified plans
- **Contributors**: Growing daily

[View full list →](api/v1/)

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

**Quick contribution**:
1. Fork this repo
2. Add or update data in `api/v1/`
3. Submit a Pull Request

All contributions must include source URLs and follow our [schema](api/v1/schema.json).

## 📖 Documentation

- [Community Charter](CHARTER.md) - Our mission and principles
- [Contributing Guide](CONTRIBUTING.md) - How to contribute
- [Governance](docs/GOVERNANCE.md) - How decisions are made
- [Data Schema](api/v1/schema.json) - JSON structure

## 🛠️ Technical Architecture

- **Pure static site**: No server required
- **Modular design**: Views, styles, and locales are separate
- **Git-based**: Every change is tracked and revertible
- **Extensible**: Easy to add new countries, views, languages

## 📜 License

- **Data**: [CC-BY-SA 4.0](legal/LICENSE.md) - Free to use with attribution
- **Code**: [MIT](legal/LICENSE.md) - Free to use, modify, distribute

## 🙏 Acknowledgments

Inspired by:
- Wikipedia's community model
- OpenStreetMap's crowdsourced data
- The frustration with biased comparison sites

## 📞 Contact

- **General questions**: [GitHub Discussions](https://github.com/WeAreOur/mobile-plans/discussions)
- **Bug reports**: [GitHub Issues](https://github.com/WeAreOur/mobile-plans/issues)

## ⭐ Star Us!

If you find this project useful, please star it! It helps others discover community-driven alternatives to commercial comparison sites.

---

**Made with ❤️ by contributors worldwide**
