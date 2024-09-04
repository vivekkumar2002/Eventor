import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Drawer = ({ setSelectedOption }) => {
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <List>
      <ListItemButton onClick={() => handleOptionClick('Orders')}>
        <ListItemText primary="Orders" />
      </ListItemButton>
      <ListItemButton onClick={() => handleOptionClick('Users')}>
        <ListItemText primary="Users" />
      </ListItemButton>
      <ListItemButton onClick={() => handleOptionClick('Add Venue')}>
        <ListItemText primary="Add Venue" />
      </ListItemButton>
      <ListItemButton onClick={() => handleOptionClick('Update Venue')}>
        <ListItemText primary="Update Venue" />
      </ListItemButton>
    </List>
  );
};

export default Drawer;
