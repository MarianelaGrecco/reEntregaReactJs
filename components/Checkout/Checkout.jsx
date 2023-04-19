import { useContext, useState } from "react";

import { Button, TextField } from "@mui/material";
import { CartContext } from "../Contexts/CartContext";
import { ShoppingCart } from "@mui/icons-material";

function Checkout() {
  const history = useHistory();
  const { cartItems, clearCart } = useContext(CartContext);
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
      console.log("Productos del carrito:", cartItems);
      clearCart();
      history.push("/order-confirmation");
    }
  };

  return (
    <div className="container">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
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
            <Button
              variant="contained"
              startIcon={<ShoppingCart />}
              onClick={() => history.push("/cart")}
            >
              Volver al carrito
            </Button>{" "}
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
