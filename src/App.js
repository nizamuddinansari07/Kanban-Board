// App.js
import React, { useState, useEffect } from 'react';
import Board from './Board';
import Controls from './Controls';
import './App.css'; // For pure CSS styling

function App() {
  const [tickets, setTickets] = useState([]); // Ensure it's initialized as an empty array

  const [grouping, setGrouping] = useState('status');
  const [sorting, setSorting] = useState('priority');

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Check if the data has a 'tickets' property
    setTickets(data.tickets || []); // Adjust based on the structure of the response
  })
  .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  return (
    <div className="app">
      
      <Controls
        grouping={grouping}
        setGrouping={setGrouping}
        sorting={sorting}
        setSorting={setSorting}
      />
      <Board tickets={tickets} grouping={grouping} sorting={sorting} />
    </div>
  );
}

export default App;
