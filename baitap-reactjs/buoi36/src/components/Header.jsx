import React from "react";
import { useSelector, useDispatch } from "react-redux";


export default function Header() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleOpenCart = () => {
    dispatch({
      type: "OPEN_CART"
    })

  }

  return (
    <header className="bg-purple-800 text-white py-4 px-8 flex justify-between fixed top-0 w-full z-10">
      <h1 className="text-xl font-bold">SHOPPING</h1>
      <div className="cursor-pointer" onClick={handleOpenCart}>
        <span className="flex gap-1 text-white text-xl font-bold">
          <span>CART</span>
          <span className=" bg-black text-white font-bold px-2 rounded-full">{totalCount}</span>
        </span>
      </div>
    </header>
  );
}