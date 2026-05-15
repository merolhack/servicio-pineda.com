# Skill: GA4 Integration in Next.js 16 (Static Export)

## Description
This skill covers the integration of Google Analytics 4 into a Next.js application using the official `@next/third-parties` library, specifically tailored for static exports and environments with CI/CD resolution quirks.

## Implementation Steps
1. **Dependency:** Ensure `@next/third-parties` is installed.
2. **Layout Setup:** Import `GoogleAnalytics` in `app/layout.tsx`.
3. **Component Placement:**
   ```tsx
   import { GoogleAnalytics } from "@next/third-parties/google";

   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <GoogleAnalytics gaId="G-XXXXXXXXXX" />
         </body>
       </html>
     );
   }
   ```

## CI/CD Troubleshooting (Module Not Found)
If the build fails in CI (e.g., GitHub Actions) with `Module not found: Can't resolve '@next/third-parties/google'` despite being in `package.json`:
1. **Cause:** Potential Turbopack resolution bug or stale `npm ci` cache in the runner.
2. **Fix:** Force installation in the workflow:
   ```yaml
   - name: Install Dependencies
     run: npm ci && npm install @next/third-parties --legacy-peer-deps
   ```
3. **Verification:** Check the live site's source or network tab for `gtag/js` and `collect?v=2` requests.
