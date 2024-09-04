// client/src/components/Vendor/VendorDetails.js
import React from 'react';

const VendorDesc = ({ selectedVendor, onBookVendor }) => {
  return (
    <div>
      <h2>{selectedVendor.name}</h2>
      <p>Category: {selectedVendor.category}</p>
      <button onClick={() => onBookVendor(selectedVendor)}>Book Now</button>
    </div>
  );
};

export default VendorDesc;
