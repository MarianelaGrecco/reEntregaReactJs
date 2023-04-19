import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "./cartwidget.css";
import { CartContext } from "../Contexts/CartContext";
import ItemQuantitySelector from "../ItemQuantitySelector/ItemQuantitySelector";

const CartWidget = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  
  const addItemToCart = (item) => {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex === -1) {
      // Si el item no existe en el carrito
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    } else {
      // Si el item ya existe en el carrito
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity++;
      setCartItems(updatedCartItems);
    }
  };

  // Cantidad total de productos en el carrito
  const totalItems = cartItems.reduce(
    (total, item) => total + parseInt(item.quantity),
    0
  );

  const handleItemQuantityChange = (itemId, quantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    addItemToCart(updatedCartItems.find((item) => item.id === itemId));

  };
  
  return (
    <div className="cart-widget">
      <Link to="/carrito">
        <AiOutlineShoppingCart className="cart-icon" />
        <span className="cart-notificacion">{totalItems.toString()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;










