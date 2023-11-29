import React, {createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    totalItems: 0,
  };

  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cart: [...state.cart, action.payload],
          totalItems: state.totalItems + 1,
        };
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
          totalItems: state.totalItems - 1,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart))
}, [state.cart])

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext debe usarse dentro de un CartProvider");
  }
  return context;
};

export { CartProvider, useCartContext };
