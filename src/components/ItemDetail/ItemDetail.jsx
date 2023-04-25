import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import Checkout from "../Checkout/Checkout";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function ItemDetail() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito de compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <>
          {cart.map((producto, index) => (
            <div key={index}>
              <div className="container">
                <h4>{producto.title}</h4>
                <img
                  className="image"
                  src={producto.image}
                  alt="imagen del producto"
                  width={200}
                />
                <p>${producto.price}</p>

                <Button
                  variant="outlined"
                  onClick={() => removeFromCart(producto.id)}
                >
                  Eliminar
                </Button>
              </div>
            </div>
          ))}

          <Link to="/checkout">
            <Button variant="outlined">Comprar</Button>
          </Link>
          <Button variant="outlined" onClick={clearCart}>
            Vaciar carrito
          </Button>
        </>
      )}
    </div>
  );
}

export default ItemDetail;
