import { useContext, useState } from "react";
import { Button, TextField } from "@mui/material";
import { CartContext } from "../Contexts/CartContext";
import { ShoppingCart } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';


function Checkout() {
  const navigate = useNavigate();
<<<<<<< HEAD
  const { cart, clearCart } = useContext(CartContext);
=======
  const { cartItems, clearCart } = useContext(CartContext);
>>>>>>> b833765eae0d010f1484fae7e83f2a4703295bd0
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [formError, setFormError] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (formData.name.trim() === "") {
      errors.name = "El nombre es requerido";
    }
    if (formData.email.trim() === "") {
      errors.email = "El correo electrónico es requerido";
    }
    if (formData.phone.trim() === "") {
      errors.phone = "El teléfono es requerido";
    }
    setFormError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Aquí se enviaría la orden de compra a la API o servidor
      console.log("Datos del formulario:", formData);
<<<<<<< HEAD
      console.log("Productos del carrito:", cart);
      clearCart();
      navigate("/order/confirmation");
=======
      console.log("Productos del carrito:", cartItems);
      clearCart();
      navigate.push("/order-confirmation");
>>>>>>> b833765eae0d010f1484fae7e83f2a4703295bd0
    }
  };

  return (
    <div className="container">
<<<<<<< HEAD
      <h2>Compra realizada</h2>
      {cart.length === 0 ? (
        <p></p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
=======
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
>>>>>>> b833765eae0d010f1484fae7e83f2a4703295bd0
              <li key={item.id}>
                {item.title} x {item.quantity}
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nombre"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              error={formError.name}
              helperText={formError.name}
            />
            <br />
            <TextField
              label="Correo electrónico"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              error={formError.email}
              helperText={formError.email}
            />
            <br />
            <TextField
              label="Teléfono"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              error={formError.phone}
              helperText={formError.phone}
            />
            <br />
<<<<<<< HEAD
           
=======
            <Button
              variant="contained"
              startIcon={<ShoppingCart />}
              onClick={() => navigate.push("/cart")}
            >
              Volver al carrito
            </Button>{" "}
>>>>>>> b833765eae0d010f1484fae7e83f2a4703295bd0
            <Button type="submit" variant="contained">
              Confirmar compra
            </Button>
          </form>
        </>
      )}
    </div>
  );
}

export default Checkout;
