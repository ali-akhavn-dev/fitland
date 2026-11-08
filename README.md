<div align="center">

# FitLand

### sports equipment e-commerce

<p>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=222222" alt="JavaScript" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Axios-671ddf?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
</p>

<p>
  <img src="https://img.shields.io/badge/Language-Persian-009688?style=flat-square" alt="Persian language" />
</p>

<p><strong>GitHub repository</strong></p>

<p>
  <a href="https://github.com/ali-akhavn-dev/fitland/pulls"><img src="https://img.shields.io/github/issues-pr/ali-akhavn-dev/fitland?style=flat-square&logo=github&label=Pull%20Requests" alt="Open pull requests" /></a>
  <a href="https://github.com/ali-akhavn-dev/fitland/graphs/commit-activity"><img src="https://img.shields.io/github/commit-activity/m/ali-akhavn-dev/fitland?style=flat-square&logo=github&label=Commits%20%2F%20month" alt="Monthly commit activity" /></a>
  <a href="https://github.com/ali-akhavn-dev/fitland/commits"><img src="https://img.shields.io/github/last-commit/ali-akhavn-dev/fitland?style=flat-square&logo=github&label=Last%20commit" alt="Last commit date" /></a>
</p>

</div>

---

## Table of Contents

- [About FitLand](#about-fitland)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [License](#license)

## About FitLand

FitLand is a sports-store frontend with a Persian-language, right-to-left interface. This repository contains the frontend application.

<br />

## Features

FitLand focuses on the key flows of an online sports store:

- **Authentication:** Sign-up and sign-in using one-time passwords (OTP)
- **Product discovery:** Search, filtering, sorting, product details, and related products
- **Shopping:** Shopping cart
- **Account management:** User panel and address management
- **Customer feedback:** Read reviews and submit a review

<br />

## Screenshots

### Hero section

![FitLand hero section](./docs/screenshots/hero-section.png)

### Product slider

![FitLand product slider](./docs/screenshots/slider.png)

<br />

## Tech Stack

### Core technologies

<p>
  <img src="https://img.shields.io/badge/React-19.2.8-61DAFB?style=flat-square&logo=react&logoColor=20232A" alt="React 19.2.8" />
  <img src="https://img.shields.io/badge/Vite-8.2.0-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 8.2.0" />
  <img src="https://img.shields.io/badge/React_Router-7.18.2-CA4245?style=flat-square&logo=reactrouter&logoColor=white" alt="React Router 7.18.2" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.3.3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4.3.3" />
  <img src="https://img.shields.io/badge/JavaScript-ES_Modules-F7DF1E?style=flat-square&logo=javascript&logoColor=222222" alt="JavaScript ES modules" />
</p>

### Supporting libraries and tools

| Library / tool                         | Purpose               |
| -------------------------------------- | --------------------- |
| Axios                                  | HTTP client           |
| Swiper                                 | Sliders and carousels |
| Leaflet, React Leaflet, Parsimap tiles | Map functionality     |
| Iconsax React                          | Icons                 |
| Sonner                                 | Toast notifications   |
| Zod                                    | Schema validation     |
| ESLint                                 | Linting               |

<br />

## Getting Started

### Requirements

- Node.js compatible with the Vite version used by this project
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite prints the local development URL in the terminal after startup.

<br />

## Project Structure

```text
.
├── public/
│   └── svg/                       # Public SVG assets
├── docs/
│   └── screenshots/               # README screenshots
├── src/
│   ├── assets/                    # Images and fonts
│   ├── components/
│   │   ├── common/                # Shared header and footer
│   │   ├── templates/             # Page compositions (Home, Cart)
│   │   └── ui/                    # Reusable UI components
│   ├── constants/
│   ├── context/
│   ├── features/                  # Feature modules (auth, cart, products, ...)
│   ├── hooks/
│   ├── layouts/
│   ├── pages/                     # Route-level pages
│   ├── services/                  # API/client services
│   ├── utils/
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
│   └── router.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## License

No `LICENSE` file is currently included. Unless a license is added, this code is not explicitly licensed for reuse or redistribution.
