import React from 'react';
import { ReactComponent as UrgentIcon } from './Urgent.svg'; // Replace with your actual icon paths
import { ReactComponent as HighIcon } from './High_Priority.svg';
import { ReactComponent as MediumIcon } from './Medium_Priority.svg';
import { ReactComponent as LowIcon } from './Low_Priority.svg';
import { ReactComponent as NoPriorityIcon } from './No-priority.svg'; 
import './Card.css'; // Assuming you have card-specific styles here

const Card = ({ ticket }) => {
  const { title, description, priority } = ticket;

  // Function to return the correct icon based on the priority
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'Urgent':
        return <UrgentIcon className="priority-icon" />;
      case 'High':
        return <HighIcon className="priority-icon" />;
      case 'Medium':
        return <MediumIcon className="priority-icon" />;
      case 'Low':
        return <LowIcon className="priority-icon" />;
      default:
        return <NoPriorityIcon className="priority-icon" />;
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        {getPriorityIcon(priority)} {/* Render the correct icon */}
        <span>{title}</span>
      </div>
      <div className="card-body">
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <span>Priority: {priority}</span> {/* Display the card priority */}
      </div>
    </div>
  );
};

export default Card;
