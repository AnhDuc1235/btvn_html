import React, { useState, useEffect, useRef } from "react";
import ProductItem from "./ProductItem";

const productsData = [
  {
    id: 1,
    title: "Ipad 1",
    price: 100,
  },
  {
    id: 2,
    title: "Iphone 2",
    price: 200,
  },
  {
    id: 3,
    title: "Ipad 3",
    price: 300,
  },
  {
    id: 4,
    title: "Iphone 4",
    price: 400,
  },
  {
    id: 5,
    title: "Ipad 5",
    price: 36,
  },
  {
    id: 6,
    title: "Iphone 6",
    price: 99,
  },
  {
    id: 7,
    title: "Ipad 7",
    price: 69,
  },
  {
    id: 8,
    title: "Iphone 8",
    price: 6969,
  },
];

export default function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <main className="bg-gray-100 h-screen pt-24 pb-10">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
