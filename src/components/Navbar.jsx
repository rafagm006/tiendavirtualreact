import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import { useCartContext } from "../context/CartContext";

const Navbar = () => {
  const location = useLocation();
  const { state: { totalItems } } = useCartContext();

  return (
    <nav className="bg-black p-4 w-full flex justify-between items-center">
      <div className="container flex justify-between items-center text-white px-4">
        <Link to="/">
          <h1 className="text-xl">Tienda Virtual</h1>
        </Link>
        <div className="flex items-center">
          <Link to="/cart" className="mr-4 relative flex items-center">
            <FaShoppingCart className="mr-2" />
            {totalItems > 0 && (
              <span className="bg-red-500 text-white p-1 rounded-full text-xs ml-2 transform -translate-x-1/2">
                {totalItems}
              </span>
            )}
            Carrito
          </Link>
          {location.pathname === "/cart" && (
            <Link to="/" className="flex items-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
                <FaArrowLeft className="mr-2" />
                Regresar
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
