import { Button } from "@mui/material";
import {  useParams } from "react-router-dom";
import { useContext } from "react";
import {CartContext} from "../Contexts/CartContext";
import ItemQuantitySelector from "../ItemQuantitySelector/ItemQuantitySelector";


 const ItemDetailContainer = ({productos}) => {
    const { addToCart } = useContext(CartContext);
    const {id} = useParams();
    const producto = productos.find((producto) => producto.id == id);
    const handleAddToCart = (item) => {
        addToCart(item);
      };
    
      const handleQuantityChange = (cantidad) => {
         const updatedItem = { ...producto, quantity: cantidad };
    addToCart(updatedItem);
      };

      return (
        <div className="container">
          <h3>{producto.title}</h3>
          <img className="image" src={producto.image} alt="imagen del producto" width={200} />
          <p>{producto.description}</p>
          <p>$ {producto.price}</p>
          <p>Rating: {producto.rating.rate}</p>
          <ItemQuantitySelector onQuantityChange={handleQuantityChange} initialQuantity = {1} stock = {5} />
        </div>
      );
    };
   
    
    export default ItemDetailContainer;