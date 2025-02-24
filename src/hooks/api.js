import { useState, useEffect } from "react";

const api = (productId = null) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let url = "https://fakestoreapi.com/products";
        if (productId) url += `/${productId}`;

        const response = await fetch(url);
        const data = await response.json();

        if (productId) {
          setProduct(data);  
        } else {
          setProducts(data);  
          const uniqueCategories = ["all", ...new Set(data.map((p) => p.category))];
          setCategories(uniqueCategories);
        }
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  return { products, product, categories, loading, error };
};

export default api;
