import { useState, useEffect } from "react";
import menuRequest from "./menuRequest";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    menuRequest()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  console.log(products);
  return products;
};

export default useFetchProducts;
