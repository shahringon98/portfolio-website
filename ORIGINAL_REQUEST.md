# Original User Request

## 2026-08-11T16:46:58Z

# Teamwork Project Prompt — Draft

Build a professional portfolio website based on the provided resume to share with recruiters and potential employers. The site should use React and Framer Motion for advanced, smooth animations, and be configured for deployment to GitHub Pages.

Working directory: C:\Users\User\.gemini\antigravity\scratch\portfolio_website
Integrity mode: demo

## Requirements

### R1. Resume Content Integration
The portfolio must accurately display the candidate's professional information extracted from the provided resume, including Education, Experience, Skills, Software Skills, and Publications.

### R2. Animated UI and Design
The portfolio must create a premium, visually engaging design with smooth micro-animations, page transitions, and responsive layouts using Framer Motion. 

### R3. GitHub Pages Deployment Setup
The project must be configured with a script or GitHub Actions workflow to automatically build and deploy the React application to GitHub Pages.

## Acceptance Criteria

### R1: Content Verification
- [ ] Automated test (e.g., Playwright/Cypress or a simple script testing the build) successfully finds key text from the resume on the rendered page (e.g., "Mohd Shahrin Bin Bahar", "Ministry of Finance", "Doctor of Philosophy").

### R2: Animation Implementation
- [ ] `framer-motion` is included in `package.json` dependencies.
- [ ] Static analysis confirms the usage of `motion` components (e.g., `motion.div`) in the React source code.

### R3: Deployment Readiness
- [ ] A valid deployment script or GitHub Actions workflow file for GitHub Pages is present.
- [ ] The app builds successfully without errors (`npm run build`).
