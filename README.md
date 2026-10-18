# Salaah — The Mentor Community Website

A modern, responsive, editorial-style website designed for **Salaah – The Mentor Community**, a student-led initiative centered around mentorship, peer collaboration, learning, and personal growth.

---

## 🎨 Design Direction

- **Warm Cream Background**: `#F8F5EE` / `#F1ECE0`
- **Deep Forest Green**: `#173D32` (Dark accent: `#0D261F`)
- **Coral Accent**: `#F07861` (Light glow: `#FBEAE6`)
- **Cards**: Clean white cards with soft borders (`#E7E1D3`) and subtle elevation
- **Typography**: Editorial pairings featuring *Plus Jakarta Sans* and *Newsreader* (serif italics)

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18+ recommended)
- npm (v9+ recommended)

### 2. Installation
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
```

---

## 🧭 Project Architecture

```
saalah/
├── index.html                      # Entry HTML with meta & typography fonts
├── package.json                    # Project metadata & dependencies
├── vite.config.js                  # Vite configuration
├── src/
│   ├── App.jsx                     # Root application structure
│   ├── main.jsx                    # React 18 DOM mount point
│   ├── index.css                   # Global design system, typography & tokens
│   ├── data/
│   │   └── communityData.js        # Centralized community data & registration link
│   └── components/
│       ├── Navbar.jsx              # Responsive header with mobile drawer
│       ├── Hero.jsx                # Hero section with editorial typography
│       ├── About.jsx               # Two-column layout & core pillars
│       ├── Beliefs.jsx             # 3 Core belief cards (Learn, Grow, Build)
│       ├── Activities.jsx          # Proposed activities with illustrative notice
│       ├── Opportunities.jsx       # Student growth and leadership pathways
│       ├── FAQ.jsx                 # Accessible accordion for common inquiries
│       ├── JoinSection.jsx         # Primary membership CTA section
│       ├── Contact.jsx             # Contact form with frontend validation
│       ├── Footer.jsx              # Wordmark, links, social placeholders & year
│       ├── SocialIcons.jsx         # Clean, dependency-free brand SVGs
│       └── ImageWithFallback.jsx   # Reliable image wrapper with fallback visuals
```

---

## 🔗 Updating Official Links

To update the official registration form or contact channels, edit `src/data/communityData.js`:
```javascript
export const OFFICIAL_REGISTRATION_URL = "https://forms.gle/your-official-link";
```
