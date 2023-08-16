import React from "react";
import PropTypes from "prop-types";
import "./inputClient.css";

const InputClient = ({ type, name, id, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      className='inputClient'
      id={id}
      placeholder={placeholder}
    />
  );
};

InputClient.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputClient;
