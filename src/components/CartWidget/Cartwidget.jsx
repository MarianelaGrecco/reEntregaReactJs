import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "./cartwidget.css";
import { CartContext } from "../Contexts/CartContext"; 

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
 
  
  return (
    <div className="cart-widget">
      <Link to="/carrito">
        <AiOutlineShoppingCart className="cart-icon" />
        <span className="cart-notificacion">{getTotalItems()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;










