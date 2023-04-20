import { useContext, } from "react";
import { CartContext } from "../Contexts/CartContext";
import Checkout from "../Checkout/Checkout";
 
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
                <img className="image" src={producto.image} alt="imagen del producto" width={200} />
                <p>${producto.price}</p>
                <button onClick={() => removeFromCart(producto.id)}>Eliminar</button>
              </div>
          
            </div>
          ))}
          <button onClick={Checkout}>Comprar</button>
          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
}

export default ItemDetail;




