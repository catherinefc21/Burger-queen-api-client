import React from "react";
import Banner from "../../banner/banner.jsx";
import ButtonAdd from "../../buttonAdd/buttonAdd.jsx";
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
    addProduct,
    handleShowBreakfastClick,
    handleShowlunchClick,
    handleAddProduct,
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
        <div className='product-container'>
          {showProducts
            ? breakfastProducts.map((product) => (
                <Menu key={product.id} product={product}>
                  <ButtonAdd
                    buttonText='Agregar'
                    functionButton={handleAddProduct}
                    product={product}
                  />
                </Menu>
              ))
            : lunchProducts.map((product) => (
                <Menu key={product.id} product={product}>
                  <ButtonAdd
                    buttonText='Agregar'
                    functionButton={handleAddProduct}
                    product={product}
                  />
                </Menu>
              ))}
        </div>
        <div className='orders-container'>
          <div className='black-container'>
            <div>
              <h1>ORDEN</h1>
              <div className='line'></div>
              {addProduct.map((order) => (
                <AddOrders
                  key={order.id}
                  product={order.product.name}
                  amount={order.amount}
                  total={order.total}
                  onClickMinus={() => handleMinusClick(order.id)}
                  onClickPluss={() => handlePlusClick(order.id)}
                  onClickDelete={() => handleDeleteClick(order.id)}
                />
              ))}
              <br />
              <div className='line'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
