import React from "react";
import "./buttonGreen.css";

const ButtonGreen = ({ buttonText, onClickHandler }) => {
  return (
    <button className='buttonGreen' onClick={onClickHandler}>
      {buttonText}
    </button>
  );
};
export default ButtonGreen;
