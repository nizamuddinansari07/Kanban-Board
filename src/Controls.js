import React, { useState } from 'react';
import { ReactComponent as DisplayIcon } from './Display.svg'; // Adjust the path based on where the SVG file is located
import { ReactComponent as DisplayIcon1 } from './down.svg'; // Adjust the path based on where the SVG file is located
import './Controls.css';    

const Controls = ({ grouping, setGrouping, sorting, setSorting }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="controls">
      <div className="dropdown">
        <button onClick={toggleDropdown} className="dropdown-toggle">
          <DisplayIcon className="display-icon" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
          Display
          <DisplayIcon1 className="display-icon1" style={{ width: '20px', height: '20px' }} />
        </button>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <label>
              Grouping    
              <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </label>

            <label>
              Ordering    
              <select value={sorting} onChange={(e) => setSorting(e.target.value)}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default Controls;
