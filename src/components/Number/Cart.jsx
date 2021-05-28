import React, { useState } from "react";

export const Cart = () => {
  const [products, setProducts] = useState(0);
  const handleAddProduct = () => setProducts(products + 1);
  const handleRemoveProduct = () => products > 0 && setProducts(products - 1);

  return (
    <div>
      <button onClick={handleAddProduct}>+</button>
      <span> </span>
      <button onClick={handleRemoveProduct}>-</button>
      <p>
        Number of products: <h2>{products}</h2>
      </p>
    </div>
  );
};