import { useContext, useState } from "react";
import Cards from "../Cards/Cards";
import {CartContext} from "../Contexts/CartContext";
import ItemQuantitySelector from "../ItemQuantitySelector/ItemQuantitySelector";

function ItemDetail() {
  const { cartItems, addToCart, removeFromCart, clearCart  } = useContext(CartContext);

  const [productQuantity, setProductQuantity] = useState(0);

  const handleAddToCart = (producto) => {
    addToCart(producto);
    setProductQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleRemoveFromCart = (producto) => {
    removeFromCart(producto);
    setProductQuantity((prevQuantity) => prevQuantity - 1);
  };

  return (
    <div>
      <h2>Carrito de compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <>
          {cartItems.map((producto, index) => (
            <div key ={index}>
              <Cards producto={producto}>
              </Cards>
              <span className="cart-notificacion">
              <ItemQuantitySelector
                productQuantity={productQuantity}
                onAddToCart={() => handleAddToCart(producto)}
                onRemoveFromCart={() => handleRemoveFromCart(producto)}
              />
</span>
              <button onClick={() => removeFromCart(producto)}>Eliminar</button>
            </div>
          ))}
          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
}

export default ItemDetail;


