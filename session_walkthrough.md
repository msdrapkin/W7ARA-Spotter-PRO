# 📻 W7ARA Spotter-PRO // Session Walkthrough
### The Evolutionary Guide for the Arizona Repeater Association

This document tracks the technical evolution of the **Spotter-PRO v2** application, highlighting the challenges faced and the "Ham-First" solutions we implemented to make this the ultimate field tool.

---

## 📱 Phase 1: Mobile-First Redesign
**Objective**: Transition from a desktop-centric dashboard to a field-ready PWA (Progressive Web App).

### 1.1 The "Bottom Navigation" Collision
- **Challenge**: On Android and iOS, the system navigation bar would often obscure the bottom-most spots or the distance markers.
- **Solution**: Implemented a "Safe Zone" padding strategy using `padding-bottom: env(safe-area-inset-bottom, 20px)`. This ensures that even with a high-density list, the last spot is always fully readable.

### 1.2 The Settings Drawer
- **Challenge**: Mobile screens are too narrow for a persistent sidebar.
- **Solution**: Refactored the configuration pane into a sliding **Settings Drawer**. This reclaimed 30% of the screen real estate for the spot list while keeping filters just a tap away.

---

## 🛰️ Phase 2: Data Integrity & Global DX
**Objective**: Ensure the data is accurate and comprehensive for global operations.

### 2.1 The "SOTA 20" Bottleneck
- **Challenge**: The SOTA API default limit of 20 caused "Spot Drowning"—one busy activator would hide everyone else.
- **Solution**: Increased the SOTA fetch limit to **100 spots** and implemented **Smart Counters** in the header to show "Unique/Visible" activators.

### 2.2 Resolving Global Distances
- **Challenge**: International spots often showed `-- mi` because of US-centric mapping.
- **Solution**: Expanded the `regionCenters` mapping with a **Triple-Layer Fallback**:
    - **Layer 1**: Match the specific POTA `locationDesc`.
    - **Layer 2**: Match the country code prefix (e.g., `CU` for Cuba).
    - **Layer 3**: Parse the activator's callsign prefix directly to estimate the center of their home country.

---

## ☀️ Phase 3: Solar Weather Pulse
**Objective**: Provide real-time propagation context directly in the dashboard.

### 3.1 The "Solar Pulse" Strip
- **Challenge**: Spotting someone is one thing; knowing if you can *hear* them depends on the ionosphere.
- **Solution**: 
    1. Integrated a live **Solar Bar** using the **HamQSL (NØNBH)** feed.
    2. Implemented **Color-Coded Status Dots** for the K-Index (Green = Stable, Red = Storm).
    3. Added **SFI (Solar Flux Index)** tracking to help users decide if the high bands (10m) are "open."

---

## 📱 Phase 4: Mobile Compatibility (Android Focus)
**Objective**: Fix silent data failures on mobile devices.

### 4.1 The "Android Case-Sensitivity Trap"
- **Challenge**: Android's `DOMParser` can be case-sensitive. Desktop Chrome found `<solarflux>`, but Android sometimes required `<SOLARFLUX>`. 
- **Solution**: Implemented a **Case-Insensitive Tag Helper** that searches for both variations, ensuring stability across all mobile browsers.

### 4.2 Cache Busting (SW v4)
- **Challenge**: PWAs on phones are incredibly stubborn about keeping "Old Code."
- **Solution**: Bumping the `CACHE_NAME` to **`v4`** forces the phone's browser to discard the old cache and pull in the latest solar logic and glossary updates on the next refresh.

---

---

## 🛰️ Phase 6: Global DX & Regional Mapping
**Objective**: Resolve accurate distances for international regions.

### 6.1 The "Japan Call Area" Problem
- **Challenge**: SOTA spots from Japan (e.g., `JA6/KG-095`) often mapped to a generic Tokyo center point, leading to inaccurate 400-mile errors across islands.
- **Solution**: Implemented a **Regional Sub-Prefix Matcher** for the JA-series (JA1–JA9, JA0). The app now identifies the specific call area and maps to the correct regional center (e.g., Kyushu for JA6) before falling back to the country center.

---

## 📻 Phase 7: VHF/UHF Field Utility
**Objective**: Enable effective 2m/6m/70cm hunting in the field.

### 7.1 The "MHz Multiplier" Fix
- **Challenge**: Spots on 144 MHz or 440 MHz were being misidentified as "0.144 kHz" due to legacy frequency scaling, causing them to disappear when filters were applied.
- **Solution**: Shifted the auto-scaling threshold to **1000 MHz**. This correctly identifies VHF/UHF spots as their actual band and allows them to populate the board even when filtered.

### 7.2 The "DX/Tropo" Pulse
- **Challenge**: Spot labels like "SOLID" or "STRONG" are HFcentric. VHF operators care about **Atmospheric Ducting (Tropo)**.
- **Solution**: Enhanced the Prop-Pulse engine to detect VHF distances over **200 miles** and label them as **DX/Tropo**, signaling a potential opening for line-of-sight operators.

---

## 🛰️ Appendix: Quick Solar Reference
*A cheat sheet for field operators.*

| Metric | Goal | Significance |
| :--- | :--- | :--- |
| **SFI** | **150+** | The higher the number, the better for 10m/15m/20m. |
| **K-Index** | **0-2 🟢** | Indicators of "Quiet" bands. K=5+ is a Radio Storm. |
| **A-Index** | **< 10** | Shows long-term geomagnetic stability. |

---

**Current Project State**: Stable for Field Use (Version 2.2 / SW v8).  
*Managed by the Arizona Repeater Association (W7ARA).*
