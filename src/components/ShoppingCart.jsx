function ShoppingCart({ shoppingCart, setShoppingCart }) {
  const total = shoppingCart.reduce((sum, i) => i.price * i.qty + sum, 0);

  function handleRemoveItemFromCart(id) {
    setShoppingCart((prev) => prev.filter((item) => item.id !== id));
  }

  function handleIncreaseQtyOfProduct(id) {
    setShoppingCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  }

  function handleDecreaseQtyOfProduct(id) {
    setShoppingCart((prev) => {
      const item = prev.find((i) => i.id === id);
      if (!item) return prev;
      if (item.qty === 1) return prev.filter((i) => i.id !== id);

      return prev.map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i));
    });
  }

  return (
    <div className="max-w-4xl mx-auto mt-16 p-6 bg-surface-alt rounded-xl shadow-card">
      <h1 className="text-3xl font-bold text-primary mb-6 text-center">
        Shopping Cart
      </h1>

      {shoppingCart.length === 0 && (
        <p className="text-center text-text-secondary">Your cart is empty.</p>
      )}

      <div className="space-y-4">
        {shoppingCart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-border"
          >
            <div>
              <p className="font-semibold text-lg">{item.name}</p>
              <p className="text-text-secondary text-sm">
                {item.qty} × ${item.price}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => handleDecreaseQtyOfProduct(item.id)}
                className="border border-primary text-primary px-3 py-1 rounded-md hover:bg-primary hover:text-white active:scale-95 transition"
              >
                -
              </button>

              <span className="font-bold">{item.qty}</span>

              <button
                onClick={() => handleIncreaseQtyOfProduct(item.id)}
                className="border border-primary text-primary px-3 py-1 rounded-md hover:bg-primary hover:text-white active:scale-95 transition"
              >
                +
              </button>

              <button
                onClick={() => handleRemoveItemFromCart(item.id)}
                className="bg-primary-accent text-white px-4 py-2 rounded-lg hover:bg-pink-500 active:scale-95 transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-2xl font-bold text-right">
        Total: <span className="text-primary">${total}</span>
      </div>
    </div>
  );
}

export default ShoppingCart;
