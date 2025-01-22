"use client";
import { cartState } from "@/app/atoms/cartState";
import {UserState} from "@/app/atoms/userState";
import { Button, Modal } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRecoilState, useRecoilValue } from "recoil";

interface MongooseModel {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

type ProductProps = {
  product: MongooseModel;
};

const Product: React.FC<ProductProps> = ({ product }) => {
  const [openModal, setOpenModal] = useState(false);
  const [cartItem, setCartItem] = useRecoilState<MongooseModel[]>(cartState);
  const { isLoggedIn } = useRecoilValue(UserState);

  const addItemsToCart = () => {
    if (!isLoggedIn) {
      toast.error(`Please Log In!`, {
        style: {
          borderRadius: "100px",
          fontWeight: "bold",
          color: "#ff3333",
        },
      });
      return;
    }

    if (cartItem.findIndex((pro) => pro._id === product._id) === -1) {
      setCartItem((prevState) => [...prevState, product]);
    } else {
      setCartItem((prevState) => {
        return prevState.map((item) => {
          return item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      });
    }
    toast.success(`${product.name} added to Cart`, {
      style: {
        fontWeight: "bold",
        borderRadius: "100px",
      },
    });
  };
  return (
    <>
      <Button 
      className="text-dark w-full rounded-b-3xl font-bold !border-none focus:ring-0 shadow-xl button"
      onClick={() => setOpenModal(true)} >
        View More
      </Button>

      <Modal
        dismissible
        show={openModal}
        size="4xl"
        onClose={() => setOpenModal(false)}>
        <div className="p-4 relative">
          <div className="text-dark flex justify-end absolute right-0 md:right-4 closeIconModalProd">
            <button onClick={() => setOpenModal(false)}>
              <i className="bi bi-x-circle-fill text-4xl md:text-2xl hover:text-RED scale-105 duration-150"></i>
            </button>
          </div>

          <div className="text-dark flex flex-col md:flex-row gap-4">
            <Image
              src={product.image}
              alt=""
              width={100}
              height={100}
              className="w-full md:w-1/2 rounded-3xl"
            />
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold uppercase">{product.name}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto inventore voluptatum nostrum atque, corrupti, vitae
                esse id accusamus dignissimos neque ..
              </p>
              <p>Price: <span className="text-RED font-bold">${product.price}</span></p>
              <button className="bg-dark text-white rounded-full 
              font-bold py-2 focus:ring-0 button"
              onClick={addItemsToCart}>
                Add to Cart <i className="bi bi-bag-plus-fill text-RED"></i>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Product;
