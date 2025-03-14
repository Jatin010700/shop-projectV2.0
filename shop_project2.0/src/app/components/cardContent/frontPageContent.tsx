// Card.tsx
"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Product from "./productContent";
import Preloader from "../extra/preloader";
import { useRecoilState, useRecoilValue } from "recoil";
import wishListState from "@/app/atoms/wishListState";
import toast from "react-hot-toast";
import {UserState} from "@/app/atoms/userState";

interface MongooseModel {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}


export const Card = () => {
  const [products, setProducts] = useState<MongooseModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [wishCart, setWishCart] = useRecoilState<MongooseModel[]>(wishListState);
  const { isLoggedIn } = useRecoilValue(UserState);
  const [iconClicks, setIconClicks] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("/api/getMongoDBContent");
        setProducts(res.data);
        // console.log("Data fetch ;D");
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }
    };
    fetchData();
  }, []);

  const addItemsToWishCart = (product: MongooseModel) => {
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

    const isItemInWishList =
      wishCart.findIndex((pro) => pro._id === product._id) !== -1;

    if (!isItemInWishList) {
      setWishCart((prevState: MongooseModel[]) => [...prevState, product]);
    } else {
      setWishCart((prevState: MongooseModel[]) => {
        const updatedWishCart = prevState.filter(
          (item) => item._id !== product._id
        );
        setIconClicks((prevClicks) => ({
          ...prevClicks,
          [product._id]: false,
        }));
        return updatedWishCart;
      });
    }

    setIconClicks((prevClicks) => ({
      ...prevClicks,
      [product._id]: !isItemInWishList,
    }));

    const message = isItemInWishList
      ? `${product.name} removed from Wishlist`
      : `${product.name} added to Wishlist`;

    toast.success(message, {
      style: {
        fontWeight: "bold",
        borderRadius: "100px",
      },
    });
  };

  return (
    <>
      <section className="bg-white px-4 pb-8">
        <div className="w-full flex justify-center items-center pb-4">
          <h1 className="md:text-4xl text-3xl text-center w-full md:w-1/2 bg-RED p-2 text-dark font-bold rounded-b-full">
            New in store
          </h1>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
          lg:grid-cols-4 xl:grid-cols-4 gap-4 p-2"
        >
          {products.slice(0, 8).map((item: MongooseModel) => (
            <li key={item._id} className="flex flex-col rounded-3xl">
              {isLoading ? (
                <Preloader
                  key={`preloader-${item._id}`}
                  className="flex justify-center"
                  preloaderSize="30"
                  preloaderColor="#ff3333"
                />
              ) : (
                <>
                <div className=" shadow-xl rounded-3xl text-dark w-72 ">  
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt=""
                      width={100}
                      height={100}
                      className="w-full rounded-3xl "
                    />
                    {/* Wishlist Section */}
                    <i
                      className={`bi bi-suit-heart-fill text-2xl absolute top-4 right-5 cursor-pointer 
                      ${!isLoggedIn || !iconClicks[item._id] ? "text-white" : "text-RED"} button`}
                      onClick={() => addItemsToWishCart(item)}></i>
                  </div>

                  <div className="flex items-center justify-between gap-1 p-1 px-4 shadow-xl rounded-b-3xl">
                    <h2 className="text-dark text-xl font-bold uppercase">
                      {item.name}
                    </h2>
                    <span className="font-bold text-RED">
                        ${item.price}
                      </span>
                  </div>
                  <Product product={item} />
                </div>
                </>
              )}
            </li>
          ))}
        </div>
      </section>
    </>
  );
};

