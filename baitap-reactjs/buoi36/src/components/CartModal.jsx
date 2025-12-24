import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function CartModal() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const showCart = useSelector((state) => state.cart.showCart);
  if (!showCart) return null;

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleDecrease = (id) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: id,
    });
  };
  const handleIncrease = (id) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: id,
    });
  };
  const handleRemove = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };
  const handleClose = () => {
    dispatch({ 
      type: "CLOSE_CART" 
    });
  };
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={handleClose}
      ></div>

      <div className="relative bg-white w-[35%] h-full flex flex-col">
        <div className="bg-purple-800 text-white p-4 flex justify-between items-center">
          <button onClick={handleClose} className="text-white">
            <span className="text-2xl cursor-pointer">&times;</span>
          </button>
          <h2 className="text-xl font-semibold">Cart ({totalCount})</h2>
          <span className="w-6"></span>
        </div>

        <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center">
              <p className="text-xl font-medium text-black">Cart is empty</p>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={`https://picsum.photos/200/200?random=${item.id}`}
                      alt={item.title}
                      className="w-16 h-16 rounded"
                    />
                    <div>
                      <span className="font-medium text-sm text-gray-800 w-32">
                        {item.title}
                      </span>
                      <p className="text-black font-bold text-sm">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center bg-purple-800 text-white rounded">
                      <button
                        className="px-2 cursor-pointer"
                        onClick={() => handleDecrease(item.id)}
                      >
                        -
                      </button>
                      <span className="px-2 text-sm font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        className="px-2 cursor-pointer"
                        onClick={() => handleIncrease(item.id)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="text-black cursor-pointer"
                      onClick={() => handleRemove(item.id)}
                    >
                      <span className="text-2xl">&times;</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-between p-4 bg-purple-800 text-white">
          <div className="flex justify-between items-center mb-4 text-xl font-bold">
            <span>Total: ${totalPrice}</span>
          </div>
          <button className="bg-white text-purple-800 font-bold px-2 rounded cursor-pointer">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
