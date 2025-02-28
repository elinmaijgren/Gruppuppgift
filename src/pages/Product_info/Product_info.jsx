import { useParams } from "react-router-dom";
import api from "../../hooks/api";
import "./Product_info.css";

const Product_info = () => {
  const { id } = useParams();

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

        <button
          onClick={() => {
            console.log("Lägger till i kundvagn:", product);
          }}
        >
          LÄGG TILL
        </button>
      </div>
    </div>
  );
};

export default Product_info;
