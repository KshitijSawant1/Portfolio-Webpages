# Node.js and React Setup Guide

## 📌 Studio
Welcome to the setup guide for Node.js and React development. Follow the steps below to install the necessary tools and set up your environment.

---

## 📌 Introduction
This guide will walk you through installing Node.js, setting up a React project with Vite, and solving common installation issues.

---

## 📌 Installation

### Installing Node.js

1. Download Node.js from the [official website](https://nodejs.org/).
2. Run the installation setup and select the following options:
   - ✅ **Node.js runtime**
   - ✅ **npm package manager**
   - ✅ **Add to PATH**
3. Click **Next** and complete the installation.

After installation, verify Node.js and npm installation:
```cpp
node -v
npm -v
```

---

## 📌 Setting Up a React Project

To create a React project using Vite, run the following commands:
```cpp
npm create vite@latest app-name --template react
```
1. Select **React**.
2. Select **JavaScript**.
3. Navigate into the project folder:
   ```cpp
   cd app-name
   ```
4. Install dependencies:
   ```cpp
   npm install
   ```
5. Start the development server:
   ```cpp
   npm run dev
   ```
6. Install React Icons for UI enhancements:
   ```cpp
   npm install react-icons
   ```

---

## 📌 Fixing PowerShell Execution Policy Issue (Windows)
If you encounter a security error while running npm commands, update your PowerShell execution policy:

1. Open PowerShell as Administrator.
2. Run the following commands:
For One time Use but Don't Close the Terminal otherwise the Bypass will be closed
   ```cpp
   Get-ExecutionPolicy -List
    Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
    npm -v
   ```
    OR For Permanent Change
   ```cpp
   Get-ExecutionPolicy -List
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   npm -v
   ```

This will allow scripts to run temporarily for the current session.

# 📌 Portfolio Webpage Project

## 🌟 Overview
This project consists of two versions of a personal portfolio webpage: a **simpler** version and an **extended** version. The pages are built using **React.js** with **Vite** for fast development, integrating React Icons, JSON-based dynamic content, and modern UI elements.

## 📂 Project Structure
```
portfolio-webpage/
│── public/
│   ├── favicon.ico  # Website Favicon
│── src/
│   ├── assets/  # Stores images & icons
│   │   ├── image.png  # Profile image
│   │   ├── react.svg  # React logo
│   ├── components/  # Reusable UI components
│   ├── pages/  # Webpages (Home, Projects, Contact)
│   ├── App.jsx  # Main application component
│   ├── App.css  # Global styling
│   ├── index.html  # Root HTML file
│   ├── links.json  # Stores external links dynamically
│   ├── main.jsx  # Entry point for React App
│   ├── README.md  # Documentation
│── .gitignore  # Ignored files for Git
│── package.json  # Project dependencies and scripts
│── vite.config.js  # Vite configuration
```

---
## 📄 Key Components

### 📌 **index.html Update**
Updated **favicon** and **title** for customization.
```cpp
<link rel="icon" type="image/png" href="/favicon.ico" />
<title>Portfolio - KS</title>
```

### 📌 **links.json**
Stores external links dynamically for the Tech Presence section.
```cpp
[
  {"name": "Let’s Connect on LinkedIn", "url": "https://www.linkedin.com/in/kshitijksawant/"},
  {"name": "Explore My GitHub Projects", "url": "https://github.com/KshitijSawant1"},
  {"name": "Get connected on Instagram", "url": "https://www.instagram.com/"},
  {"name": "Explore Creativity on Pinterest", "url": "https://www.pinterest.com/"}
]
```

### 📌 **Importing Dependencies**
```cpp
import React from "react";
import "./App.css";
import links from "./links.json";
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa";
import profileImage from "./assets/KS.png";
```

### 📌 **App Component & Header Section**
```jsx
function App() {
  return (
    <div className="app">
      <header className="header">
        <img src={profileImage} alt="Profile" className="profile-img" />
        <h1>KSHITIJ K SAWANT</h1>
        <p>Tech Enthusiast | AI & Data Science Student | Developer</p>
      </header>
    </div>
  );
}
```

### 📌 **Social Media & Contact Icons**
```jsx
<a href="mailto:sawantkshitij1@gmail.com" target="_blank" rel="noopener noreferrer">
  <FaEnvelope size={24} />
</a>
```

### 📌 **Dynamic Tech Presence Section**
```jsx
{links.map((link, index) => (
  <div className="link-card" key={index}>
    <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
  </div>
))}
```

---
## 🎨 UI Enhancements
- **Responsive Navbar**: Collapsible menu with icons for mobile view.
- **Themed Buttons & Cards**: Styled elements for better aesthetics.
- **Smooth Animations**: Hover effects and transitions.

---

