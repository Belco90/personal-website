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

- [ ] Create/verify Netlify account
- [ ] Link GitHub repository to Netlify
- [ ] Review Netlify's Next.js Runtime documentation

---

### Phase 2: Configuration Updates 📝

#### 2.1 Replace Analytics Services

**Current**: Vercel Analytics & Speed Insights
**Action**: Replace with Netlify Analytics or alternative

**Tasks**:

- [ ] Remove `@vercel/analytics` dependency
- [ ] Remove `@vercel/speed-insights` dependency
- [ ] Delete or refactor `src/app/VercelAnalytics.tsx`
- [ ] Remove Analytics/SpeedInsights imports from `src/app/layout.tsx`
- [ ] Decide on alternative:
  - Option A: Use Netlify Analytics (server-side, privacy-focused)
  - Option B: Use alternative like Plausible, Fathom, or Google Analytics
  - Option C: No analytics initially
- [ ] Implement chosen analytics solution

#### 2.2 Create Netlify Configuration

**File**: Create `netlify.toml`

**Tasks**:

- [ ] Create `netlify.toml` in project root
- [ ] Configure build settings:
  - Build command: `pnpm build`
  - Publish directory: `.next`
  - Node version: Match package.json engines
- [ ] Configure environment variables section
- [ ] Add any necessary redirects/headers
- [ ] Configure Next.js Runtime plugin

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

- [ ] Ensure `.npmrc` or equivalent pnpm config is present
- [ ] Verify pnpm version compatibility with Netlify
- [ ] Add `package-lock=false` to prevent npm lockfile generation

#### 2.4 Environment Variables Migration

**Current Variable**: `GITHUB_ACCESS_TOKEN`

**Tasks**:

- [ ] Export environment variables from Vercel
- [ ] Configure environment variables in Netlify:
  - Go to Site settings → Environment variables
  - Add `GITHUB_ACCESS_TOKEN`
- [ ] Verify variable naming conventions (no changes needed)
- [ ] Set appropriate scopes (production, preview, development)

#### 2.5 Review and Update Dependencies

**Tasks**:

- [ ] Run `pnpm update` to ensure latest compatible versions
- [ ] Review Next.js 15 compatibility with Netlify
- [ ] Test build locally after removing Vercel packages

---

### Phase 3: Build & Deploy Testing 🧪

#### 3.1 Local Testing

**Tasks**:

- [ ] Remove Vercel-specific packages: `pnpm remove @vercel/analytics @vercel/speed-insights`
- [ ] Update code to remove Vercel Analytics references
- [ ] Run `pnpm build` locally to verify successful build
- [ ] Run `pnpm start` to test production build
- [ ] Verify all pages render correctly
- [ ] Test dynamic routes and API routes (if any)
- [ ] Verify environment variables are loaded correctly

#### 3.2 Netlify Deploy Preview

**Tasks**:

- [ ] Create new site in Netlify (don't connect domain yet)
- [ ] Configure build settings in Netlify UI
- [ ] Trigger initial deployment
- [ ] Review build logs for errors/warnings
- [ ] Test deployed preview site thoroughly:
  - [ ] Homepage functionality
  - [ ] Projects page (GitHub API integration)
  - [ ] Theme switching
  - [ ] All routes and navigation
  - [ ] Image optimization
  - [ ] Performance metrics
- [ ] Compare with current Vercel deployment

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

- [ ] Document current DNS records from domain registrar
- [ ] Lower TTL values 24-48 hours before migration (recommended)
- [ ] Prepare for potential downtime/propagation period

#### 4.2 Configure Domain in Netlify

**Tasks**:

- [ ] Add custom domain `mario.dev` in Netlify
- [ ] Configure `www.mario.dev` redirect (if applicable)
- [ ] Enable HTTPS/SSL certificate provisioning
- [ ] Wait for SSL certificate to be issued

#### 4.3 Update DNS Records

**Tasks**:

- [ ] Update DNS A record to point to Netlify's load balancer IP
  - Or use Netlify DNS (transfer nameservers)
- [ ] Verify DNS propagation using tools like `dig` or online checkers
- [ ] Monitor for propagation completion (can take up to 48 hours)

#### 4.4 Post-Migration Verification

**Tasks**:

- [ ] Verify `mario.dev` resolves to Netlify
- [ ] Test HTTPS certificate
- [ ] Verify all pages load correctly on production domain
- [ ] Check that redirects work as expected

---

### Phase 5: Cleanup & Documentation 🧹

#### 5.1 Remove Vercel Resources

**Tasks**:

- [ ] Remove or archive the project from Vercel
- [ ] Cancel Vercel subscription if no longer needed
- [ ] Export any analytics data from Vercel (if needed)

#### 5.2 Update Documentation

**Tasks**:

- [ ] Update `README.md` to reflect Netlify deployment
- [ ] Remove references to Vercel
- [ ] Add Netlify deployment badge (optional)
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
- [ ] Update homepage URL in `package.json` (if changed)
- [ ] Close GitHub issue #76

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

- [ ] Which analytics solution to use after migration?
- [ ] Any specific performance requirements to maintain?
- [ ] Is there a preferred migration date/time?
- [ ] Should we keep both deployments for a transition period?
- [ ] Any custom headers or redirects to configure?

---

## Success Criteria ✨

- [ ] Site deploys successfully on Netlify
- [ ] All pages and functionality work as expected
- [ ] Performance metrics are comparable or better
- [ ] Domain resolves correctly with HTTPS
- [ ] Build times are acceptable
- [ ] No console errors or broken features
- [ ] Documentation is updated
