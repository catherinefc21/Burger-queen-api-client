import React from "react";
import "./menu.css";

const Menu = ({ product, children }) => {
  const { name, price, image } = product;
  return (
    <div className='products-menu'>
      <div className='img'>
        <img src={image} alt={name} />
      </div>
      <div className='productName'>
        {name}
        <br /> ${price}
      </div>
      {children}
    </div>
  );
};

export default Menu;
