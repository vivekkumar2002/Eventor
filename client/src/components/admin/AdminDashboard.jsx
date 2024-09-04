import React from 'react';
import Drawer from './Drawer'; // Import your Drawer component
import AdminOrders from './AdminOrders';

const AdminDashboard = () => {
  const [selectedOption, setSelectedOption] = React.useState('');

  const renderComponent = () => {
    switch (selectedOption) {
      case 'Orders':
        return <AdminOrders />;
      // case 'Users':
      //   return <Users />;
      // case 'Add Venue':
      //   return <AddVenue />;
      // case 'Update Venue':
      //   return <UpdateVenue />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Drawer setSelectedOption={setSelectedOption} />
      <div>{renderComponent()}</div>
    </div>
  );
};

export default AdminDashboard;
