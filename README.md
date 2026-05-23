# EDGE — PWA Demo

Static, installable Progressive Web App for the EDGE elite performance ecosystem demo.
Deployed on Vercel.

## Flow

`/` (splash) → `/welcome` → `/login` → `/dashboard`

The splash auto-advances after ~3.5s (or tap to skip).

## PWA capabilities

- **Installable** — `manifest.webmanifest` with brand icons, theme color, and app shortcuts
- **Offline-ready** — `sw.js` precaches the four screens + assets and serves `/offline` as fallback
- **Native-feel** — `display: standalone`, dark theme color, Apple touch icon, status bar styled
- **Install prompt** — floating "Install App" button surfaces when the browser fires `beforeinstallprompt`

## Layout

```
/
├── index.html                # splash screen (start_url)
├── welcome.html              # welcome / CTA
├── login.html                # member login
├── dashboard.html            # home dashboard
├── offline.html              # SW fallback
├── manifest.webmanifest      # PWA manifest
├── sw.js                     # service worker
├── vercel.json               # clean URLs + headers (SW scope, manifest MIME)
├── assets/pwa.js             # SW registration + install-prompt UX
├── icons/                    # brand icons (192, 512, maskable, apple-touch, favicons)
└── edge/                     # original Stitch source designs (preserved for reference)
```

## Local preview

```bash
npx serve .
# then open http://localhost:3000
```

## Vercel

No build step required — Vercel serves the repo root as a static site.
The `vercel.json` enables clean URLs (`/welcome` instead of `/welcome.html`)
and sets the correct `Service-Worker-Allowed` and manifest MIME headers.
