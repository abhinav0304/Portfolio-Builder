import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <div className="home">
      <Container>
        <Row className="hero-section">
          <Col md={12} className="text-center">
            <h1>Welcome to Portfolio Builder</h1>
            <p>Your all-in-one platform for transforming your CV into a professional portfolio.</p>
            <Button as={Link} to="/register" variant="primary" size="lg">Get Started</Button>
          </Col>
        </Row>

        {/* Testimonials Section */}
        <Row>
          {[
            { title: 'John Doe', text: 'This platform helped me create a professional portfolio effortlessly.', link: '/testimonials/john' },
            { title: 'Jane Smith', text: 'I was able to customize my portfolio and land a new job!', link: '/testimonials/jane' },
            { title: 'David Lee', text: 'The best platform to showcase your skills and work experience.', link: '/testimonials/david' },
            { title: 'Sara Khan', text: 'Super easy to use, and the final portfolio looks great.', link: '/testimonials/sara' }
          ].map((testimonial, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <Card className="testimonial-card modern-card">
                <Card.Body>
                  <Card.Title>{testimonial.title}</Card.Title> 
                  <Card.Text>"{testimonial.text}"</Card.Text>
                  <Button variant="success" as={Link} to={testimonial.link} className="custom-button">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Benefits Section */}
        <Row className="benefits-section">
          <Col md={12}>
            <h3 className='text-center py-3'>Why use Portfolio Builder?</h3>
            <Row>
              <Col md={4}>
                <div className="benefit-item">
                  <h4>Save Time</h4>
                  <p>Automatically populate your portfolio with key details from your CV.</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="benefit-item">
                  <h4>Professional Design</h4>
                  <p>Get a well-structured portfolio without needing design skills.</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="benefit-item">
                  <h4>Customizable</h4>
                  <p>Review and edit your information to make it truly yours before finalizing.</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
