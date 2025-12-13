# App TODO - MortenGlad

Generated: 2024-12-14

This file tracks all pending tasks, fixes, and improvements for the MortenGlad application.

---

## CRITICAL SECURITY ISSUES

- [ ] **Exposed GraphQL Tokens** (10 min)
  - File: `app/plugins/cms.ts`
  - Fix: Rename to `cms.server.ts` to force server-side only
  - Impact: Prevents token exposure in client bundle

- [ ] **API Secrets in .env** (15 min)
  - File: `.env`
  - Fix: Rotate all tokens, use secrets management system
  - Impact: Prevents credential leaks

- [ ] **XSS via v-html** (20 min)
  - File: `app/components/ui/bodytext/bodytext.vue:3`
  - Fix: Add DOMPurify sanitization
  - Impact: Prevents XSS attacks

- [ ] **Missing Security Headers** (15 min)
  - File: `nuxt.config.ts`
  - Fix: Add CSP, HSTS, X-Frame-Options headers
  - Impact: Prevents XSS, clickjacking, MITM

---

## HIGH SECURITY ISSUES

- [ ] **DevTools Enabled in Production** (2 min)
  - File: `nuxt.config.ts:3`
  - Fix: `devtools: { enabled: process.env.NODE_ENV === 'development' }`
  - Impact: Prevents exposure of app internals

- [ ] **Contact Form CSRF** (20 min)
  - File: `app/components/contactForm/contactForm.vue:85-111`
  - Fix: Add CSRF token, rate limiting, honeypot
  - Impact: Prevents spam/bot submissions

- [ ] **Debug Error Logging** (10 min)
  - File: `app/plugins/cms.ts:16-18`
  - Fix: Use proper error service (Sentry), sanitize messages
  - Impact: Prevents information disclosure

---

## MEDIUM SECURITY ISSUES

- [ ] **Form Input Validation** (15 min)
  - File: `app/components/contactForm/contactForm.vue:28-51`
  - Fix: Add client + server validation (Vee-Validate)
  - Impact: Prevents malformed data submission

- [ ] **Process.env in Universal Plugin** (5 min)
  - File: `app/plugins/cms.ts:7`
  - Fix: Use `useRuntimeConfig()` instead
  - Impact: Consistent behavior across SSR/CSR

---

## CRITICAL PERFORMANCE ISSUES

- [x] **Memory Leak - setInterval** (5 min) ✅ FIXED
  - File: `app/components/heroLarge/heroLarge.vue:101`
  - Fix: Store interval ID, clear in onBeforeUnmount
  - Impact: Prevents memory leak

- [ ] **Heavy clipPath Animations** (30 min)
  - File: `app/app.vue:54-104`
  - Fix: Replace with CSS transforms/scale
  - Impact: 20-30% faster page transitions

- [ ] **Smooth Scrollbar Overhead** (20 min)
  - File: `app/composables/useSmoothScroll.ts:14-25`
  - Fix: Remove permanent will-change, increase debounce to 16ms
  - Impact: 20-35% reduction in scroll jank

- [ ] **Inefficient IntersectionObserver** (20 min)
  - File: `app/utils/transitionSetter.ts:12-52`
  - Fix: Create single shared observer
  - Impact: 30-50% fewer observer instances

---

## HIGH PERFORMANCE ISSUES

- [ ] **Missing Image Dimensions** (15 min)
  - Files: Multiple components using `nuxt-img`
  - Fix: Add width/height attributes
  - Impact: Eliminates Cumulative Layout Shift (CLS)

- [ ] **Excessive setTimeout Delays** (15 min)
  - File: `app/app.vue:28-36`, `layouts/default.vue:51`
  - Fix: Use requestAnimationFrame, reduce delays
  - Impact: 10-15% faster perceived load

- [ ] **Missing Event Cleanup** (5 min)
  - File: `app/components/contactForm/contactForm.vue:91-101`
  - Fix: Remove event listener in onBeforeUnmount
  - Impact: Prevents memory leak

---

## MEDIUM PERFORMANCE ISSUES

- [ ] **Font Loading Strategy** (10 min)
  - File: `nuxt.config.ts:68-73`
  - Fix: Specify only needed weights, add preload
  - Impact: 10-15% reduction in font blocking time

- [ ] **Expensive CSS Properties** (15 min)
  - File: `app/components/siteHeader/glassEffect.scss:5`
  - Fix: Optimize backdrop-filter, reduce box-shadow
  - Impact: 5-10% reduction in header render time

- [ ] **Blocking Layout Fetch** (20 min)
  - File: `app/layouts/default.vue:79`
  - Fix: Fetch global settings non-blocking with cache
  - Impact: Faster Time to Interactive (TTI)

- [ ] **ResizeObserver on Header** (10 min)
  - File: `app/components/siteHeader/siteHeader.vue:55-72`
  - Fix: Add debounced resize listener
  - Impact: Better responsiveness on resize

---

## LOW PRIORITY

- [ ] **V-for Key Usage** (10 min)
  - Files: Multiple components using `:key="index"`
  - Fix: Use stable IDs instead of array indices
  - Impact: Better component state management

- [ ] **Large SCSS Utility File** (30 min)
  - File: `app/assets/scss/tools/helping-classes.scss`
  - Fix: Audit unused utilities, consider PurgeCSS
  - Impact: 15-25% CSS bundle reduction

- [ ] **TypeScript @ts-ignore** (5 min)
  - File: `app/components/ui/bodytext/bodytext.vue:10`
  - Fix: Install proper type definitions
  - Impact: Better type safety

---

## ESTIMATED TOTAL TIME

**Critical Issues Only:** ~82 minutes
**Critical + High Priority:** ~172 minutes
**All Issues:** ~342 minutes (5.7 hours)

**Estimated Performance Gain:** 25-40% across key metrics
**Security Posture:** Critical vulnerabilities eliminated

---

## PROGRESS TRACKER

- Total Issues: 28
- Completed: 1
- Remaining: 27
- Completion: 3.6%

---

## NOTES

- Created: 2024-12-14
- Last Updated: 2024-12-14
- Priority: Start with Critical Security, then Critical Performance
