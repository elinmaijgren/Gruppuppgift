import React, { useState, useEffect } from "react";
import "./Startsida.css";

// Definierar en array med modeller som representerar olika produktkategorier
const models = [
	{
		id: "men's clothing",
		image:
			"https://static.zara.net/assets/public/08c1/7db1/df5d4aeda569/fbf94b52c34c/T1310152002-p/T1310152002-p.jpg?ts=1740390345880&w=326",
		label: "Men's Clothing",
	},
	{
		id: "women's clothing",
		image:
			"https://static.zara.net/assets/public/c0fb/3118/1a144b988be4/eef4517f316f/07484061251-000-a1/07484061251-000-a1.jpg?ts=1740137772435&w=326",
		label: "Women's Clothing",
	},
	{
		id: "jewelery",
		image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
		label: "Jewelry",
	},
];

const Startsida = () => {
	// State-hantering för produkter, filtrerade produkter, vald kategori och laddningsstatus
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [loading, setLoading] = useState(true);

	// Hämtar produkter från FakeStore API vid komponentens montering
	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				setLoading(false);
			});
	}, []);

	// Hanterar klick på modell och filtrerar produkterna baserat på vald kategori
	const handleModelClick = (category) => {
		setSelectedCategory(category);
		setFilteredProducts(
			products.filter((product) => product.category === category)
		);
	};

	return (
		<div className="startsida-container">
			{}
			<h1 className="home-title" onClick={() => setSelectedCategory(null)}>
				BLAAAA
			</h1>

			{selectedCategory === null ? (
				// Visar modellval om ingen kategori är vald
				<div className="model-selection-horizontal">
					{models.map((model) => (
						<div
							key={model.id}
							className="model-card"
							onClick={() => handleModelClick(model.id)}
						>
							<img
								src={model.image}
								alt={model.label}
								className="model-image"
							/>
							<p className="model-label">{model.label}</p>
						</div>
					))}
				</div>
			) : (
				// Visar filtreringsknappar och produkter om en kategori är vald
				<>
					<div className="filter-bar">
						{models.map((model) => (
							<button
								key={model.id}
								onClick={() => handleModelClick(model.id)}
								className={selectedCategory === model.id ? "active" : ""}
							>
								{model.label}
							</button>
						))}
					</div>

					{loading ? (
						// Visar laddningsindikator medan produkter hämtas
						<div className="loading">Loading products...</div>
					) : (
						// Visar filtrerade produkter
						<div className="product-grid">
							{filteredProducts.map((product) => (
								<div key={product.id} className="product-card">
									<img
										src={product.image}
										alt={product.title}
										className="product-image"
									/>
									<div className="product-info">
										<h3 className="italiana-font">{product.title}</h3>
										<p className="product-price italiana-font">
											{product.price} SEK
										</p>
									</div>
								</div>
							))}
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default Startsida;
