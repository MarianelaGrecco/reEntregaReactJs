import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Cards.css";

const Cards = ({producto}) => {
    return (
        <div className= "container">
            <h4>{producto.title}</h4>
            <img className= "image" src={producto.image} alt="imagen del producto" width={200}/>
            <p>${producto.price}</p>
            <Link to={`/productos/${producto.id}`}>
            <Button variant="outlined"> Ver Producto </Button>
            </Link>
        </div>
    );
} ;

export default Cards;