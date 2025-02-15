import React from "react";
import links from "../links.json";
import profileImage from "../assets/KS.png";
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Profile Section */}
      <header className="header">
        <img src={profileImage} className="profile-img" alt="Profile" />
        <h1>KSHITIJ K SAWANT</h1>
        <p className="subtitle">Tech Enthusiast | AI & Data Science Student | Developer</p>

        {/* Icons Section */}
        <div className="icons">
          <a href="mailto:sawantkshitij1@gmail.com"><FaEnvelope /></a>
          <a href="https://wa.me/9820402146"><FaWhatsapp /></a>
          <a href="https://github.com/KshitijSawant1"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/kshitijksawant/"><FaLinkedin /></a>
          <a href="https://open.spotify.com/"><FaSpotify /></a>
        </div>
      </header>

      {/* Tech Presence Links */}
      <section className="tech-links">
        <h2>Tech Presence</h2>
        <div className="link-container">
          {links.map((link, index) => (
            <a href={link.url} key={index} className="link-card">
              {link.name}
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;
