import React, { useState, useEffect } from "react";

function ItemQuantitySelector({ onQuantityChange, onAddToCart, item, initialQuantity }) {
  const [cantidad, setCantidad] = useState(initialQuantity || 1);

  useEffect(() => {
    if (initialQuantity) {
      setCantidad(initialQuantity);
    }
  }, [initialQuantity]);

  const handleCantidadChange = (newCantidad) => {
    if (!isNaN(newCantidad) && newCantidad >= 1) {
      setCantidad(newCantidad);
      onQuantityChange(newCantidad);
    }
  };

  const handleAddToCartClick = () => {
    onAddToCart({ ...item, quantity: cantidad });
  };

  const handleRestaClick = () => {
    const newCantidad = cantidad - 1;
    handleCantidadChange(newCantidad);
  }

  const handleSumaClick = () => {
    const newCantidad = cantidad + 1;
    handleCantidadChange(newCantidad);
  }

  return (
    <div>
      <button onClick={handleRestaClick}>-</button>
      <input type="number" min="1" value={cantidad} onChange={(e) => handleCantidadChange(parseInt(e.target.value))} />
      <button onClick={handleSumaClick}>+</button>
      <button onClick={handleAddToCartClick}>Agregar al carrito</button>
    </div>
  );
}

export default ItemQuantitySelector;









