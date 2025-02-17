import React, { useState, useEffect } from 'react';
import { Card, Row, Col, ListGroup } from 'react-bootstrap';
import './projects.css'

function Projects() {
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
        <div className='section'>
            <h1 className='title'>My Latest Projects</h1>
            <p className='sub mb-5'>Driving Innovation Through Advanced Tech Development and Design.</p>

            <Row>
                {projects.map((project, index) => (
                    <Col key={project._id} xs={12} sm={12} md={6} lg={6}>
                        <Card className="project-card mb-4">
                        <Card.Img variant="top" src={`${import.meta.env.VITE_REACT_APP_BACKEND_URL}${project.image}`} alt={project.title}/>
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>{project.description}</Card.Text>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link1">
                                <i class="fa-brands fa-github"></i>
                            </a>
                            <a href={project.project} target="_blank" rel="noopener noreferrer" className="project-link1">
                                <i class="fa-solid fa-link"></i>
                            </a>
                            <ListGroup horizontal className="list-group">
                                {project.stack.map((stack, idx) => (
                                    <ListGroup.Item key={idx} className="list-item">{stack}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                        </Card>
                    </Col>
                ))}

                
            </Row>
        </div>
    );
}

export default Projects;
