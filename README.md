# 📻 W7ARA's SPOTTER-PRO (v2)
### High-Performance POTA & SOTA Hunting Console
**Official Utility of the Arizona Repeater Association (W7ARA)**

<p align="center">
  <img src="https://w7ara.org/Master/ara200.gif" alt="W7ARA Logo" width="150">
</p>

---

## 🚀 Overview
**W7ARA's SPOTTER-PRO** is a high-performance, mobile-first dashboard designed for amateur radio operators to hunt **POTA (Parks on the Air)** and **SOTA (Summits on the Air)** activations. Version 2 introduces advanced **Solar Weather Integration** and a heuristic **Prop-Pulse Engine** to help you decide which signals are actually "Solid" from your backyard.

---

## ✨ Key Features
- **🎯 Precise Global Tracking**: Real-time dual-polling of the POTA/SOTA APIs with a triple-layer distance fallback for accurate international DX resolution.
- **☀️ Solar Weather Pulse**: Live **SFI, K-Index, and A-Index** integration with traffic-light status indicators for immediate propagation awareness.
- **🟢 Prop-Pulse Engine**: Real-time heuristic modeling that tells you if a station is **SOLID**, **DX**, or likely in a **SKIP?** zone based on your grid and current solar data.
- **🔊 Morse Code Alerts**: Integrated CW alerts (".--." for POTA, "..." for SOTA) for new activations to help you "monitor" the board while away from the screen.
- **📱 Mobile-First PWA**: Fully installable as an **Offline Web App (PWA)** on Android/iOS, optimized for field use on mountain peaks or in parks.
- **📚 Field Glossary**: Built-in 1-tap reference for solar terminology and propagation symbology—turning the app into a field guide.
- **🗺️ Interactive Context**: One-click Google Maps integration for every park/summit and a `🧭 FIND ME` button to instantly discover your 6-digit grid square.
- **📋 One-Tap Copy**: frequency copying with dynamic visual feedback for quick VFO entry.

---

## 🛠️ Performance & Design
- **Single-File Logic**: The core app logic is contained in a single, high-speed file for maximum portability and zero-latency loading.
- **Zero-Dependency Core**: 100% Vanilla JavaScript—no external frameworks (React/Vue/Angular) to bloat the code or fail in low-data field conditions.
- **Modern Dashboard UI**: Sleek, high-visibility dark mode with responsive card layouts and "New" highlight markers for fresh spots.

---

## 📖 Provenance & Authorship
*   **Initial Design & Philosophy**: **WB2SEF**
*   **Logic & PWA Engineering**: **mdrapkin** & **Antigravity (AI Assistant)**
*   **Organization**: **Arizona Repeater Association (W7ARA)**

---

## 🚀 Quick Launch
Use the live console instantly in your browser (and select **"Add to Home Screen"** to install it as an app):  
**[👉 Launch W7ARA Spotter-PRO (Live) 👈](https://msdrapkin.github.io/W7ARA-Spotter-PRO/)**

---

## 📜 Documentation & Education
Included in this repository as part of the W7ARA "AI-Assisted Build" educational initiative:
- `build_history.md`: Full technical development log and implementation phases.
- `session_walkthrough.md`: A 7-phase educational guide explaining the "Why" behind the technical architecture (Caching, Solar Data, Distance Fallbacks, Global DX Regional Mapping, and VHF/UHF propagation insights).

---

**Project State**: Stable for Field Use (Version 2.2 / SW v8).  
*Managed by the Arizona Repeater Association (W7ARA).*

---