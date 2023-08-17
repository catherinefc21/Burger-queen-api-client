import React from "react";
import Banner from "../../banner/banner.jsx";
import ButtonGreen from "../../buttons/buttonGreen.jsx";
import AddOrders from "../../addOrders/addOrders.jsx";
import InputClient from "../../inputClient/inputClient.jsx";
import Menu from "../../menu/menu.jsx";
import useFetchProducts from "../../../functions/waiter";

import "./Orders.css";

export const Orders = () => {
  const {
    showProducts,
    breakfastProducts,
    lunchProducts,
    handleShowBreakfastClick,
    handleShowlunchClick,
  } = useFetchProducts();

  return (
    <div className='Orders'>
      <Banner />
      <div className='buttonsClients'>
        <div className='buttons'>
          <ButtonGreen
            buttonText='Desayuno'
            isActive={showProducts}
            onClickHandler={handleShowBreakfastClick}
          />

          <ButtonGreen
            buttonText='Almuerzo-Cena'
            isActive={!showProducts}
            onClickHandler={handleShowlunchClick}
          />
        </div>
        <div className='clients'>
          <InputClient
            type='text'
            name='name'
            id='customName'
            placeholder='Nombre del cliente'
          />
          <InputClient
            type='number'
            name='table'
            id='table'
            placeholder='N° de mesa'
          />
        </div>
      </div>
      <div className='main'>
        <div className='menu'>
          {showProducts
            ? breakfastProducts.map((product) => (
                <Menu key={product.id} product={product} />
              ))
            : lunchProducts.map((product) => (
                <Menu key={product.id} product={product} />
              ))}
        </div>
        <div className='containerOrders'>
          <h1>
            ORDEN
            <div className='linea'></div>
          </h1>
          <AddOrders />
        </div>
      </div>
    </div>
  );
};

export default Orders;
