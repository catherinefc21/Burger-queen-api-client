import React from "react";
import Banner from "../../Banner/Banner.jsx";
import { useState, useEffect } from "react";
import apiRequest from "../../../services/apiRequest.js";
import OrderChef from "../../OrdersChef/OrdersChef.jsx";
import Swal from "sweetalert2";
import "./kitchen.css";

const Kitchen = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    apiRequest("/orders", "GET").then((data) => {
      setOrders(data);
    });
  }, []);

  // funcion para calcular tiempo de preparacion desde orden generada
  function calculateElapsedTime(dateEntry) {
    const currentTime = new Date();
    const elapsedTime = currentTime - new Date(dateEntry);
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours} : ${minutes}`;
  }

  useEffect(() => {
    function updateElapsedTime() {
      setOrders((prevOrders) =>
        prevOrders.map((order) => ({
          ...order,
          elapsedTime: calculateElapsedTime(order.dateEntry),
        }))
      );
      requestAnimationFrame(updateElapsedTime);
    }
    updateElapsedTime();
  }, []);

  // Ordenar las órdenes de más antiguo a más nuevo al cambiar el estado
  const sortedOrders = [...orders].sort(
    (a, b) => new Date(a.dateEntry) - new Date(b.dateEntry)
  );
  // Función para cambiar el estado de la orden a 'delivery'
  const handleOrderReady = async (orderId) => {
    try {
      // antes de cambiar el estado
      const confirmation = await Swal.fire({
        title: "¿Estás seguro de marcar el pedido como listo?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#68902B",
        cancelButtonColor: "#68902B",
        confirmButtonText: "Sí",
        cancelButtonText: "No",
      });

      if (confirmation.isConfirmed) {
        // si es confirmado cambiar el estado de la orden
        const updatedOrders = orders.map((order) => {
          if (order.id === orderId) {
            return { ...order, status: "Listo para entrega" };
          }
          return order;
        });

        await apiRequest(`/orders/${orderId}`, "PATCH", {
          status: "Listo para entrega",
        });

        setOrders(updatedOrders);

        // alerta de check
        Swal.fire({
          title: "Listo",
          html: "<span class='text-swal2'>La orden ha sido marcada como 'Listo para entrega'.</span>",
          icon: "success",
          confirmButtonColor: "#68902B",
        });
      }
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  return (
    <div>
      <Banner />
      <h2>Pedidos Pendientes</h2>
      <main className='containerOrders'>
        {sortedOrders
          .filter((order) => order.status === "Pendiente")
          .map((order) => (
            <OrderChef
              key={order.id}
              order={order}
              functionTime={() => calculateElapsedTime(order.dateEntry)}
              handleOrderReady={handleOrderReady}
            />
          ))}
      </main>
    </div>
  );
};
export default Kitchen;
