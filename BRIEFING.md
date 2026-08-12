# Portfolio Website - Dr. Mohd Shahrin Bin Bahar

## Overview
A modern, animated portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack
- **Frontend**: React 18 + Vite 5
- **Styling**: Tailwind CSS + PostCSS + Autoprefixer
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Smooth Scrolling**: React Scroll
- **Intersection Observer**: React Intersection Observer
- **Counters**: React CountUp
- **Deployment**: GitHub Pages

## Project Structure
```
src/
├── components/
│   ├── ParticleBackground.jsx    # Animated particle canvas background
│   ├── Navbar.jsx                # Navigation bar with mobile menu
│   ├── Hero.jsx                  # Hero section
│   ├── About.jsx                 # About section with stats
│   ├── Experience.jsx            # Work experience section
│   ├── Education.jsx             # Education section
│   ├── Skills.jsx                # Professional & technical skills
│   ├── Publications.jsx          # Research publications
│   ├── Contact.jsx               # Contact form & info
│   └── Footer.jsx                # Footer
├── data/
│   └── resumeData.js             # Resume/portfolio data
├── App.jsx                        # Main app component with lazy loading
├── main.jsx                       # React entry point
└── index.css                      # Global styles & Tailwind setup

public/
└── index.html                     # HTML template
```

## Setup & Installation

### Prerequisites
- Node.js 18+ (preferably 20)
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### Build & Deploy
```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages (automatic via GitHub Actions)
npm run deploy
```

## GitHub Pages Deployment
The site is configured for GitHub Pages deployment:
- Base path: `./` (relative paths for GitHub Pages)
- Source: `dist/` directory
- Build output: Minified, optimized for production
- CI/CD: GitHub Actions workflow (`.github/workflows/deploy.yml`)

## Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth scrolling navigation
- ✅ Animated particle background
- ✅ Intersection Observer for scroll animations
- ✅ Lazy-loaded components for performance
- ✅ Contact form with email integration
- ✅ Social media links
- ✅ Dark theme with cyan accents
- ✅ SEO-friendly

## Customization

### Update Personal Information
Edit `src/data/resumeData.js` with your:
- Name, title, email, phone
- Experience, education, skills
- Publications and achievements
- Social media links

### Modify Styling
- Colors: Edit `tailwind.config.js` (navy-900, accent-cyan)
- Fonts: Configured in `tailwind.config.js` (Inter, Fira Code)
- Global styles: Edit `src/index.css`

### Adjust Animations
- Framer Motion: Edit component transition values
- Particle background: Adjust `particleCount`, speeds in `ParticleBackground.jsx`

## Performance
- Code splitting with lazy-loaded components
- Optimized images and assets
- Minified production build
- Efficient CSS with Tailwind
- Canvas particle animation for GPU acceleration

## Browser Support
- Chrome/Edge: ✅ Latest versions
- Firefox: ✅ Latest versions
- Safari: ✅ Latest versions
- Mobile browsers: ✅ iOS Safari, Chrome Mobile

## Known Issues
None currently. All components are functional.

## Future Enhancements
- Dark/Light mode toggle
- Blog section
- Project portfolio showcase
- Performance metrics dashboard
- Multi-language support

## Deployment Status
✅ Live at: https://shahringon98.github.io/portfolio-website/

## Support
For issues or questions, please open a GitHub issue in the repository.
