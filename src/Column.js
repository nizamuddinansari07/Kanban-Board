import React from 'react';
import Card from './Card';
import { ReactComponent as UrgentIcon } from './Urgent.svg'; 
import { ReactComponent as HighIcon } from './High_Priority.svg'; 
import { ReactComponent as MediumIcon } from './Medium_Priority.svg'; 
import { ReactComponent as LowIcon } from './Low_Priority.svg'; 
import { ReactComponent as NoPriorityIcon } from './No-priority.svg';

// Mapping priority names to their corresponding icons
const priorityIcons = {
  Urgent: UrgentIcon,
  High: HighIcon,
  Medium: MediumIcon,
  Low: LowIcon,
  'No Priority': NoPriorityIcon,
};

const Column = ({ priority, tickets }) => {
  // Get the corresponding icon for the priority
  const PriorityIcon = priorityIcons[priority] || NoPriorityIcon; // Fallback to NoPriority if not found

  return (
    <div className="column">
      <h2>
        <PriorityIcon style={{ width: '20px', height: '20px', marginRight: '5px' }} />
        {priority} ({tickets.length})
      </h2>
      {tickets.map((ticket) => (
        <Card key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default Column;
