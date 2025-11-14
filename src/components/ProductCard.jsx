function ProductCard({ product, shoppingCart, setShoppingCart }) {
  const isAdded = shoppingCart.find((i) => product.id === i.id);

  function handleShoppingCart() {
    const newCartItem = { qty: 1, ...product };
    setShoppingCart((prev) => [newCartItem, ...prev]);
  }

  return (
    <div className="bg-surface rounded-xl shadow-card p-4 transition hover:shadow-hover hover:-translate-y-1 text-center">
      <img
        src={product.image}
        alt={product.name}
        className="rounded-md w-full h-48 object-cover mb-4"
      />

      <h2 className="font-semibold text-lg">{product.name}</h2>
      <p className="text-primary font-bold text-xl mt-1">$ {product.price}</p>

      {isAdded ? (
        <p className="mt-3 text-sm font-medium text-green-600">
          Already in Cart
        </p>
      ) : (
        <button
          onClick={handleShoppingCart}
          className="bg-primary text-white font-medium py-2 px-4 rounded-lg w-full hover:bg-purple-600 active:scale-95 transition"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;
