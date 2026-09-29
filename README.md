# SmrutiVR — Digital Heritage & Virtual Reality Preservation Platform

<div align="center">
  <img src="public/logo.png" alt="SmrutiVR Logo" width="160" height="auto" />
  <h3>Experience the Past. Preserve the Future.</h3>
  <p>An immersive digital twin and WebXR heritage platform dedicated to preserving India's architectural marvels in high-fidelity 3D and Virtual Reality.</p>
</div>

---

## 🌟 Overview

**SmrutiVR** is a museum-grade digital preservation platform engineered to archive, visualize, and interactively explore India's monumental heritage. Powered by **WebGL**, **Three.js / React Three Fiber**, **WebXR**, and **Multilingual AI**, SmrutiVR enables users worldwide to step directly into sacred architectural marvels—such as the **Taj Mahal**—from desktop, mobile, or standalone VR headsets (e.g. Meta Quest, Apple Vision Pro, Cardboard).

---

## ✨ Key Features

- 🏛️ **3D Photogrammetric & Model Viewer**:
  - Full Orbit, Fly-through, and First-Person camera inspection modes.
  - Interactive architectural hotspots (Dome, Minarets, Pietra Dura Inlays, Charbagh Gardens).
  - Dynamic time-of-day lighting (Dawn, Golden Hour, Midnight Moonlit).
  - Material X-Ray & Wireframe telemetry inspection.

- 🥽 **Immersive WebXR Virtual Reality**:
  - 1-click immersive VR mode conforming to the W3C WebXR standard.
  - Spatial audio, room-scale teleportation, and 6-DoF controller support.

- 🤖 **Smruti AI — Multilingual Heritage Guide**:
  - Grounded AI storytelling assistant with real-time audio synthesis (Web Speech API).
  - Trilingual support: **English**, **हिन्दी (Hindi)**, and **मराठी (Marathi)**.

- ⏳ **Heritage Then & Now Interactive Comparison**:
  - Visual timeline slider comparing 19th-century colonial surveys & archival paintings against modern 3D digital twins.

- 🗄️ **National Digital Repository (Archive)**:
  - Curated monument database with scanning progress, degradation telemetry, and archival downloads.

- 🎵 **Generative Ambient Soundtrack**:
  - Procedural Indian classical Tanpura synthesizer using Web Audio API for an authentic cultural atmosphere.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | React 18 + TypeScript |
| **Build Tool** | Vite |
| **3D Graphics & WebGL** | Three.js, `@react-three/fiber`, `@react-three/drei` |
| **Virtual Reality** | `@react-three/xr` (W3C WebXR Device API) |
| **Styling** | Tailwind CSS (Antique Gold & Deep Charcoal Heritage Theme) |
| **Icons** | Lucide React |
| **Audio** | Web Audio API (Tanpura Synth) + Web Speech API (TTS) |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.0 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/smruti-vr.git
   cd smruti-vr
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```
Smruti VR/
├── public/
│   ├── logo.png                # Transparent high-res SmrutiVR gold emblem
│   ├── logo.svg                # Scalable vector logo wrapper
│   ├── favicon.svg             # Browser tab favicon
│   └── models/
│       └── taj-mahal.glb       # Optimized 3D Taj Mahal digital twin asset
├── src/
│   ├── components/
│   │   ├── AI/                 # Smruti AI conversational guide modal
│   │   ├── Audio/              # Ambient tanpura audio synth controls
│   │   ├── Footer/             # Museum-grade footer component
│   │   ├── Hero/               # Cinematic heritage hero section
│   │   ├── Navbar/             # Glassmorphism header with WebXR & Lang controls
│   │   ├── TajMahalViewer/     # 3D canvas, orbit controls, lighting & shaders
│   │   └── ThenVsNow/          # Before & after time comparison slider
│   ├── context/
│   │   ├── AudioContext.tsx    # Global audio & voice state
│   │   ├── ExperienceContext.tsx# Navigation, VR state, and viewer mode manager
│   │   └── LanguageContext.tsx # Trilingual localization (EN / HI / MR)
│   ├── pages/
│   │   ├── HomePage.tsx        # Main showcase landing page
│   │   ├── ExplorePage.tsx     # Monument exploration grid
│   │   ├── TajMahalPage.tsx    # Dedicated full-screen 3D/VR experience
│   │   ├── HistoryPage.tsx     # Historical timeline & documentaries
│   │   ├── ArchivePage.tsx     # National Digital Repository
│   │   └── PreservationPage.tsx# About & conservation initiatives
│   ├── styles/
│   │   └── index.css           # Tailwind directives & typography tracking
│   ├── App.tsx                 # Root application component
│   └── main.tsx                # Application entrypoint
├── index.html                  # HTML5 template with Google Heritage fonts
├── package.json                # Dependencies and build scripts
├── tailwind.config.js          # Custom theme colors (Antique Gold, Charcoal)
├── tsconfig.json               # TypeScript compiler configuration
└── vite.config.ts              # Vite configuration
```

---

## 📜 License

This project is open-source under the [MIT License](LICENSE).

---

<div align="center">
  <sub>Preserving India's Architectural Legacy with SmrutiVR © 2026. All rights reserved.</sub>
</div>
