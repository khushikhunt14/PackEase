# 📦 PackEase - Custom Packaging Solutions for Modern Brands

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Design-Responsive%20%26%20Mobile--First-2ec4b6?style=for-the-badge)](https://en.wikipedia.org/wiki/Responsive_web_design)
[![Theme](https://img.shields.io/badge/Theme-Light%20%2F%20Dark%20Mode-0b5a46?style=for-the-badge)](#-light--dark-theme-toggle)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

> **PackEase** is a modern, high-performance web platform for eco-friendly, custom brand packaging solutions. It provides an intuitive customer storefront with interactive pricing calculators, product configurators, and sustainability metrics, paired with an enterprise-ready Admin Management Portal for orders, inventory, and client tracking.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
  - [Client-Facing Storefront](#-client-facing-storefront)
  - [Admin Management Portal](#-admin-management-portal)
- [Demo Credentials](#-demo-credentials)
- [Project Architecture & File Structure](#-project-architecture--file-structure)
- [Pricing Calculator Algorithm](#-pricing-calculator-algorithm)
- [Tech Stack](#-tech-stack)
- [Getting Started / Local Setup](#-getting-started--local-setup)
- [Screenshots & Walkthrough](#-screenshots--walkthrough)
- [Roadmap & Future Enhancements](#-roadmap--future-enhancements)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌿 Overview

Packaging is the first tangible touchpoint between modern e-commerce brands and their customers. **PackEase** bridges the gap between packaging manufacturers and businesses by simplifying custom box configuration, instant bulk-order quotation, and end-to-end order administration.

Built entirely with standard web standards (**Semantic HTML5**, **CSS3 with Custom Properties**, and modular **Vanilla JavaScript**), PackEase delivers lightning-fast load times with zero third-party dependencies or framework overhead.

---

## ✨ Key Features

### 🛒 Client-Facing Storefront

| Page / Component | Key Highlights |
| :--- | :--- |
| **Landing Page (`index.html`)** | Modern hero section with call-to-actions, live statistics counter, featured packaging solutions, 4-step production workflow, verified customer reviews, accordion FAQ, and newsletter subscription. |
| **Product Catalog (`products.html`)** | Complete packaging showcase with dynamic category filter tabs (`Corrugated Boxes`, `Paper Bags`, `Cosmetic Boxes`, `Rigid Gift Boxes`, `Flexible Pouches`, `Labels & Stickers`). |
| **Product Configurator (`product-detail.html`)** | Deep customization suite allowing clients to select box styles, dimensions ($L \times W \times H$), raw materials, surface coatings/finishes, and quantity tiers with instant real-time price estimation. |
| **Sustainability (`sustainability.html`)** | Transparent breakdown of circular supply chains, biodegradable & FSC-certified materials, and carbon-reduction initiatives. |
| **Quote & Contact (`contact.html`)** | Interactive quotation inquiry form, sample box kit requests, contact information, and operating hours. |
| **Theme Toggle System** | Seamless Dark / Light mode toggle with state persistence across visits via browser `localStorage`. |
| **Toast Notification Feedback** | Non-intrusive animated toast alert system for user interactions and form submissions. |

### 🛠️ Admin Management Portal

Access high-level operations through a dedicated, authenticated management interface:

- **Executive Analytics (`admin-dashboard.html`)**: Real-time KPI summary cards (Total Revenue, Active Orders, Lead Conversions, Production Status), revenue bar graphs, quick action buttons, and recent orders log.
- **Product Inventory (`admin-products.html`)**: Catalog monitoring, stock levels, unit pricing, and a modal form for onboarding new packaging products.
- **Orders & Quotes (`admin-orders.html`)**: Status management pipeline (`Pending Review`, `In Production`, `Dispatched`, `Delivered`) and order detail views.
- **Customer Directory (`admin-customers.html`)**: Client roster, lifetime order counts, total spent, and quick-search filter.
- **Settings & Reports (`admin-settings.html`)**: Production notifications, tax parameters, business profile, and downloadable reporting presets.
- **Dynamic Live Search**: Real-time client-side table filtering on every admin listing without full page reloads.

---

## 🔐 Demo Credentials

You can test both portal environments directly from [`login.html`](login.html) using the role switcher tabs:

| Role | Username / Email | Password | Access Target |
| :--- | :--- | :--- | :--- |
| **Administrator** | `admin` | `1234` | [`admin-dashboard.html`](admin-dashboard.html) |
| **Customer** | `client@example.com` | `password123` | [`index.html`](index.html) |

> 💡 **Direct Access**: You can also launch [`admin-dashboard.html`](admin-dashboard.html) directly during development without authentication barriers.

---

## 📂 Project Architecture & File Structure

PackEase is structured as a clean, single-folder workspace with zero subdirectories. All HTML web pages, CSS stylesheets, JavaScript files, and visual media reside together in the root `PackEase` directory for effortless deployment and direct portability.

```text
PackEase/
├── 📄 README.md                 # Project documentation & GitHub overview
│
├── 🌐 Storefront Web Pages
│   ├── 📄 index.html            # Main storefront landing page
│   ├── 📄 about.html            # Company profile, mission & leadership
│   ├── 📄 products.html         # Categorized packaging catalog with filter tabs
│   ├── 📄 product-detail.html   # Interactive packaging customizer & price estimator
│   ├── 📄 sustainability.html   # Environmental impact & material standards
│   ├── 📄 contact.html          # Custom quote request & customer support form
│   ├── 📄 login.html            # Dual-role authentication portal (Customer vs Admin)
│   └── 📄 admin.html            # Redirection handler to Admin Dashboard
│
├── 🛠️ Admin Management Suite
│   ├── 📄 admin-dashboard.html  # Analytics overview, KPIs & recent transactions
│   ├── 📄 admin-products.html   # Inventory control & modal for adding products
│   ├── 📄 admin-orders.html     # Order fulfillment pipeline & quote management
│   ├── 📄 admin-customers.html  # Client CRM records & order frequency
│   └── 📄 admin-settings.html   # System parameters, regional configs & reports
│
├── 🎨 Stylesheets
│   ├── 📄 style.css             # Main storefront stylesheet, tokens & dark mode rules
│   └── 📄 admin.css             # Dedicated sidebar layout, data tables & admin controls
│
├── ⚡ JavaScript Modules
│   ├── 📄 main.js               # Storefront logic (Theme toggle, filter tabs, quote engine, FAQs)
│   ├── 📄 admin.js              # Admin features (Table search, modals, product form, logout)
│   └── 📄 script.js             # Utility scripts & general event handlers
│
└── 🖼️ Packaging Assets
    ├── 🖼️ hero.png              # Showcase hero banner imagery
    ├── 🖼️ corrugated.png        # Corrugated shipping box product render
    ├── 🖼️ rigid.png             # Luxury rigid gift box render
    ├── 🖼️ paperbag.png          # Eco-friendly kraft paper shopping bag
    ├── 🖼️ cosmetic.png          # High-end cosmetic product container
    ├── 🖼️ flexible.png          # Resealable barrier pouch render
    └── 🖼️ labels.png            # Custom roll labels & branded stickers
```

---

## 🧮 Pricing Calculator Algorithm

The interactive quote calculator dynamically calculates estimates based on packaging type, raw material premium, and wholesale quantity tiers:

$$\text{Unit Price} = \max\Big(1, \text{Base Price} \times \text{Material Multiplier} \times \text{Volume Discount Tier}\Big)$$

$$\text{Total Price} = \text{Unit Price} \times \text{Quantity}$$

### 1. Base Prices by Category
- **Corrugated Boxes**: ₹25 / unit
- **Rigid Gift Boxes**: ₹120 / unit
- **Paper Bags**: ₹15 / unit
- **Cosmetic Boxes**: ₹80 / unit
- **Flexible Pouches**: ₹10 / unit
- **Labels & Stickers**: ₹5 / unit

### 2. Material Multipliers
- **Standard White Cardstock**: $1.0\times$
- **Recycled Kraft Paper**: $1.1\times$
- **100% Post-Consumer Recycled (PCR)**: $1.25\times$
- **Luxury Heavyweight Rigid Board**: $1.5\times$

### 3. Wholesale Volume Discount Tiers

| Order Quantity | Discount Applied | Net Cost Factor |
| :--- | :--- | :--- |
| **100 – 499 pcs** | Standard Rate (0%) | $1.00\times$ |
| **500 – 999 pcs** | 8% Bulk Discount | $0.92\times$ |
| **1,000 – 2,499 pcs** | 15% Bulk Discount | $0.85\times$ |
| **2,500 – 4,999 pcs** | 25% High-Volume Tier | $0.75\times$ |
| **5,000+ pcs** | 35% Enterprise Tier | $0.65\times$ |

---

## 💻 Tech Stack

- **Markup**: [HTML5](https://html.spec.whatwg.org/) (Semantic elements, accessibility landmarks, clean DOM structure)
- **Styling**: [CSS3](https://www.w3.org/Style/CSS/) (Custom Properties / CSS Variables, CSS Grid, Flexbox, Smooth Transitions)
- **Scripting**: Modern Vanilla [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **Typography**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) via Google Fonts
- **Storage**: Browser `localStorage` for theme preferences
- **Asset Optimization**: High-resolution, lightweight compressed `.png` renders

---

## 🚀 Getting Started / Local Setup

Because **PackEase** uses zero build tools, bundlers, or external dependencies, setup is instantaneous.

### Method 1: Direct File Launch
Simply double-click [`index.html`](index.html) in any web browser (Chrome, Edge, Firefox, Safari).

### Method 2: VS Code Live Server (Recommended)
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension (`ritwickdey.liveserver`).
3. Right-click [`index.html`](index.html) and click **"Open with Live Server"**.
4. The site will launch automatically at `http://127.0.0.1:5500`.

### Method 3: Python Local Server
If Python is installed on your workstation:
```bash
# Python 3
python -m http.server 8000
```
Then visit: `http://localhost:8000`

### Method 4: Node.js `serve`
```bash
npx serve .
```

---

## 📱 Browser Compatibility

PackEase is fully responsive and verified across modern browsers:

| Browser | Supported Version |
| :--- | :--- |
| **Google Chrome** | Latest (Desktop & Mobile) |
| **Mozilla Firefox** | Latest (Desktop & Mobile) |
| **Apple Safari** | Latest (macOS & iOS) |
| **Microsoft Edge** | Latest (Chromium based) |

---

## 🗺️ Roadmap & Future Enhancements

- [ ] **3D Canvas Model Previewer**: WebGL / Three.js integration for real-time 3D rotation of custom boxes.
- [ ] **Custom Artwork Upload**: Drag-and-drop dieline artwork editor for customer logo placement.
- [ ] **RESTful API Backend**: Node.js/Express or Python/FastAPI integration with database storage (PostgreSQL/MongoDB).
- [ ] **Payment Gateway**: Razorpay / Stripe integration for online deposit and invoice settlement.
- [ ] **Automated PDF Quotation Generator**: Download instant customized pro-forma invoices directly from the browser.

---

## 🤝 Contributing

Contributions are welcomed! If you have suggestions or wish to improve PackEase:

1. **Fork** the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m "Add some AmazingFeature"`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a **Pull Request**.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">
  <sub>Crafted with passion for sustainable packaging by the <strong>PackEase</strong> Team.</sub><br>
  <sub>© 2026 PackEase Solutions Inc. All rights reserved.</sub>
</div>
