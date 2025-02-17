import React, { useState, useEffect } from "react";
import { Card, Row, Col, Container, ListGroup } from "react-bootstrap";
import { motion } from "framer-motion"; 
import { Link } from "react-router-dom";
import "./projectCard.css";

const ProjectsCard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/projects`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProjects(data.projects); 
        } else {
          console.error("Error fetching projects:", data.error);
        }
      })
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <section className="projects-section" style={{ marginTop: "-10px" }}>
      <Container className="custom-container">
        <h2 className="section-title text-center mb-5">Recent Projects</h2>
        <Row>
          {projects.slice(0, 4).map((project, index) => {
            const isEven = index % 2 === 0;

            // Animation variants for left and right slide-in
            const cardVariants = {
              hidden: { opacity: 0, x: isEven ? -100 : 100 },
              visible: { 
                opacity: 1, 
                x: 0, 
                transition: { duration: 0.8, ease: "easeOut", delay: index * 0.2 } 
              },
              hover: { scale: 1.05, transition: { duration: 0.3 } }, 
            };

            return (
              <Col key={project._id} xs={12} sm={12} md={6} lg={6}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <Card className="project-card mb-4">
                    <Card.Img variant="top" src={`${import.meta.env.VITE_REACT_APP_BACKEND_URL}${project.image}`}  alt={project.title} />
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text>{project.description}</Card.Text>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                        <i className="fa-brands fa-github"></i>
                      </a>
                      <a href={project.project} target="_blank" rel="noopener noreferrer" className="project-link">
                        <i className="fa-solid fa-link"></i>
                      </a>
                      <ListGroup horizontal className="list-group">
                        {project.stack.map((stack, idx) => (
                          <ListGroup.Item key={idx} className="list-item">{stack}</ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            );
          })}
        </Row>
        <motion.div>
          <Link to="/projects">
            <motion.button className="project-btn" whileHover={{ scale: 1.1 }}>
              See All Projects
            </motion.button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default ProjectsCard;
