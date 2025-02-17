import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import linkedin from "../../assets/icons/linkedin.png";
import x from "../../assets/icons/x.png";
import github from "../../assets/icons/github.png";
import './navbar.css'; 

const NavigationBar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Handle toggle button click
    const handleToggle = () => {
        setIsNavCollapsed(!isNavCollapsed);
    };

    // / Scroll detection logic
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                // Scrolling down - hide navbar
                setShowNavbar(false);
            } else {
                // Scrolling up - show navbar
                setShowNavbar(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <Navbar className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}             
        expand="lg"
        fixed="top">
            <Container>
                <Navbar.Brand href="/">
                    <img className="logo" src={logo} alt="Logo" />
                </Navbar.Brand>
                {isNavCollapsed && (
                    <Navbar.Brand className="name">Chiemena Godswill</Navbar.Brand>
                )}
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                    </Nav>
                    <div className="social-icons d-flex align-items-center">
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
                    <div className='btn-m'>
                        <a href="https://docs.google.com/document/d/1Pi4PdPZtT31uPE3FwldfXmnt7X_csJGQJgNQcIcvBM8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <Button variant="primary" className="ms-3 navbar-btn">View Resume</Button>
                        </a>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
