import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import hero from "../../assets/images/hero.png";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";  
import js from "../../assets/images/js.png";  
import react from "../../assets/images/react.png";
import nodejs from "../../assets/images/nodejs.png";
import bootstrap from "../../assets/images/bootstrap.png";
import laravel from "../../assets/images/laravel.png";
import mongodb from "../../assets/images/mongodb.png";
import php from "../../assets/images/php.png";
import tailand from "../../assets/images/tailand.png";
import ts from "../../assets/images/ts.png";
import vite from "../../assets/images/vite.png";

import "./about.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container className="custom-container">
        {/* Header */}
        <h2 className="text-center about-title">About Me</h2>

        {/* Main Layout */}
        <Row className="align-items-start">
          {/* Left Section: Timeline */}
          <Col lg={4} md={12}>
            <div className="timeline">
              <Card className="timeline-card">
                <Card.Body className="card-b">
                    <p className="timeline-d">2024-Present</p>
                    <div className="timeline-o">
                        <h5>Gtech Solutions</h5>
                        <p>Web Dev Instructor</p>
                    </div>
                </Card.Body>
              </Card>
              <Card className="timeline-card">
                <Card.Body className="card-b">
                    <p className="timeline-d">2024-Present</p>
                    <div className="timeline-o">
                        <h5>Demop Studios</h5>
                        <p>Full Stack Developer</p>
                    </div>
                </Card.Body>
              </Card>
              <Card className="timeline-card">
                <Card.Body className="card-b">
                    <p className="timeline-d">2022-2023</p>
                    <div className="timeline-o">
                        <h5>Atutechs Corp</h5>
                        <p>Web development Intern</p>
                    </div>
                </Card.Body>
              </Card>
              <Card className="timeline-card">
                <Card.Body className="card-b">
                    <p className="timeline-d">2022-Present</p>
                    <div className="timeline-o">
                        <h5>Computer Science</h5>
                        <p>Federal Polytechnic Nekede Owerri, Imo State</p>
                    </div>
                </Card.Body>
              </Card>
            </div>
          </Col>

          {/* Center Section: Logo */}
          <Col lg={4} md={12} className="text-center">
            <div className="center-logo">
              <img
                src={logo}
                alt="Logo"
                className="center-icon"
              />
            </div>
          </Col>

          {/* Right Section: Profile Card */}
          <Col lg={4} md={12}>
            <Card className="profile-card">
                <Card.Body>
                    <div className="profile-header">
                        <img
                            src={hero}
                            alt="Chiemena Godswill"
                            className="profile-image"
                        />
                    </div>
                    <h5 className="pro-name">Chiemena Godswill</h5>
                    <p className="pro-d">
                        Experienced full stack developer skilled in crafting web
                        applications that combine sleek front-end design with robust
                        back-end functionality.
                    </p>
                </Card.Body>
            </Card>
          </Col>
        </Row>

       {/* Bottom Section: My Stack */}
        <div className="my-stack">
            <h3 className="text-center mb-2 mt-2">My Stack</h3>

            <div className="top mb-4">
                <div className="logos">
                    <div className="logo-slide">
                        <img src={html} alt="Html" className="stack-icon" />
                        <img src={css} alt="Css" className="stack-icon" />
                        <img src={js} alt="JavaScript" className="stack-icon" />
                        <img src={react} alt="React" className="stack-icon" />
                        <img src={nodejs} alt="Node.js" className="stack-icon" />
                        <img src={bootstrap} alt="Bootstrap" className="stack-icon" />
                    </div>
                    <div className="logo-slide">
                        <img src={html} alt="Html" className="stack-icon" />
                        <img src={css} alt="Css" className="stack-icon" />
                        <img src={js} alt="JavaScript" className="stack-icon" />
                        <img src={react} alt="React" className="stack-icon" />
                        <img src={nodejs} alt="Node.js" className="stack-icon" />
                        <img src={bootstrap} alt="Bootstrap" className="stack-icon" />
                    </div>
                </div>
            </div>

            <div className="bottom">
                <div className="logos2">
                    <div className="logo-slide2">
                        <img src={laravel} alt="Laravel" className="stack-icon" />
                        <img src={mongodb} alt="mongodb" className="stack-icon" />
                        <img src={php} alt="Php" className="stack-icon" />
                        <img src={tailand} alt="tailand" className="stack-icon" />
                        <img src={ts} alt="Typescript" className="stack-icon" />
                        <img src={vite} alt="vite" className="stack-icon" />
                    </div>
                    <div className="logo-slide2">
                        <img src={laravel} alt="Laravel" className="stack-icon" />
                        <img src={mongodb} alt="mongodb" className="stack-icon" />
                        <img src={php} alt="Php" className="stack-icon" />
                        <img src={tailand} alt="tailand" className="stack-icon" />
                        <img src={ts} alt="Typescript" className="stack-icon" />
                        <img src={vite} alt="vite" className="stack-icon" />
                    </div>
                </div>
            </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
