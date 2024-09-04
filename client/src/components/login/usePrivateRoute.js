// usePrivateRoute.js
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const usePrivateRoute = (isAuthenticated) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated;
};

export default usePrivateRoute;
