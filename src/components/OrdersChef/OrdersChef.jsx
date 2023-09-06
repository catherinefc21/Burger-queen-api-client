import React from "react";
import "./ordersChef.css";

const OrderChef = ({ order, handleOrderReady, functionTime }) => {
  return (
    <div className='orderList' key={order.id}>
      <div className='order-header'>
        <div className='client-table'>Mesa n°{order.table}</div>
        <div className='date'>
          <img src='../../img/time.png' alt='time' />
          {functionTime()}
        </div>
      </div>
      <div className='order-content'>
        <div className='products-list'>
          <ul className='custom-list'>
            {order.products.map((productItem, index) => (
              <li key={index} className='custom-list-item'>
                {productItem.product.name} x {productItem.qty}
              </li>
            ))}
          </ul>
        </div>
        <button
          className='btn-check'
          onClick={() => handleOrderReady(order.id)}
        >
          Pedido Listo
        </button>
      </div>
    </div>
  );
};

export default OrderChef;
