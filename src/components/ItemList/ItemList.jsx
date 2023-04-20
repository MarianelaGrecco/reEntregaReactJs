import { useParams } from "react-router-dom";
import Cards from "../Cards/Cards";

const ItemList = ({productos}) => {
   const {category} = useParams();
   const filteredProducts = productos.filter(producto => (
    (producto.category === 'jewelery' ||
    producto.category === "men's clothing" ||
    producto.category === 'electronics') &&
    producto.category === category
  ));

  return (
    <div className="container_Button">
      {filteredProducts.map(producto => (
        <Cards key={producto.id} producto={producto} />
      ))}
    </div>
    );
    };
    export default ItemList;