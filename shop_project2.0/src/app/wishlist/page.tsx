"use client";
import { useRecoilState } from "recoil";
import wishListState from "../atoms/wishListState";
import WishlistComponent from "./wishlist";

export default function Wishlist() {
  const [wishCart] = useRecoilState(wishListState);

  return (
    <>
      <div className="h-5 w-full bg-dark" />
      <div className="h-1 w-full bg-RED" />

      <div className="w-full bg-white flex justify-center items-center pb-4">
        <h1 className="text-4xl text-center w-full md:w-1/2 bg-RED p-4 text-dark font-bold rounded-b-full">
          Wishlist
        </h1>
      </div>
      <section className="bg-white flex flex-wrap justify-center gap-4 px-4 pb-4">
        {wishCart.length <= 0 ? (
          <>
            <div className="flex items-center justify-center h-80">
              <div className="flex flex-col w-full px-10 bg-dark text-RED py-4 rounded-full">
                <p className="text-2xl font-bold text-center">
                  Wishlist empty!!!
                </p>
              </div>
            </div>
          </>
        ) : (
          wishCart.map((item) => <WishlistComponent key={item} data={item} />)
        )}
      </section>
    </>
  );
}
