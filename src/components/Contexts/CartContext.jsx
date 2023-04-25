import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const index = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index === -1) {
      setCart([...cart, { ...item }]);
    } else {
      const newProducts = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          const newProduct = {
            ...cartItem,
            quantity: cartItem.quantity + item.quantity,
          };
          return newProduct;
        } else {
          return prod;
        }
      });
      setCart(newProducts);
    }
  };

  const removeFromCart = (itemId) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== itemId);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    return cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
      0
    );
  };

  const handleCheckout = (order) => {
    db.collection("orders")
      .add(order)
      .then((docRef) => {
        console.log("Order submitted with ID: ", docRef.id);
        setCart([]);
      })
      .catch((error) => {
        console.error("Error adding order: ", error);
      });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalItems,
        getTotalPrice,
        handleCheckout,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
