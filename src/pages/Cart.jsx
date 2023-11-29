import React, { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import { useCartContext } from "../context/CartContext";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const { state: { cart }, dispatch } = useCartContext();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, product) => acc + product.price, 0).toFixed(2)
    );
  }, [cart]);

  return (
    <div className="text-black p-4 relative">
      <h1 className="text-2xl font-bold mb-4">Carrito</h1>
      <ul className="grid grid-cols-5 gap-4">
        {cart.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            showRemoveButton={true}
          />
        ))}
      </ul>
      <div className="fixed right-4 top-1/4 text-lg font-semibold bg-white p-4 rounded-md shadow">
        Total de la compra: ${total}
      </div>
    </div>
  );
};

export default Cart;
