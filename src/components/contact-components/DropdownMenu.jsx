import React from 'react';

const DropdownMenu = () => {

  return (
    <select className="form-input" id='dropdownMenu'>
      <option value="placeholder">Select a specialist</option>
      <option value="option1">Johnny Cash</option>
      <option value="option2">50 Cent</option>
      <option value="option3">Elizabeth Banks</option>
      <option value="option4">TY Dolla $ign</option>
    </select>
    
  );
};

export default DropdownMenu;
