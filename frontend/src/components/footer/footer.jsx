import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import facebook from "../../assets/icons/facebook.png";
import linkedin from "../../assets/icons/linkedin.png";
import x from "../../assets/icons/x.png";
import github from "../../assets/icons/github.png";
import insta from "../../assets/icons/insta.png";
import tiktok from "../../assets/icons/tiktok.png";
import "./footer.css";

const Footer = () => {
  return (
    <section id="footer" className="footer-section">
      <Container className="custom-container">
        <div className="footer-container">
            {/* Logo and Description */}
            <div className="footer-about">
                <img src={logo} alt="Logo" className="footer-logo" />
            </div>

            {/* Links Section */}
            <div className="footer-links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
            </div>

            {/* Social Media Section */}
            <div className="footer-social mt-3">
                <h5 className="mb-3">Let's Connect on Social Media</h5>
                <div>
                    <a href="https://www.facebook.com/profile.php?id=100085692487736" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <img src={facebook} alt="Facebook" className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/chiemena-godswill-0175b3250/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <img src={linkedin} alt="LinkedIn" className="icon" />
                    </a>
                    <a href="https://x.com/chiemenaOnye" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <img src={x} alt="X" className="icon" />
                    </a>
                    <a href="https://github.com/Onyeakazi" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <img src={github} alt="GitHub" className="icon" />
                    </a>
                    <a href="https://www.instagram.com/chiemena_godswill/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <img src={insta} alt="Instagram" className="icon" />
                    </a>
                    <a href="https://www.tiktok.com/@berry__godswill" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <img src={tiktok} alt="Tiktok" className="icon" />
                    </a>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-bottom mt-3">
                <p>&copy; {new Date().getFullYear()} OnyiTechs.</p>
            </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
