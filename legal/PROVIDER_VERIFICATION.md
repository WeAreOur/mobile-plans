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

Questions: [GitHub Discussions](https://github.com/WeAreOur/mobile-plans/discussions)
