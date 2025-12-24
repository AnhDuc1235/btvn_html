import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  return (
    <div className="bg-white rounded flex flex-col items-center p-4">
      <div className="h-48 w-full flex justify-center items-center mb-4">
        <img
          src={`https://picsum.photos/200/200?id=${product.id}`}
          className="h-full rounded-md"
        />
      </div>
      <h3 className="text-gray-900 font-semibold text-center h-8">
        {product.title}
      </h3>
      <p className="text-gray-700 font-bold mb-4">${product.price}</p>

      <button
        onClick={handleAddToCart}
        className={
          "w-full py-2 rounded font-medium bg-purple-700 text-white cursor-pointer"
        }
      >
        Add to cart
      </button>
    </div>
  );
}
