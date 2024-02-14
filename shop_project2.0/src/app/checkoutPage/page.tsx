"use client";
import axios from "axios";
import { useRecoilState } from "recoil";
import { cartState } from "../atoms/cartState";
import CartList from "./cartList";
import { Bar } from "../components/extra/bar";
import CheckoutModal from "./checkoutModal";

const CheckoutPage = () => {
  const [cartItem, setCartItem] = useRecoilState(cartState);

  const totalPrice = () => {
    let total = 0;
    cartItem.forEach((item) => (total += item.price * item.quantity));
    return total;
  };

  const increaseQuantity = (itemId:any) => {
    setCartItem((prevState) =>
      prevState.map((item) =>
        item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId:any) => {
    setCartItem((prevState) =>
      prevState.map((item) =>
        item._id === itemId
          ? item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
          : item
      )
    );
  };

  return (
    <>
      <div className="h-5 w-full bg-dark" />
      <div className="h-1 w-full bg-RED" />

      <div className="w-full bg-white flex justify-center items-center pb-4">
        <h1 className="text-4xl text-center w-full md:w-1/2 bg-RED p-4 text-dark font-bold rounded-b-full">
          Checkout
        </h1>
      </div>
      <div className="bg-white font-bold px-2">
        <div
          className="bg-RED text-dark p-2 rounded-tl-3xl rounded-tr-3xl
      flex items-center justify-between md:flex-row md:justify-evenly w-full md:w-3/4 ml-0 md:ml-[10.8em]"
        >
          <h2 className="ml-2 md:ml-0 ">Products</h2>
          <div className="w-0.5 bg-dark  h-5 rounded-full mx-2 my-2" />
          <h2 className="ml-2 md:ml-0">Names</h2>
          <div className="w-0.5 bg-dark  h-5 rounded-full mx-2 my-2" />
          <h2 className="ml-2 md:ml-0">Quantities</h2>
          <div className="w-0.5 bg-dark h-5 rounded-full mx-2 my-2" />
          <h2 className="ml-2 md:ml-0">Prices</h2>
        </div>
      </div>
      <div
        className="bg-white text-dark h-full flex flex-wrap gap-2 p-2 justify-center
       border-t-2 border-RED"
      >
        {cartItem.length <= 0 ? (
          <div className="flex items-center justify-center w-full">
            <h1
              className="flex flex-col items-center  justify-center
          text-2xl md:text-4xl w-3/4 font-bold h-[15em]"
            >
              Your Cart Is Empty!!!
              <Bar />
            </h1>
          </div>
        ) : (
          cartItem.map((item) => (
            <CartList
              key={item._id}
              data={item}
              increaseQuantity={() => increaseQuantity(item._id)}
              decreaseQuantity={() => decreaseQuantity(item._id)}
            />
          ))
        )}

        {cartItem.length > 0 && (
          <div
            className="flex flex-col items-center md:items-end w-3/4 h-80 
          text-center mx-auto mt-4 py-2 px-6"
          >
            <h2 className="text-center text-3xl font-bold">
              Total: ${totalPrice()}
            </h2>
            <CheckoutModal/>
          </div>
        )}
      </div>
    </>
  );
};

export default CheckoutPage;