import React, { useState, useEffect, useRef } from "react";
import ProductItem from "./ProductItem";

const BASE_URL = "https://dummyjson.com/products"

export default function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
        const res = await fetch(`${BASE_URL}?limit=8`);
        const data = await res.json();
        setProducts(data.products);
    })();
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
