import React from "react";
import { useEffect, useState } from "react";
import Banner from "../../Banner/Banner.jsx";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../../services/apiRequest.js";
import OrdersWaiter from "../../OrdersWaiter/OrdersWaiter.jsx";
import Swal from "sweetalert2";
import "./orders.css";

const Orders = () => {
  const navigate = useNavigate();
  const handleBackNewOrders = () => {
    // Eliminar los datos del localStorage al cerrar sesión
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");

    navigate("/NewOrders");
  };

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    apiRequest("/orders", "GET").then((data) => {
      setOrders(data);
    });
  }, []);
  // Función para cambiar el estado de la orden a 'Entregado'
  const handleOrdersDelivered = async (orderId) => {
    Swal.fire({
      title: "¿Desea marcar el pedido como entregado?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#68902B",
      confirmButtonText: "Sí",
      cancelButtonColor: "#68902B",
      cancelButtonText: "No",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // nuevo array de órdenes actualizadas
          const updatedOrders = orders.map((order) => {
            if (order.id === orderId) {
              return { ...order, status: "Entregado" };
            }
            return order;
          });

          // Actualizar el estado local con las órdenes actualizadas
          setOrders(updatedOrders);

          // Realiza una solicitud PATCH a la API para actualizar el estado de la orden
          await apiRequest(`/orders/${orderId}`, "PATCH", {
            status: "Entregado",
          });

          Swal.fire({
            title: "¡Pedido entregado!",
            icon: "success",
            confirmButtonColor: "#68902B",
            confirmButtonText: "Ok",
          });
        } catch (error) {
          Swal.fire("Hubo un error al actualizar el estado de la orden.");
        }
      }
    });
  };
  return (
    <>
      <Banner>
        <button
          className='back-neworders'
          onClick={handleBackNewOrders}
        ></button>
      </Banner>
      <h2>Pedidos Listos para entregar</h2>
      <main className='orders-ready'>
        {orders
          .filter((order) => order.status === "Listo para entrega")
          .map((order) => (
            <OrdersWaiter
              key={order.id}
              order={order}
              handleOrderReady={handleOrdersDelivered}
            />
          ))}
      </main>
    </>
  );
};
export default Orders;
