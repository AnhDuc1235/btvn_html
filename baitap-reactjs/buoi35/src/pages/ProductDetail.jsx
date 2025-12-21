import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const BASE_URL = "https://dummyjson.com/products";

export default function ProductDetail() {
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);


  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/${productId}`);
        const data = await res.json();
        setProducts(data);
        setCurrentImage(0);
      } catch {
        setError("co loi xay ra");
      } finally {
        setIsLoading(false);
      }
    })();
  }, [productId]);
  if (isLoading) {
    return <span>Dang tai vui long cho...</span>;
  }
  const handleClickPhotos = (index) => {
    setCurrentImage(index);
  }

  const handlePrev = () => {
    setCurrentImage((prev) =>
    prev === 0 ? products.images.length - 1 : prev - 1
  );
  }
  const handleNext = () => {
    setCurrentImage((prev) =>
    prev === products.images.length - 1 ? 0 : prev + 1
  );
  }
  return (
    <div className="w-[80%] m-auto">
      <h1 className="font-bold text-3xl">Chi tiết sản phẩm {productId}</h1>
      <div className="flex flex-col w-[80%]">
        {error ? (
          <span>{error}</span>
        ) : (
          <div key={products.id} className="flex flex-col w-[80%]">
            <img className="w-[50%]" src={products.images[currentImage]} alt="" />
            <div className="flex">
              <button onClick={handlePrev} className="cursor-pointer">prev</button>
              <div className="flex flex-wrap">
                {products.images.map((image, index) => {
                  return <img key={index} src={image} alt="" className="w-[30%] cursor-pointer" onClick={() => {handleClickPhotos(index)}}/>;
                })}
              </div>
              <button onClick={handleNext} className="cursor-pointer">next</button>
            </div>
            <h2 className="font-extrabold text-2xl">{products.title}</h2>
            <h2 className="font-extrabold">{products.price}</h2>
            <span className="w-full">{products.description}</span>
            <div className="flex justify-between">
              <button className="text-purple-700 underline cursor-pointer"></button>
              <div className="flex gap-5"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
