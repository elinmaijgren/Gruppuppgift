import { Link } from "react-router-dom";

const Produkt = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.price} SEK</p>
      <Link to={`/info/${product.id}`}>Se detaljer</Link>
    </div>
  );
};

export default Produkt;
