import { useState, useEffect } from "react";
import menuRequest from "./menuRequest";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState(true);

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

  return {
    showProducts,
    breakfastProducts,
    lunchProducts,
    handleShowBreakfastClick,
    handleShowlunchClick,
  };
};

export default useFetchProducts;
