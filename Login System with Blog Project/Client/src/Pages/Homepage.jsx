import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../Styles/HomePage.css';

const Homepage = () => {
  return (
    <div className="homepage-section">
      <Container>
        <Row className="align-items-center">
          <Col md={7} className="text-section">
            <h1>Welcome to Blogify</h1>
            <p>
              Your personalized space to write, share, and discover insightful blogs. Join our growing community of thinkers and storytellers.
            </p>
            <div className="homepage-buttons">
              <Button variant="warning" className="me-3" href="/signup">
                Get Started
              </Button>
              <Button variant="outline-light" href="/blogs">
                Explore Blogs
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Homepage
