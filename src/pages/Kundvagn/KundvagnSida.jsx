import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./KundvagnSida.css";

const KundvagnSida = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  const navigate = useNavigate(); 

  const handleCheckout = () => {
    if (cart.length === 0) {
      return;
    }

    clearCart(); 
    navigate("/confirmation"); 
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="checkout-container">
      <div className="cart-page">
        <h1>Kundvagn</h1>
        {cart.length === 0 ? (
          <p>What??? Ska du inte köpa? :P</p>
        ) : (
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="cart-item-content">
                  <h2>{item.title}</h2>
                  <p>{item.price} SEK</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button className="remove-button" onClick={() => removeFromCart(item.id)}>Ta bort</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <>
            <div className="total-container">
              <h2 className="total-price">Total: {getTotalPrice()} SEK</h2>
            </div>

            <div className="cart-buttons">
              <button onClick={clearCart} className="clear-cart-btn">Töm kundvagn</button>
              <button onClick={handleCheckout} className="checkout-btn">Slutför köp</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default KundvagnSida;
