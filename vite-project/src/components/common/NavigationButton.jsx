import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const NavigationButton = () => {
  const navigate = useNavigate(); // Using useNavigate hook

  const handleNavigation = () => {
    // Navigate to the 'login' route when the button is clicked
    navigate('/login');
  };

  return (
    <div>
      <Button onClick={handleNavigation} />
    </div>
  );
};

export default NavigationButton;