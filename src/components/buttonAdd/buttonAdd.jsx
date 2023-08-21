import React from "react";
import "./buttonAdd.css";

const ButtonAdd = ({ buttonText, functionButton, product }) => {
  return (
    <button className='buttonAdd' onClick={() => functionButton(product)}>
      {buttonText}
    </button>
  );
};

export default ButtonAdd;
