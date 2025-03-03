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

  return (
    <div className="cart-page">
      <h1>Kundvagn</h1>
      {cart.length === 0 ? (
        <p>What??? Ska du inte köpa? :P</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h2>{item.title}</h2>
                <p>{item.price} SEK</p>
                <div>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Ta bort</button>
              </div>
            </div>
          ))}
          <button onClick={clearCart}>Töm kundvagn</button>
          <button onClick={handleCheckout} className="checkout-btn">Slutför köp</button>
        </div>
      )}
    </div>
  );
};

export default KundvagnSida;
