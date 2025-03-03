import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import api from "../../hooks/api";
import "./Product_info.css";

const Product_info = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { product, loading, error } = api(id);

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
        <button onClick={() => addToCart(product)}>LÄGG TILL</button>
      </div>
    </div>
  );
};

export default Product_info;
