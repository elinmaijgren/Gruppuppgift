import { useParams } from "react-router-dom";
import api from "../../hooks/api";
import useCart from "../../hooks/useCart";

const Product_info = () => {
  const { id } = useParams();
  const { kundvagn, addToKundvagn } = useCart();
  const { product, loading, error } = api(id);

  if (loading) return <p>Laddar produkt...</p>;
  if (error) return <p>Något gick fel: {error.message}</p>;
  if (!product) return <p>Produkten hittades inte.</p>;

  return (
    <div className="product-page">
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p><strong>Pris:</strong> {product.price} SEK</p>
      <button onClick={() => {
          addToKundvagn(product);
          console.log("Lägger till i kundvagn:", product);
          }}>
        Lägg till i kundvagn
      </button>
    </div>
  );
};

export default Product_info;
