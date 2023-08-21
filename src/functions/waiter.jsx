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
  // crear funcion de agregar productos(me debe crear el div con productos cuando hago click en el botón agregar)
  const handleAddProduct = (product) => {
    const existingOrder = addProduct.find(
      (order) => order.product.id === product.id
    );
    if (!existingOrder) {
      const newOrder = {
        id: addProduct.length + 1,
        product: product,
        amount: 1,
        total: product.price,
      };
      setAddProducts([...addProduct, newOrder]);
    }
  };
  // funcion de restar

  // funcion establecer cantidad
  // función sumar
  // funcion total
  // funcion delete
  return {
    showProducts,
    breakfastProducts,
    lunchProducts,
    addProduct,
    handleShowBreakfastClick,
    handleShowlunchClick,
    handleAddProduct,
  };
};

export default useFetchProducts;
