import React, { useState } from "react";
import api from "../../hooks/api";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

function Home() {
	const { products = [], categories = [], loading, error } = api();
	const [selectedCategory, setSelectedCategory] = useState("all");

	const filteredProducts =
		selectedCategory === "all"
			? products
			: products.filter((product) => product.category === selectedCategory);

	if (loading) return <p className="loading-text">Laddar produkter...</p>;
	if (error)
		return <p className="error-text">Något gick fel: {error.message}</p>;

	return (
		<div className="home-container">
			<div className="category-container">
				{categories.map((category) => (
					<button
						key={category}
						className={`category-btn ${
							selectedCategory === category ? "active" : ""
						}`}
						onClick={() => setSelectedCategory(category)}
					>
						{category.charAt(0).toUpperCase() + category.slice(1)}
					</button>
				))}
			</div>

			<div className="product-container">
				{filteredProducts.length > 0 ? (
					filteredProducts.map((product) => (
						<div key={product.id} className="product-card">
							<img
								src={product.image}
								alt={product.title}
								className="product-image"
							/>
							<h3 className="product-title">{product.title}</h3>
							<p className="product-price">{product.price} kr</p>
						</div>
					))
				) : (
					<p className="no-products">Inga produkter tillgängliga.</p>
				)}
			</div>

			<Footer />
		</div>
	);
}

export default Home;
