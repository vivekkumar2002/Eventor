import React from 'react';
import usePrivateRoute from '../login/usePrivateRoute'; // Adjust the path as needed
import ButtonAppBar from './component/AppBar';

const WelcomePage = ({ isAuthenticated }) => {
  // Use the usePrivateRoute hook to secure the route
  usePrivateRoute(isAuthenticated);

  return (
    <React.Fragment>
    <ButtonAppBar />
    </React.Fragment>
  );
};

export default WelcomePage;
