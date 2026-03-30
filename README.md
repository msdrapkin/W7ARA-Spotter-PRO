# 📻 W7ARA's SPOTTER-PRO
### High-Performance POTA & SOTA Hunting Console
**Official Utility of the Arizona Repeater Association (W7ARA)**

<p align="center">
  <img src="https://w7ara.org/Master/ara200.gif" alt="W7ARA Logo" width="150">
</p>

---

## 🚀 Overview
**W7ARA's SPOTTER-PRO** is a high-performance, real-time dashboard designed for amateur radio operators to hunt **POTA (Parks on the Air)** and **SOTA (Summits on the Air)** activations. Built with a focus on speed and utility, it provides a self-contained, browser-based environment that requires **zero installation** and **zero external dependencies**.

---

## ✨ Key Features
- **🎯 Precise Tracking**: Real-time dual-polling of the POTA and SOTA APIs with distance and bearing calculations.
- **🔊 Morse Code Alerts**: Integrated **Web Audio API** engine that plays rhythmic CW alerts ("P" for POTA, "S" for SOTA) for new spots.
- **🕵️ Activator Watchlist**: Ability to "camp" on a specific callsign, clearing the dashboard until your target activator goes live.
- **🗺️ Interactive Mapping**: One-click Google Maps integration for every spot with location data, allowing instant terrain visualization.
- **🛰️ Geolocation Finder**: A `🧭 FIND ME` button to automatically populate your 6-digit Maidenhead grid square via the browser's GPS API.
- **📋 Copy-to-VFO**: One-tap frequency copying with dynamic visual feedback for quick entry into your transceiver control software.
- **📡 Advanced Filtering**: Filter by mode (SSB, CW, Digital), band (160m–70cm), and distance radius.

---

## 🛠️ Performance & Design
- **Single-File Architecture**: The entire application (HTML, CSS, and Logic) is contained in a single 100% portable file.
- **Zero-Dependency Core**: High-speed vanilla JavaScript—no external frameworks like React or Leaflet.
- **Modern Dashboard UI**: A sleek, high-visibility dark mode designed for focus in the shack.

---

## 📖 Provenance
*   **Initial Design & Philosophy**: **WB2SEF**
*   **Development & Branding**: **mdrapkin** & **Antigravity (AI Assistant)**
*   **Organization**: **Arizona Repeater Association (W7ARA)**

## 🚀 Quick Launch (No Installation Required)

Use the live console instantly in your browser:  
**[👉 Launch W7ARA Spotter-PRO 👈](https://msdrapkin.github.io/W7ARA-Spotter-PRO/)**

---

## ⚙️ Offline Use (Download)

If you'd prefer to run the console locally on your computer:

1.  **[Download W7ARA Spotter-PRO (index.html)](https://raw.githubusercontent.com/msdrapkin/W7ARA-Spotter-PRO/master/index.html)**.
2.  Your browser will open a page of code. Press **Ctrl + S** (Windows) or **Cmd + S** (Mac) to save it as `spotter.html`.
3.  Double-click the saved file on your computer to launch the dashboard!
4.  **Configure**: Enter your **Callsign** and **Grid Square** (or use the `🧭` button) to enable distance and bearing calculations.
5.  **Hunt**: Enable the "Audio Notifications" checkbox to receive live Morse alerts for new activations.

---

## 📜 Documentation
Included in this repository:
- `build_history.md`: Full technical development log and implementation phases.
- `PROMPT-RESPONSE-HISTORY.txt`: A complete 13-prompt educational transcript detailing the build process.

---

*This project was developed for the Arizona Repeater Association as a high-performance utility for the W7ARA community and as an educational case study in AI-assisted tool building.*
