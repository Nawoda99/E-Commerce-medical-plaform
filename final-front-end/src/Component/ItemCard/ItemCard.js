import React, { useState, useEffect } from 'react';

const ItemCard = (itemId) => {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

    useState(async () => {    
        try {
            const response = await fetch(`API_URL/items/${itemId}`);
            const data = await response.json();
            setItemName(data.name);
            setItemQuantity(data.quantity);
        } catch (error) {
            console.error('Error fetching item details:', error);
        }
    }, [itemId]);

    const headerStyle = {
        color: 'red',
        fontSize: '20px',
    };

  return (
    <div>
      <h2 style={headerStyle}>Item Card</h2>
      <p>Item Name: {itemName}</p>
      <p>Item Quantity: {itemQuantity}</p>
    </div>
  );
};

export default ItemCard;
