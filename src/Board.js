import React from 'react';
import Column from './Column';

// Define a mapping for priority numbers to names
const priorityMapping = {
  4: 'Urgent',
  3: 'High',
  2: 'Medium',
  1: 'Low',
  0: 'No Priority',
};

const Board = ({ tickets, grouping }) => {
  // Group tickets by the selected criteria (status, user, priority)
  const groupedTickets = groupTickets(tickets, grouping);

  return (
    <div className="board">
      {Object.keys(groupedTickets).map((groupKey) => {
        const ticketsInGroup = groupedTickets[groupKey];
        const priority = ticketsInGroup[0]?.priority || 0; // Use the priority from the first ticket in the group
        return (
          <Column
            key={groupKey}
            priority={priorityMapping[priority]} // Use the mapped name
            tickets={ticketsInGroup}
          />
        );
      })}
    </div>
  );
};

// Helper function to group tickets
const groupTickets = (tickets, grouping) => {
  if (!Array.isArray(tickets)) {
    console.error('Expected tickets to be an array, but got:', tickets);
    return {}; // Return an empty object if tickets is not an array
  }

  return tickets.reduce((groups, ticket) => {
    const group = ticket[grouping] || 'Ungrouped'; // Use the grouping attribute
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(ticket);
    return groups;
  }, {});
};

export default Board;
