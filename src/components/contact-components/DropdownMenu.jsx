import React from 'react';

const DropdownMenu = ({name, value, onChange}) => {

  return (
    <select className="form-input specialist" id='dropdownMenu' name={name} value={value} onChange={onChange}>
      <option value="">Select a specialist</option> 
      <option value="1">Johnny Cash</option>
      <option value="2">50 Cent</option>
      <option value="3">Elizabeth Banks</option>
      <option value="4">TY Dolla $ign</option>
    </select>
    
  );
};

export default DropdownMenu;
