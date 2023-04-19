import { BiStoreAlt } from "react-icons/bi";
import { Button } from "@mui/material";
import "./navbar.css";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/Cartwidget.jsx";

const Navbar = () => {
  return (
    <nav
      className=".logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    } container_Navbar"
    >
      <BiStoreAlt className="store-icon" />
      <p>MI TIENDA</p>

      <Link to="/">
        <Button variant="outlined">Inicio</Button>
      </Link>

      <Link to= "/category/jewelery">
        <Button variant="outlined"> Joyería </Button>
      </Link>

      <Link to= "/category/men's clothing">
        <Button variant="outlined"> Ropa </Button>
      </Link>

      <Link to="/category/electronics">
        <Button variant="outlined"> Electrónica </Button>
      </Link>

      <Link to="/productos">
        <Button variant="outlined">Todos los productos</Button>
      </Link>

      <CartWidget />
    </nav>
  );
};
export default Navbar;
