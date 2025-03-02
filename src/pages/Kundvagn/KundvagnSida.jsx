import React from 'react'
import './Kundvagn.css'
import { useState, useEffect, useContext } from "react";
import { CartContext } from "./CartContext";
import Confirmation from '../Confirmation/Confirmation';
import { Link } from 'react-router-dom';


const kundvagnSida = () => {

  const { cart, removeFromCart } = useContext(CartContext);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    // Hämta produktdata för alla ID:n i kundvagnen
    const fetchCartProducts = async () => {
      const productRequests = cart.map((id) =>
        fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json())
      );

      const products = await Promise.all(productRequests);
      setCartProducts(products);
    };

    if (cart.length > 0) {
      fetchCartProducts();
    } else {
      setCartProducts([]);
    }
  }, [cart]);

  return (
    <>
      <div className='checkout-container'>
      <h1>Kundvagn</h1>
      {cartProducts.length === 0 ? (
        <p>Kundvagnen är tom.</p>
      ) : (
        <ul>
          {cartProducts.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} width="50" />
              {item.title} - {item.price} SEK
              <button onClick={() => removeFromCart(item.id)}>Ta bort</button>
            </li>
          ))}
        </ul>
      )}
      </div>
      {/*Denna funkar inte, måste lösa */}
      <Link to="confirmation">
      <button onClick={Confirmation}>SLUTFÖR KÖP</button>
      </Link>
    </>
  )
}

export default kundvagnSida