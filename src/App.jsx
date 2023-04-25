import "./App.css";
import db from "../db/firebase-config.js";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemsListContainer";
import ItemList from "./components/ItemList/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import { CartProvider } from "./components/Contexts/CartContext";
import Checkout from "./components/Checkout/Checkout";

function App() {
  const [productos, setProductos] = useState([]);
  const productosCollectionRef = collection(db, "productos");

  const getProductos = async () => {
    const productosCollection = await getDocs(productosCollectionRef);
    setProductos(
      productosCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <CartProvider>
      <div>
        <Navbar />
        <h1>Bienvenides a Mi tienda</h1>
        <Routes>
          <Route path="/" element={<Navigate to="home" />}>
            {" "}
          </Route>
          <Route path="/home" element={<Home />} />
          <Route
            path="/productos"
            element={<ItemListContainer productos={productos} />}
          />
          <Route
            path="/productos/:id"
            element={<ItemDetailContainer productos={productos} />}
          />
          <Route
            path="/category/:category"
            element={<ItemList productos={productos} />}
          />
          <Route
            path="/carrito"
            element={<ItemDetail productos={productos} />}
          />
          <Route path="/checkout" element={<Checkout />} 
          />
           <Route path="/order/confirmation" element={<Checkout />} 
          />
          <Route path="*" element={<h2>404</h2>} 
          />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
