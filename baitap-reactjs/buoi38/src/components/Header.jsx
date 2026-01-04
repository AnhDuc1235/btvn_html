import React, { useState } from "react";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
  const [active, setactive] = useState();
  const dispatch = useDispatch();
  const name = useSelector((state) => state.modal.name);
  const token = useSelector((state) => state.modal.token);

  const handleOpenModal = () => {
    dispatch({
      type: "OPEN_MODAL",
    });
  };
  const handleLogOut = () => {
    dispatch({
      type: "LOGOUT",
    });
  };
  return (
    <header className="py-5">
      <div className="max-w-300 mx-auto flex justify-between items-center">
        <a className="w-[15%]">
          <img src="/img/LOGO 1.png" alt="order" />
        </a>
        <div className="flex gap-5 items-center">
          <ul className="flex gap-5">
            <li
              onClick={() => setactive("home")}
              className={
                active === "home"
                  ? "text-white bg-amber-500 w-30 rounded-2xl flex items-center justify-center cursor-pointer transition-all ease-in-out"
                  : "text-black w-30 flex items-center justify-center cursor-pointer transition-all ease-in-out"
              }
            >
              Home
            </li>
            <li
              onClick={() => setactive("menu")}
              className={
                active === "menu"
                  ? "text-white bg-amber-500 w-30 rounded-2xl flex items-center justify-center cursor-pointer transition-all ease-in-out"
                  : "text-black w-30 flex items-center justify-center cursor-pointer transition-all ease-in-out"
              }
            >
              Browse Menu
            </li>
            <li
              onClick={() => setactive("offer")}
              className={
                active === "offer"
                  ? "text-white bg-amber-500 w-30 rounded-2xl flex items-center justify-center cursor-pointer transition-all ease-in-out"
                  : "text-black w-30 flex items-center justify-center cursor-pointer transition-all ease-in-out"
              }
            >
              Special Offers
            </li>
            <li
              onClick={() => setactive("restaurant")}
              className={
                active === "restaurant"
                  ? "text-white bg-amber-500 w-30 rounded-2xl flex items-center justify-center cursor-pointer transition-all ease-in-out"
                  : "text-black w-30 flex items-center justify-center cursor-pointer transition-all ease-in-out"
              }
            >
              Restaurants
            </li>
            <li
              onClick={() => setactive("order")}
              className={
                active === "order"
                  ? "text-white bg-amber-500 w-30 rounded-2xl flex items-center justify-center cursor-pointer transition-all ease-in-out"
                  : "text-black w-30 flex items-center justify-center cursor-pointer transition-all ease-in-out"
              }
            >
              Track Order
            </li>
          </ul>
          <div>
            {token ? (
              <div className="px-7 py-5 rounded-2xl flex gap-2 items-center">
                <span className="text-xl">hi {name}</span>
                <span>|</span>
                <Button onClick={handleLogOut} className="cursor-pointer">
                  <span className="text-xl">Log out</span>
                </Button>
              </div>
            ) : (
              <Button
                onClick={handleOpenModal}
                className="px-7 py-5 rounded-2xl cursor-pointer"
              >
                <img src="/img/Male User.png" alt="" />
                <span>Login/Signup</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
