import React from "react";
import "./App.css";
import links from "./links.json"; // Import the links
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa";
import profileImage from "./assets/KS.png"; // Ensure your image is in /assets/

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src={profileImage} alt="Profile" className="profile-img" />
        <h1>KSHITIJ K SAWANT</h1>
        <p>Tech Enthusiast | AI & Data Science Student | Developer</p>
        <div className="icons">
          <a href="mailto:sawantkshitij1@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={24} />
          </a>
          <a href="https://wa.me/9820402146" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={24} />
          </a>
          <a href="https://github.com/KshitijSawant1" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/kshitijksawant/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer">
            <FaSpotify size={24} />
          </a>
        </div>
      </header>
      <main className="links">
        <h2>TECH PRESENCE</h2>
        {links.map((link, index) => (
          <div className="link-card" key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
