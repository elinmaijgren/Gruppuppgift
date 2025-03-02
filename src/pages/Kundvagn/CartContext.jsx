import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Ladda sparade ID:n från localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Uppdatera localStorage när kundvagnen ändras
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Lägg till produktens ID i kundvagnen (undvik dubbletter)
  const addToCart = (productId) => {
    if (!cart.includes(productId)) {
      setCart([...cart, productId]);
    }
  };

  // Ta bort en produkt från kundvagnen
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((id) => id !== productId);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
