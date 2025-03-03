import React, { useState } from "react";
import api from "../../hooks/api";
import Produkt from "../../components/Produkt/Produkt";
import "./Home.css";

function Home() {
	const { products, categories, loading, error } = api();
	const [selectedCategory, setSelectedCategory] = useState("all");

	const filteredProducts =
		selectedCategory === "all"
			? products
			: products.filter((product) => product.category === selectedCategory);

	if (loading) return <p>Laddar produkter...</p>;
	if (error) return <p>Något gick fel: {error.message}</p>;

	return (
		<div className="home-container">
			{/* Ändring: Lagt till en wrapper för att centrera filtret */}
			<div className="filter-wrapper">
				<div className="filter-container">
					<select
						value={selectedCategory}
						onChange={(e) => setSelectedCategory(e.target.value)}
					>
						{categories.map((category) => (
							<option key={category} value={category}>
								{category.charAt(0).toUpperCase() + category.slice(1)}
							</option>
						))}
					</select>
				</div>
			</div>

			<div className="product-container">
				<div className="product-list">
					{filteredProducts.length > 0 ? (
						filteredProducts.map((product) => (
							<Produkt key={product.id} product={product} />
						))
					) : (
						<p>Inga produkter tillgängliga för den här kategorin.</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default Home;
