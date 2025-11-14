import ProductCard from "./ProductCard";
import { useState } from "react";

export function Products({ products, shoppingCart, setShoppingCart }) {
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-primary text-center">
        Explore Products
      </h1>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-lg font-medium transition active:scale-95
${
  category === cat
    ? "bg-primary text-white"
    : "bg-white border border-border text-text-secondary hover:bg-primary hover:text-white"
}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
