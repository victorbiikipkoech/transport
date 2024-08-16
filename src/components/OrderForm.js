// src/OrderForm.js

import React, { useState } from 'react';

function OrderForm({ onOrderSubmit }) {
  const [name, setName] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onOrderSubmit({ name, destination });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Destination:
        <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
      </label>
      <button type="submit">Order Vehicle</button>
    </form>
  );
}

export default OrderForm;
