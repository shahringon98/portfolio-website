# Project: Portfolio Website — Dr. Mohd Shahrin Bin Bahar

## Architecture
- Framework: React 18 + Vite
- Styling & Icons: Tailwind CSS + Lucide React
- Animation Engine: Framer Motion (`motion.div`, `AnimatePresence`, page transitions, micro-interactions)
- Data Source: Strongly-typed structured resume object (`src/data/resumeData.js` / `.ts`)
- Deployment Target: GitHub Pages (via `.github/workflows/deploy.yml` and `gh-pages` CLI script)
- Verification Suite: Custom Node test runner (`scripts/verify-build.js`) executing via `npm test`

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Project Scaffolding & Dependencies | Package configuration, Vite, React, Framer Motion, Tailwind | M1 | Survey 2 & 3 |
| 2 | Candidate Profile Data Model | Complete resume data (Education, Experience, Skills, Software Skills, Publications) featuring mandatory anchors "Mohd Shahrin Bin Bahar", "Ministry of Finance", "Doctor of Philosophy" | M1 | Survey 1 |
| 3 | Responsive Navigation & Header | Navbar with desktop links, theme/branding, mobile drawer menu | M2 | Survey 2 |
| 4 | Hero Section | Professional summary, candidate title, call-to-action, animated entrance | M2 | Survey 2 |
| 5 | Education & Experience Sections | Work timeline featuring "Ministry of Finance", degree section featuring "Doctor of Philosophy" | M2 | Survey 1 & 2 |
| 6 | Skills & Software Skills Sections | Core domain skills and technical/software skill cards | M2 | Survey 1 & 2 |
| 7 | Publications & Contact Sections | Academic/professional publications list and contact section | M2 | Survey 1 & 2 |
| 8 | Framer Motion Animations | Smooth page transitions, scroll animations (`motion.div`), card hover states, micro-interactions | M2 | Survey 2 |
| 9 | GitHub Pages Deployment Config | Vite base path configuration (`base: './'`), `gh-pages` npm scripts, GitHub Actions workflow `.github/workflows/deploy.yml` | M3 | Survey 3 |
| 10 | Automated Test Infrastructure | Opaque-box test runner (`scripts/verify-build.js`) verifying content anchors, Framer Motion usage, build execution (`npm run build`) | T1 (Test Track) | Survey 3 |
| 11 | Final Acceptance & Hardening | 100% passing E2E build & content test suite, zero integrity violations | M4 | Survey 3 |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Core Scaffolding & Resume Data | React+Vite setup, Tailwind, `package.json` with `framer-motion`, `src/data/resumeData.js` | none | DONE |
| M2 | Animated UI & Component Design | All React components (`Navbar`, `Hero`, `Experience`, `Education`, `Skills`, `Publications`, `Contact`) with `framer-motion` animations | M1 | DONE |
| M3 | GitHub Pages Deployment Setup | `vite.config.js`, `.github/workflows/deploy.yml`, `gh-pages` npm scripts | M1 | DONE |
| T1 | E2E Testing Suite (Test Track) | Test runner `scripts/verify-build.js` & `npm test` covering Tiers 1-4 content & build checks | M1 | DONE |
| M4 | Final Integration & E2E Hardening | Pass 100% E2E test suite, adversarial audit verification | M2, M3, T1 | DONE |

## Interface Contracts
### Data Schema (`src/data/resumeData.js`)
Export default object `resumeData`:
- `personalInfo`: `{ name: "Mohd Shahrin Bin Bahar", title: string, bio: string, location: string, email: string, linkedin: string, github: string }`
- `education`: `Array<{ degree: string, institution: string, year: string, details: string }>` (must include "Doctor of Philosophy")
- `experience`: `Array<{ role: string, organization: string, period: string, responsibilities: Array<string> }>` (must include "Ministry of Finance")
- `skills`: `Array<{ category: string, items: Array<string> }>`
- `softwareSkills`: `Array<{ name: string, level: string, category: string }>`
- `publications`: `Array<{ title: string, publisher: string, year: string, link?: string }>`

### Component Exports (`src/components/`)
Each component exported as default React component:
- `Navbar.jsx`
- `Hero.jsx`
- `Experience.jsx`
- `Education.jsx`
- `Skills.jsx`
- `Publications.jsx`
- `Contact.jsx`

### Deployment & Build Interface
- `npm run build` outputs static files to `dist/` with relative asset links (`base: './'`).
- `npm test` executes `node scripts/verify-build.js` returning exit code 0 on success.

## Code Layout
```
portfolio_website/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
├── scripts/
│   └── verify-build.js
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Publications.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── resumeData.js
│   ├── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```
