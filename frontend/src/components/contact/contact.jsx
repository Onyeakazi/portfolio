import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import email from "../../assets/icons/email.png";
import location from "../../assets/icons/location.png";
import phone from "../../assets/icons/phone.png";
import "./contact.css";

const Contact = () => {

    const [formData, setFormData] = useState({ 
        name: "",
        email: "",
        text: ""
    });

    const [isSending, setIsSending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    
    // Hanlde Form Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    // Form Handle
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        setSuccess(false);
        setError(false);

        emailjs
            .send("service_f23e09x", "template_kihvf0b", formData, "NfjinPY4KinvRO_Hf")
            .then(
                () => {
                    setIsSending(false);
                    setSuccess(true);
                    setFormData({ name: "", email: "", text: "" });

                    // Show success message
                    Swal.fire({
                        icon: "success",
                        title: "Message Sent!",
                        text: "Your message has been successfully sent. I'll get back to you soon.",
                        confirmButtonText: "OK",
                    });
                },
                () => {
                    setIsSending(false);
                    setError(true);

                    // Show error message
                    Swal.fire({
                        icon: "error",
                        title: "Oops!",
                        text: "Something went wrong. Please try again later.",
                        confirmButtonText: "Retry",
                    });
                }
            )

    }

  return (
    <div className="custom-container">
      <Container className="container">
        <Row className="justify-content-center">
            <Col md={6}>
                <h2 className="contact-title text-center">Get in Touch</h2>
                <p className="contact-description text-center">
                I'd love to hear from you! Whether you have a question or just want to say hi, feel free to reach out.
                </p>
                <div className="contact-info">
                    <div className="infos">
                        <img src={email} alt="E-mail" className="info-icons"/> <h3 className="info-text">chiemenagodswill97@gmail.com</h3>
                    </div>
                    <div className="infos">
                        <img src={location} alt="Location" className="info-icons"/> 
                        <h3 className="info-text"> Owerri, Imo State</h3>
                    </div>
                    <div className="infos">
                        <img src={phone} alt="Phone" className="info-icons"/> 
                        <h3 className="info-text">+234 8104-149-1781</h3>
                    </div>
                </div>

            </Col>
            <Col md={6}>
                {error && <p className="error-message">Something went wrong. Please try again</p>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName" className="mb-3">
                        <Form.Label className="form-label">Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formEmail" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formMessage" className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Hi Godswill," 
                        name="text"
                        value={formData.text}
                        onChange={handleChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="button" disabled={isSending}>
                        {isSending ? "Sending..." : "Send Message"}
                    </Button>
                </Form>
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
