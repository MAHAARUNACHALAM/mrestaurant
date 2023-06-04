import React, { useState } from 'react';
import './Reservation.css';

const Reservation = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numPersons, setNumPersons] = useState('');

  const handleReservation = (e) => {
    e.preventDefault();

    // Perform reservation logic here
    // You can use the date, time, and numPersons state values

    // Clear the form fields
    setDate('');
    setTime('');
    setNumPersons('');
  };

  return (
    <div className="reservation-page">
      <h2>Reserve a Table</h2>
      <form onSubmit={handleReservation}>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Number of Persons:</label>
          <input
            type="number"
            value={numPersons}
            onChange={(e) => setNumPersons(e.target.value)}
          />
        </div>
        <button type="submit">Reserve Now</button>
      </form>
    </div>
  );
};

export default Reservation;
