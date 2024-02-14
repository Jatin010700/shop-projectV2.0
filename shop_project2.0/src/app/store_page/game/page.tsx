"use client";
import Preloader from "@/app/components/extra/preloader";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SearchInputDiv from "./searchDiv";
import { useRecoilState, useRecoilValue } from "recoil";
import SearchState from "@/app/atoms/searchState";
import { NumberPages } from "./numberOfPages";
import wishListState from "@/app/atoms/wishListState";
import UserState from "@/app/atoms/userState";
import toast from "react-hot-toast";
import { cartState } from "@/app/atoms/cartState";

interface StoreModel {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

type StoreProps = {
  product: StoreModel[];
};

const Game: React.FC<StoreProps> = () => {
  const [products, setProducts] = useState<StoreModel[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [iconClicks, setIconClicks] = useState<{ [key: string]: boolean }>({});
  const searchTerm = useRecoilValue(SearchState);
  const [wishCart, setWishCart] = useRecoilState<StoreModel[]>(wishListState);
  const [cartItem, setCartItem] = useRecoilState<StoreModel[]>(cartState);
  const { isLoggedIn } = useRecoilValue(UserState);

  const filteredItems = products.filter((item) => {
    return item.name
      .toLowerCase()
      .includes(searchTerm.searchString.toLowerCase());
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setCurrentPage(1);
        const res = await axios.get("/api/getStoreAllContent");
        setProducts(res.data);
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

  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

//add to wish cart
  const addItemsToWishCart = (product: StoreModel) => {
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
      setWishCart((prevState: StoreModel[]) => [...prevState, product]);
    } else {
      setWishCart((prevState: StoreModel[]) => {
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
//-------------------------//

//add to shop cart

const addItemsToCart = (product: StoreModel) => {
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
//-------------------------//
  return (
    <>
      <SearchInputDiv />

      <section className="bg-white px-4 pb-4">
        <div className="w-full flex justify-center items-center pb-4">
          <h1 className="text-4xl text-center w-full md:w-1/2 bg-RED p-4 text-dark font-bold rounded-b-full">
            What&apos;s in Store
          </h1>
        </div>
        {currentItems.length > 0 ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
          lg:grid-cols-4 xl:grid-cols-4 gap-4 p-2"
          >
            {currentItems.map((item: StoreModel) => (
              <>
              {isLoading ? ( <Preloader 
              preloaderSize="30"
              preloaderColor="#ff3333" 
              className="flex justify-center items-center"/>) : (
              <>
              <div key={item._id} className="shadow-xl rounded-3xl relative">
                {/* wishlist  buttom */}
                  <i
                    className={`bi bi-suit-heart-fill text-2xl ml-2 bg-dark  px-[9px] py-1
                         rounded-tr-3xl rounded-bl-3xl absolute right-0 top-0 shadow-xl cursor-pointer 
                         ${iconClicks[item._id] ? "text-RED" : "text-white"}`}
                    onClick={() => addItemsToWishCart(item)}></i>

                <div className="flex flex-col items-center gap-1 py-1">
                  <Image
                    src={item.image}
                    alt=""
                    width={100}
                    height={100}
                    className="w-3/4"
                  />
                  <h2 className="text-dark text-xl p-2 font-bold uppercase">
                    {item.name}
                  </h2>

                  <p className="font-bold text-dark text-lg">
                    Price:
                    <span className="text-RED">
                      {" "}
                      ${item.price}
                      <i className="bi bi-tags-fill ml-1"></i>
                    </span>
                  </p>

                  <div></div>
                  <button className="bg-dark rounded-full font-bold 
                  !border-none focus:ring-0  hover:scale-105 duration-150 w-3/4 p-2"
                  onClick={() =>addItemsToCart(item)}>
                    Add to Cart
                    <i className="bi bi-bag-plus-fill ml-1"></i>
                  </button>
                </div>
              </div>
              </>
              )}
              </>

            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-80">
            <div className="flex flex-col w-1/2 bg-dark text-RED py-4 rounded-full">
              <p className="text-2xl font-bold text-center">
                ITEM NOT FOUND!!!
              </p>
            </div>
          </div>
        )}

        <NumberPages
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </>
  );
};

export default Game;
