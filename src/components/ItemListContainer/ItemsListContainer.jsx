import React from 'react'
import Cards from '../Cards/Cards';
import Checkout from '../Checkout/Checkout';


const ItemsListContainer = ({productos}) => {
  return (
    <div className="container_Button">
        {productos.map((producto) => (
         <Cards key={producto.id} producto={producto}/>
      ))} 
    </div>
  )
}

export default ItemsListContainer;