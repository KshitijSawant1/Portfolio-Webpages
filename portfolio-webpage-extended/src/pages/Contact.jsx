import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1>Contact Me</h1>
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <span>Email: </span>
          <a href="mailto:sawantkshitij1@gmail.com">sawantkshitij1@gmail.com</a>
        </div>
        <div className="contact-item">
          <FaLinkedin className="icon" />
          <span>LinkedIn: </span>
          <a href="https://www.linkedin.com/in/kshitijksawant/">My Profile</a>
        </div>
        <div className="contact-item">
          <FaGithub className="icon" />
          <span>GitHub: </span>
          <a href="https://github.com/KshitijSawant1">View My Projects</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
