import React from "react";
import { useState, useEffect } from "react";
import Banner from "../../Banner/Banner";
import Users from "../../users/users";
import Products from "../../Products/Products";
import apiRequest from "../../../services/apiRequest.js";
import "./Admin.css";
import ButtonGreen from "../../Button/buttonGreen";

const Admin = () => {
  const [adminUsers, setAdminUsers] = useState([]);
  const [adminProducts, setAdminProducts] = useState([]);
  const [showUsers, setShowUsers] = useState(true); // Estado para mostrar Trabajadores por defecto

  useEffect(() => {
    apiRequest("/users", "GET").then((data) => {
      setAdminUsers(data);
    });
  }, []);

  useEffect(() => {
    apiRequest("/products", "GET").then((data) => {
      setAdminProducts(data);
    });
  }, []);

  const handleButtonClick = (contentType) => {
    if (contentType === "Trabajadores") {
      setShowUsers(true);
    } else if (contentType === "Productos") {
      setShowUsers(false);
    }
  };

  return (
    <main>
      <Banner />
      <div className='buttons-Admin'>
        <ButtonGreen
          buttonText='Trabajadores'
          isActive={showUsers}
          onClickHandler={() => handleButtonClick("Trabajadores")}
        />
        <ButtonGreen
          buttonText='Productos'
          isActive={!showUsers}
          onClickHandler={() => handleButtonClick("Productos")}
        />
      </div>
      <section className='content-admin'>
        {showUsers ? (
          <div className='container-admin'>
            <div className='title'>
              <h2>RESUMEN DE TRABAJADORES</h2>
              <button className='btn-add'>Agregar</button>
            </div>
            <div className='line2'></div>
            <Users users={adminUsers} />
          </div>
        ) : (
          <div className='container-admin'>
            <div className='title'>
              <h2>RESUMEN DE PRODUCTOS</h2>
              <button className='btn-add'>Agregar</button>
            </div>
            <div className='line2'></div>
            <Products products={adminProducts} />
          </div>
        )}
      </section>
    </main>
  );
};

export default Admin;
