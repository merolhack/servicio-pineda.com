# Pineda Hydraulic - Next.js Migration

This repository contains the Next.js migration of the Pineda Hydraulic website. It is designed as a high-performance static site deployed on HostGator via GitHub Actions.

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Analytics:** Google Analytics 4 (`@next/third-parties`)
- **Backend Bridge:** PHP (for contact form email delivery)

## Project Structure
- `app/`: Next.js application routes and components.
- `public/api/`: PHP scripts for server-side functionality (email bridge).
- `.agents/`: Project knowledge base and agentic skills.
- `.github/workflows/`: CI/CD pipeline for automated deployment to HostGator.

## Deployment
The site is automatically deployed to HostGator when changes are pushed to the `main` branch.
The deployment process includes:
1. Static build (`npm run build`) producing the `out/` directory.
2. Secure SCP transfer of files to the HostGator `public_html/` directory.

## Maintenance
- **Analytics:** The GA4 measurement ID is `G-ZY9QXQXW49`.
- **Contact Form:** Email settings are configured in the PHP bridge and environment variables.
