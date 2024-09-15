import React from "react";
import PRODUCTS from "./../../PRODUCTS.json";
import ProductsItem from "../ProductsItem/ProductsItem";

const Products = () => {
  return (
    <ul className="products">
      {PRODUCTS.map((item) => (
        <ProductsItem data={item} />
      ))}
    </ul>  
  );
};
export default Products;
