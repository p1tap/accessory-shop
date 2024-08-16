// components/About.jsx
import React from 'react';
import AppNavbar from './components/Navbar'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  return (
    <>
      <AppNavbar />  {/* Include the Navbar */}
      <Container className="mt-5">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h1>About Us</h1>
            <p>
              Welcome to our About page. We are dedicated to providing the best service 
              and quality products to our customers. Our team is passionate about making 
              your shopping experience enjoyable and hassle-free.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
