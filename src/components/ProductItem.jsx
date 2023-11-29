import React from "react";
import { useCartContext } from "../context/CartContext";
import { FaShoppingCart, FaTrash, FaInfoCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const ProductItem = ({ product, showRemoveButton, onRemoveFromCart }) => {
  const { state: { cart }, dispatch } = useCartContext();
  const isInCart = cart.some((item) => item.id === product.id);
  const location = useLocation();

  const handleRemoveFromCart = () => {
    onRemoveFromCart();
  };

  const handleToggleCart = () => {
    if (isInCart) {
      dispatch({ type: "REMOVE_FROM_CART", payload: product.id });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: product });
    }
  };

  return (
    <li className="border p-4 rounded-md shadow-md flex flex-col items-center justify-center transition duration-300 transform hover:scale-105">
      <img
        src={product.image}
        alt={product.title}
        className="mx-auto rounded-md shadow-md"
        style={{ height: '8rem' }}
      />
      <h3 className="text-sm font-semibold mt-2">{product.title}</h3>
      <p className="text-sm text-black mt-1">${product.price.toFixed(2)}</p>
      <div className="flex flex-col items-center">
      {location.pathname === "/" && (
            <Link to={`/item/${product.id}`} className="w-full">
            <button className="w-full bg-green-500 text-white px-4 py-2 rounded-md flex items-center transition duration-300 transform hover:bg-opacity-80">
              <FaInfoCircle className="mr-2" />
              Ver Detalles
            </button>
          </Link>
          )}
        
        {(showRemoveButton || !isInCart) && (
          <button
            className={`mt-2 ${isInCart ? "bg-red-500" : "bg-blue-500"} text-white px-4 py-2 rounded-md flex items-center transition duration-300 transform hover:bg-opacity-80`}
            onClick={handleToggleCart}
          >
            {isInCart ? <FaTrash className="mr-2" /> : <FaShoppingCart className="mr-2" />}
            {isInCart ? "Eliminar del Carrito" : "Agregar al Carrito"}
          </button>
        )}
      </div>
    </li>
  );
};

export default ProductItem;
