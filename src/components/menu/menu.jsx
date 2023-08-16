import React from "react";
import "./menu.css";
import "../buttonAdd/buttonAdd";
import ButtonAdd from "../buttonAdd/buttonAdd";

const Menu = ({ product }) => {
  const { name, price, image } = product;

  return (
    <div className='products'>
      <div className='img'>
        <img src={image} alt={name} />
      </div>
      <div className='productName'>
        {name}
        <br /> ${price}
      </div>
      <ButtonAdd buttonText='Agregar' />
    </div>
  );
};

export default Menu;
