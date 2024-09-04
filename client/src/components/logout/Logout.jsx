import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions (clear token, reset local data, etc.)
    localStorage.removeItem('authToken');
    // Add more actions as needed...

    // Navigate to the login page
    navigate('/login', { replace: true });

  };

  return (
    <button onClick={handleLogout}>Log Out</button>
  );
};

export default Logout;
