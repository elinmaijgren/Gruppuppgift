import { useParams } from "react-router-dom";
import api from "../../hooks/api";
import "./Product_info.css";
import { useContext } from "react";
import { CartContext } from "../Kundvagn/CartContext";


const Product_info = () => {
  const { id } = useParams();

  const { product, loading, error } = api(id);

  const { addToCart } = useContext(CartContext);

  if (loading) return <p>Laddar produkt...</p>;
  if (error) return <p>Något gick fel: {error.message}</p>;
  if (!product) return <p>Produkten hittades inte.</p>;

  return (
    <div className="product-page">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.price} SEK</p>

        <p className="product-desc">{product.description}</p>

        <button
          onClick={() => addToCart(product.id)}>
          LÄGG TILL
        </button>
      </div>
    </div>
  );
};

export default Product_info;
