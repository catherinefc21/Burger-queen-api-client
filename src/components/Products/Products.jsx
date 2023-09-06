import React from "react";
import "./products.css";

const Products = ({ products }) => {
  return (
    <section className='products-admin'>
      {products.map((product) => (
        <div className='info-products' key={product.id}>
          <div className='product-name'>{product.name}</div>
          <button className='btn-edit'>Editar</button>
          <button className='delete-admin'>Borrar</button>
        </div>
      ))}
    </section>
  );
};

export default Products;
