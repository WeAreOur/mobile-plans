# Contributing to Mobile Plans

> ⚠️ **AI-Generated Project**: This project was created by AI (Claude). While the foundation is AI-generated, human contributions are essential for accurate data and community growth!

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
       "sourceUrl": "https://newprovider.com/plans",
       "confidence": "community"
     }
   }
   ```

4. **Update meta.json**:
   Add your file to the providers array in `data/mobile-plans/uk/meta.json`

5. **Create a Pull Request**:
   - Describe what you're adding
   - Include the source URL
   - Fill in the PR template checklist

### Updating Existing Data

1. **Find the file**: `data/mobile-plans/{country}/{provider}.json`

2. **Make your changes**:
   - Update the relevant fields
   - Add notes in `metadata.notes` if needed
   - Git history will track who made changes and when

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

> **Note**: Git history automatically tracks who made changes and when, so you don't need to add those fields manually.

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

- **Questions**: [GitHub Discussions](https://github.com/WeAreOur/mobile-plans/discussions)
- **Bugs**: [GitHub Issues](https://github.com/WeAreOur/mobile-plans/issues)
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
