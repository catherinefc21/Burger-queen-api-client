import { useState, useEffect } from "react";
import menuRequest from "./menuRequest";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState(true);
  const [addProduct, setAddProducts] = useState([]);

  useEffect(() => {
    menuRequest()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  const breakfastProducts = products.filter(
    (product) => product.type === "Desayuno"
  );
  const lunchProducts = products.filter(
    (product) => product.type === "Almuerzo"
  );

  // funcion para boton desayuno(me debe mostrar los productos al hacer click)
  const handleShowBreakfastClick = () => {
    setShowProducts(true);
  };
  // funcion para boton Almuerzo(me debe mostrar los productos al hacer click)
  const handleShowlunchClick = () => {
    setShowProducts(false);
  };
  // crear funcion de agregar productos(si el producto ya se agregó no se ejecuta la función)
  const handleAddProduct = (product) => {
    const existingOrder = addProduct.find(
      (order) => order.product.id === product.id
    );
    if (!existingOrder) {
      const newOrder = {
        id: product.id,
        product: product,
        amount: 1,
        total: product.price,
      };
      setAddProducts([...addProduct, newOrder]);
    }
  };
  // funcion de restar productos
  const handleMinusProduct = (order) => {
    if (order.amount > 1) {
      order.amount = order.amount - 1;
      setAddProducts([...addProduct]);
    }
  };

  // función sumar un producto
  const handlePlussProduct = (order) => {
    order.amount = order.amount + 1;
    setAddProducts([...addProduct]);
  };
  // funcion total
  const totalProduct = (order) => {
    return order.total * order.amount;
  };

  // funcion delete
  const handleDeleteProduct = (orderId) => {
    const updatedOrders = addProduct.filter((order) => order.id !== orderId);
    setAddProducts(updatedOrders);
  };

  /* Funcion suma total
  const totalAmount = (orderAmount) => {
    const orderSum = addProduct.filter((order) => order.amount === orderAmount);
    const totalOrderSum = orderSum.reduce(
      (Accumulator, current) => Accumulator + current
    );
    return totalOrderSum;
  };*/

  // Calcular el total de la orden
  const calculateTotalOrder = () => {
    return addProduct.reduce((total, order) => total + totalProduct(order), 0);
  };
  return {
    showProducts,
    breakfastProducts,
    lunchProducts,
    addProduct,
    handleShowBreakfastClick,
    handleShowlunchClick,
    handleAddProduct,
    handleMinusProduct,
    handlePlussProduct,
    totalProduct,
    handleDeleteProduct,
    calculateTotalOrder,
  };
};

export default useFetchProducts;
