import React from "react";
import "./ordersWaiter.css";
import Swal from "sweetalert2";

const OrderWaiters = ({ order, handleOrderReady }) => {
  // funcion para mostrar detalle de producto
  const handleOrderDetails = () => {
    const productListHTML = order.products
      .map((productItem, index) => {
        return `<li key=${index}>
                  ${productItem.product.name} x ${productItem.qty}
                </li>`;
      })
      .join("");
    Swal.fire({
      title: "Detalles del Pedido",
      html: `<span class='text-swal2'>${productListHTML}</span>`,
      confirmButtonText: "Ok",
      confirmButtonColor: "#68902B",
    });
  };

  return (
    <section className='container-list' key={order.id}>
      <div className='infoClient'>
        <img src='../../img/client.png' alt='Usuario' />
        {order.client}
      </div>
      <div className='infoClient'>Mesa n°{order.table}</div>
      <button className='btn' onClick={handleOrderDetails}>
        Ver detalles
      </button>
      <button
        className='btnGreen'
        onClick={() => handleOrderReady(order.id)}
      ></button>
    </section>
  );
};

export default OrderWaiters;
