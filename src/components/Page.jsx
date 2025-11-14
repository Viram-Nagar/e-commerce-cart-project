import { useState } from "react";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";

const INITAIL_PRODUCTS = [
  {
    id: 1,
    name: "Laptop 01",
    category: "Electronics",
    price: 1200,
    image: "/laptop01.jpg",
  },
  {
    id: 7,
    name: "Laptop 03",
    category: "Electronics",
    price: 1300,
    image: "/laptop02.jpg",
  },
  {
    id: 8,
    name: "Laptop 03",
    category: "Electronics",
    price: 1400,
    image: "/laptop03.jpg",
  },
  {
    id: 2,
    name: "T-Shirt 03",
    category: "Clothing",
    price: 25,
    image: "/t-shirt03.jpg",
  },
  {
    id: 9,
    name: "T-Shirt 02",
    category: "Clothing",
    price: 20,
    image: "/t-shirt02.jpg",
  },
  {
    id: 10,
    name: "T-Shirt 01",
    category: "Clothing",
    price: 30,
    image: "/t-shirt01.jpg",
  },
  {
    id: 3,
    name: "Book 02",
    category: "Books",
    price: 15,
    image: "/book02.jpg",
  },
  {
    id: 11,
    name: "Book 01",
    category: "Books",
    price: 15,
    image: "/book01.jpg",
  },
  {
    id: 12,
    name: "Book 03",
    category: "Books",
    price: 15,
    image: "/book03.jpg",
  },
  {
    id: 4,
    name: "Smartphone 01",
    category: "Electronics",
    price: 850,
    image: "/phone01.jpg",
  },
  {
    id: 13,
    name: "Smartphone 02",
    category: "Electronics",
    price: 800,
    image: "/phone02.jpg",
  },
  {
    id: 5,
    name: "headset 01",
    category: "Electronics",
    price: 120,
    image: "/headset03.jpg",
  },
  {
    id: 6,
    name: "headset 02",
    category: "Electronics",
    price: 110,
    image: "/headset02.jpg",
  },
  {
    id: 14,
    name: "headset 03",
    category: "Electronics",
    price: 100,
    image: "/headset03.jpg",
  },
];

const INITAIL_CART = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 1200,
    image: "/sincerely-media-CXYPfveiuis-unsplash.jpg",
    qty: 3,
  },
  {
    id: 2,
    name: "T-Shirt",
    category: "Clothing",
    price: 25,
    image: "/sincerely-media-CXYPfveiuis-unsplash.jpg",
    qty: 3,
  },
];

function Page() {
  const [products, setProducts] = useState(INITAIL_PRODUCTS);
  const [shoppingCart, setShoppingCart] = useState(INITAIL_CART);
  return (
    <div className="min-h-screen bg-bg text-text-primary font-sans px-6 py-10">
      <Products
        products={products}
        setProducts={setProducts}
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
      />
      <ShoppingCart
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
      />
    </div>
  );
}

export default Page;
