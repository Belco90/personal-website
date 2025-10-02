# Migration Plan: Vercel to Netlify

## Issue

[GitHub Issue #76](https://github.com/Belco90/personal-website/issues/76)

## Reference

[Netlify Migration Guide](https://docs.netlify.com/resources/checklists/vercel-to-netlify-migration/)

## Current Setup Analysis

### Tech Stack

- **Framework**: Next.js 15.5.2 (App Router)
- **React**: 19.1.1
- **Styling**: Panda CSS
- **Package Manager**: pnpm 9.14.2
- **Analytics**: Vercel Analytics & Speed Insights
- **Current Host**: Vercel
- **Domain**: mario.dev

### Current Vercel-Specific Features

1. **Analytics**: `@vercel/analytics` package
2. **Speed Insights**: `@vercel/speed-insights` package
3. **Configuration**: `vercel.json` (currently minimal - GitHub silent mode)
4. **Environment Variables**: `GITHUB_ACCESS_TOKEN` (used in projects page)

---

## Migration Phases

### Phase 1: Pre-Migration Preparation ✅

#### 1.1 Review Current Configuration

- [x] Analyze `package.json` dependencies
- [x] Review `next.config.ts` settings
- [x] Check `vercel.json` configuration
- [x] Identify environment variables
- [x] Document current build settings

#### 1.2 Netlify Account Setup

- [x] Create/verify Netlify account
- [x] Link GitHub repository to Netlify
- [x] Review Netlify's Next.js Runtime documentation

---

### Phase 2: Configuration Updates 📝

#### 2.1 Remove Analytics Services

**Current**: Vercel Analytics & Speed Insights
**Action**: Remove for now (will be added in follow-up PR)

**Tasks**:

- [x] Remove `@vercel/analytics` dependency
- [x] Remove `@vercel/speed-insights` dependency
- [x] Delete `src/app/VercelAnalytics.tsx`
- [x] Remove Analytics/SpeedInsights imports from `src/app/layout.tsx`
- [x] Clean up any analytics-related code

#### 2.2 Create Netlify Configuration

**File**: Create `netlify.toml`

**Tasks**:

- [x] Create `netlify.toml` in project root
- [x] Configure build settings:
  - Build command: `pnpm build`
  - Publish directory: `.next`
  - Node version: Match package.json engines
- [x] Configure environment variables section
- [x] Configure Next.js Runtime plugin

**Example structure**:

```toml
[build]
  command = "pnpm build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "20"
  NPM_FLAGS = "--version" # Use pnpm

[[plugins]]
  package = "@netlify/plugin-nextjs"

# Add redirects if needed
[[redirects]]
  from = "/*"
  to = "/404"
  status = 404

# Add headers if needed
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
```

#### 2.3 Update Package Manager Configuration

**Tasks**:

- [x] Ensure `.npmrc` or equivalent pnpm config is present
- [x] Verify pnpm version compatibility with Netlify
- [x] Add `package-lock=false` to prevent npm lockfile generation

#### 2.4 Environment Variables Migration

**Current Variable**: `GITHUB_ACCESS_TOKEN`

**Tasks**:

- [x] Export environment variables from Vercel
- [x] Configure environment variables in Netlify:
  - Go to Site settings → Environment variables
  - Add `GITHUB_ACCESS_TOKEN`
- [x] Verify variable naming conventions (no changes needed)
- [x] Set appropriate scopes (production, preview, development)

#### 2.5 Review and Update Dependencies

**Tasks**:

- [x] Run `pnpm update` to ensure latest compatible versions
- [x] Review Next.js 15 compatibility with Netlify
- [x] Test build locally after removing Vercel packages

---

### Phase 3: Build & Deploy Testing 🧪

#### 3.1 Local Testing

**Tasks**:

- [x] Remove Vercel-specific packages: `pnpm remove @vercel/analytics @vercel/speed-insights`
- [x] Update code to remove Vercel Analytics references
- [x] Run `pnpm build` locally to verify successful build
- [x] Run `pnpm start` to test production build
- [x] Verify all pages render correctly
- [x] Test dynamic routes and API routes (if any)
- [x] Verify environment variables are loaded correctly

#### 3.2 Netlify Deploy Preview

**Tasks**:

- [x] Create new site in Netlify (don't connect domain yet)
- [x] Configure build settings in Netlify UI
- [x] Trigger initial deployment
- [x] Review build logs for errors/warnings
- [x] Test deployed preview site thoroughly:
  - [x] Homepage functionality
  - [x] Projects page (GitHub API integration)
  - [x] Theme switching
  - [x] All routes and navigation
  - [x] Image optimization
  - [x] Performance metrics
- [x] Compare with current Vercel deployment

#### 3.3 Performance Comparison

**Tasks**:

- [ ] Run Lighthouse audit on both deployments
- [ ] Compare load times and metrics
- [ ] Test from different geographic locations
- [ ] Verify Next.js features work correctly:
  - Image optimization
  - Font optimization
  - Static generation
  - Server components

---

### Phase 4: Domain Migration 🌐

#### 4.1 DNS Preparation

**Current Domain**: mario.dev

**Tasks**:

- [x] Document current DNS records from domain registrar
- [x] Lower TTL values 24-48 hours before migration (recommended)
- [x] Prepare for potential downtime/propagation period

#### 4.2 Configure Domain in Netlify

**Tasks**:

- [x] Add custom domain `mario.dev` in Netlify
- [x] Configure `www.mario.dev` redirect (if applicable)
- [x] Enable HTTPS/SSL certificate provisioning
- [x] Wait for SSL certificate to be issued

#### 4.3 Update DNS Records

**Tasks**:

- [x] Update DNS A record to point to Netlify's load balancer IP
  - Or use Netlify DNS (transfer nameservers)
- [x] Verify DNS propagation using tools like `dig` or online checkers
- [x] Monitor for propagation completion (can take up to 48 hours)

#### 4.4 Post-Migration Verification

**Tasks**:

- [x] Verify `mario.dev` resolves to Netlify
- [x] Test HTTPS certificate
- [x] Verify all pages load correctly on production domain
- [x] Check that redirects work as expected

---

### Phase 5: Cleanup & Documentation 🧹

#### 5.1 Remove Vercel Resources

**Tasks**:

- [x] Remove or archive the project from Vercel
- [x] Export any analytics data from Vercel (if needed)

#### 5.2 Update Documentation

**Tasks**:

- [ ] Update `README.md` to reflect Netlify deployment
- [ ] Remove references to Vercel
- [x] Add Netlify deployment badge
- [ ] Document new deployment process
- [ ] Update any CI/CD references

**Update in README.md**:

```markdown
Built with:

- React
- Next.js + Netlify
- [Panda](https://panda-css.com/)
```

#### 5.3 Update Repository Settings

**Tasks**:

- [ ] Update repository description if needed
- [x] Update homepage URL in `package.json` (if changed)
- [x] Close GitHub issue #76

---

## Rollback Plan 🔄

In case of critical issues during migration:

1. **DNS Rollback**: Revert DNS records to Vercel
2. **Keep Vercel Active**: Don't delete Vercel project until migration is confirmed successful
3. **Monitoring Period**: Keep both deployments active for 1-2 weeks before full Vercel decommission

---

## Key Differences: Vercel vs Netlify

### Build & Deployment

- **Vercel**: Zero-config for Next.js, automatic optimization
- **Netlify**: Requires `@netlify/plugin-nextjs`, similar features via plugin

### Analytics

- **Vercel**: Built-in Analytics & Speed Insights (paid feature)
- **Netlify**: Server-side Analytics (add-on), or third-party integration

### Edge Functions

- **Vercel**: Edge Functions, Middleware supported
- **Netlify**: Edge Functions available, Next.js middleware supported via plugin

### Environment Variables

- Both support environment variables with similar conventions
- Netlify uses UI or `netlify.toml` for configuration

### Image Optimization

- Both support Next.js Image optimization
- Netlify handles this through the Next.js Runtime plugin

---

## Estimated Timeline

- **Phase 1**: 1 hour (✅ Completed)
- **Phase 2**: 2-3 hours (configuration updates)
- **Phase 3**: 2-3 hours (testing)
- **Phase 4**: 1-2 days (including DNS propagation)
- **Phase 5**: 1 hour (cleanup)

**Total**: 3-5 days (accounting for DNS propagation and thorough testing)

---

## Notes & Considerations

1. **Next.js 15 Support**: Verify Netlify's Next.js Runtime plugin supports Next.js 15.5.2
2. **React 19**: Ensure compatibility with React 19.1.1
3. **Panda CSS**: Should work seamlessly, no changes needed
4. **pnpm Support**: Netlify supports pnpm, configure appropriately
5. **TypeScript**: No changes needed for TypeScript setup
6. **App Router**: Netlify supports Next.js App Router

---

## Questions to Resolve

- [x] Which analytics solution to use after migration? **→ Remove for now, add in follow-up PR**
- [x] Any specific performance requirements to maintain? **→ No specific requirements**
- [x] Is there a preferred migration date/time? **→ No preferred date/time**
- [x] Should we keep both deployments for a transition period? **→ No, remove Vercel as soon as Netlify is ready**
- [x] Any custom headers or redirects to configure? **→ No custom headers or redirects needed**

---

## Success Criteria ✨

- [ ] Site deploys successfully on Netlify
- [ ] All pages and functionality work as expected
- [ ] Performance metrics are comparable or better
- [ ] Domain resolves correctly with HTTPS
- [ ] Build times are acceptable
- [ ] No console errors or broken features
- [ ] Documentation is updated
