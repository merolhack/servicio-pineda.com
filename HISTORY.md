# Project History: Pineda Hydraulic Next.js Migration

## 2026-05-15: GA4 Integration and CI/CD Stabilization
- **Task:** Integrate Google Analytics 4 (GA4) into the root layout.
- **Outcome:** Successfully integrated GA4 using `@next/third-parties/google` with Measurement ID `G-ZY9QXQXW49`.
- **CI/CD Fix:** Resolved a "Module not found" error in GitHub Actions for `@next/third-parties` by adding an explicit installation step in the deployment workflow (`npm install @next/third-parties --legacy-peer-deps`).
- **Verification:** Live site [servicio-pineda.com](https://servicio-pineda.com/) confirmed to be sending hits.

## 2026-05-14: Secure Contact API and HostGator Deployment
- **Task:** Implement secure contact form for static export.
- **Outcome:** Developed PHP bridge (`public/api/contact.php`) for SMTP delivery.
- **Deployment:** Stabilized GitHub Actions deployment to HostGator using `scp` and specific SSH configurations.
