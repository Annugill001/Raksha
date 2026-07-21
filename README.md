# ⚡ RAKSHA – Live Security & Emergency SOS Tracker

> **Empowering personal safety through real-time location tracking, dynamic nearest police station/chowk identification, and instant SOS dispatching.**

---

## 📌 About The Project

**Raksha** is a lightweight, responsive web application engineered for real-time personal safety and emergency response. Built with privacy and speed in mind, Raksha automatically tracks live GPS coordinates, analyzes area safety ratios, fetches the closest police stations or local chowks with direct dialing capabilities, and triggers instant SOS alerts to family guardians.

---

## ✨ Key Features

- **🔴 One-Tap SOS Speed Dial:** Instant trigger that prioritizes personal family contacts or redirects to national emergency line `112`.
- **📍 Dynamic Area & Chowk Radar:** Automatically scans real-time map databases (OpenStreetMap/Overpass API) to display your exact nearest Police Station, Chowk, or Suburb with direct local helpline numbers.
- **🛰️ Live Precision GPS Tracking:** Real-time latitude/longitude tracking with dynamic accuracy indicators.
- **📊 Real-Time Area Safety Ratio:** Automated safety ratio algorithm mapping live geographical position to safety risk zones.
- **🚨 National Helpline Quick-Access:** Dedicated speed-dial shortcuts for Emergency (`112`), Women Helpline (`1091`), Police Desk (`100`), and Abuse Help (`181`).
- **👥 Local Contact Vault:** Client-side encrypted storage using `localStorage` to manage trusted guardian mobile numbers and emails.

---

## 🛠️ Tech Stack & Tools

| Component | Technology / API |
| :--- | :--- |
| **Frontend UI** | HTML5, Modern CSS3 (CSS Variables, Responsive Flexbox/Grid) |
| **Client Scripting** | Pure JavaScript (Vanilla JS ES6+, Async/Await, Fetch API) |
| **Location Data** | HTML5 Geolocation API |
| **Maps & Spatial API** | Overpass API (OpenStreetMap Engine) & Nominatim Geocoding |
| **Backend / Dispatch** | Node.js / Vercel Serverless Function (`/api/sos`) |
| **Data Storage** | Browser Native `localStorage` |

---

## 🚀 Getting Started

Follow these simple steps to run Raksha locally on your machine.

### Prerequisites
- Any modern web browser with Geolocation access enabled (Chrome, Safari, Edge, Firefox).
- Node.js (Optional, only if running the `/api/sos` backend locally).

### Installation & Local Run

1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/your-username/raksha-safety-app.git](https://github.com/your-username/raksha-safety-app.git)
   cd raksha-safety-app
