import React, { useState } from "react";

function ItemQuantitySelector({ onQuantityChange, initialQuantity = 1, stock = 5 }) {
  const [cantidad, setCantidad] = useState(initialQuantity);

  const handleRestaClick = () => {
    if(cantidad>1){
      setCantidad(cantidad-1)
    }
  }

  const handleSumaClick = () => {
    if(cantidad<stock){
    setCantidad(cantidad+1)}
  }

  return (
    <div>
      <button onClick={handleRestaClick}>-</button> 
      <p>{cantidad}</p>
      <button onClick={handleSumaClick}>+</button>
      <br />
      <button onClick={()=>onQuantityChange(cantidad)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemQuantitySelector;










