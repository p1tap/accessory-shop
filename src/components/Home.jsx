import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import AppNavbar from './Navbar';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/accessory-shop/routing-app/');
  };

  return (
    <Container className="text-center mt-5">
      <AppNavbar />
      <Button onClick={handleNavigation} variant="primary">
        Navigate Path
      </Button>
    </Container>
  );
};

export default Home;
