import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./banner.css";

export const Banner = ({ children }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Swal.fire({
      title: "¿Desea cerrar sesión?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#68902B",
      confirmButtonText: "Sí",
      cancelButtonColor: "#68902B",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        // Eliminar los datos del localStorage al cerrar sesión
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userId");

        navigate("/");
      }
    });
  };

  return (
    <header>
      <div className='button-container'>
        {children}
        <button className='logout' onClick={handleLogout}>
          Cerrar Sesión
        </button>
      </div>
    </header>
  );
};
export default Banner;
