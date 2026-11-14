<div align="center">

# FitLand

### Sports equipment e-commerce

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
  <img src="https://img.shields.io/github/issues-pr/ali-akhavn-dev/fitland?style=flat-square&logo=github&label=Pull%20Requests" alt="Open pull requests" />
  <img src="https://img.shields.io/github/commit-activity/t/ali-akhavn-dev/fitland" alt="commit activity" />
</p>

</div>

---

## Table of Contents

- [About FitLand](#about-fitland)
- [Features](#features)
- [OTP Authentication](#otp-authentication)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [License](#license)

## About FitLand

FitLand is an online store for sports products. This repository contains the React frontend, while the backend is kept in a separate repository.

The app brings together product browsing, search, customer accounts, and shopping features. Its code is organized into reusable components and folders for different features, making it easier to maintain and grow the project.

## Features

The main features include:

- **Sign-up and login:** Use a one-time password (OTP)
- **Products:** Search, filters, sorting, product details, and related products
- **Shopping cart**
- **User account:** User panel and address registration
- **Reviews:** Read and submit product reviews

## OTP Authentication

Registration and login with one-time passwords (OTP) are complete:

1. The user enters a phone number and requests a code.
2. The user enters the code to verify the number.
3. After verification, existing users can log in and new users can continue with registration.
4. During registration, the backend checks that the phone number matches the one verified with the code. It rejects any mismatch.

This lets users sign up and log in using their phone number and a one-time code.

## Screenshots

### Hero section

![FitLand hero section](./docs/screenshots/hero-section.png)

### Product slider

![FitLand product slider](./docs/screenshots/slider.png)

## Tech Stack

### Core technologies

<p>
  <img src="https://img.shields.io/badge/javascript-gray?logo=javascript" alt="JavaScript" />
  <img src="https://img.shields.io/badge/react-gray?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/vite-gray?logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/react%20router-gray?logo=react-router" alt="React Router" />
  <img src="https://img.shields.io/badge/tailwindCss-gray?logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/axios-gray?logo=axios" alt="axios" />
  
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
