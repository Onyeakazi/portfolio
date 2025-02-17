import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import hero from "../../assets/images/hero.png";
import linkedin from "../../assets/icons/linkedin.png";
import x from "../../assets/icons/x.png";
import github from "../../assets/icons/github.png";
import "./hero.css";

const HeroSection = () => {
  return (
    <section className="hero-section d-flex align-items-center">
      <Container>
        <Row className="text-center">
            <Col>
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.8 }}
                >
                    <Button className="me-3 dot-button">
                        <span className="dot"></span>Available For Work
                    </Button>
                </motion.div>
                <motion.h1 
                    className="hero-title"
                    initial={{ opacity: 0, y: -50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1 }}
                >
                    Hi, I’m Chiemena Godswill <span className="break-line">.O</span> <br /> 
                    I Code <span className="star">*</span> Create <br /> 
                    <span className="star">*</span> Innovate.
                </motion.h1>
                <motion.p 
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Delivering innovative solutions through full-cycle <br /> 
                    development expertise and exceptional user <br /> 
                    interface design.
                </motion.p>

                <motion.div 
                    className="hero-cta mt-4"
                    initial={{ opacity: 0, scale: 0.8 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.5, delay: 0.5 }}
                    >
                    <a href="https://wa.me/+2348104149178">
                        <motion.button 
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }}
                            className="chat1"
                        >
                        Let's Chat
                        </motion.button>
                    </a>

                    <Link to="/projects">
                        <motion.button 
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }}
                            className="chat-btn1"
                        >
                        Browse Works
                        </motion.button>
                    </Link>
                </motion.div>
            </Col>
            <Col>
                <div className="hero-img">
                        <img src={hero} alt="Hero" />
                </div>
                <div className="hero-icons d d-flex align-items-center">
                    <a href="https://www.linkedin.com/in/chiemena-godswill-0175b3250/" target="_blank" rel="noopener noreferrer" className="social-link">
                        <img src={linkedin} alt="LinkedIn" className="icon" />
                    </a>
                    <a href="https://x.com/chiemenaOnye" target="_blank" rel="noopener noreferrer" className="social-link">
                        <img src={x} alt="X" className="icon" />
                    </a>
                    <a href="https://github.com/Onyeakazi" target="_blank" rel="noopener noreferrer" className="social-link">
                        <img src={github} alt="GitHub" className="icon" />
                    </a>
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
