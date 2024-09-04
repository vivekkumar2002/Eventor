// client/src/components/Vendor/VendorList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VendorList = ({ onVendorSelect }) => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/vendors')
      .then(response => setVendors(response.data))
      .catch(error => console.error('Error fetching vendors', error));
  }, []);

  return (
    <div>
      <h1>Vendor Directory</h1>
      <ul>
        {vendors.map(vendor => (
          <li key={vendor.id} onClick={() => onVendorSelect(vendor)}>
            {vendor.name} - {vendor.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VendorList;
