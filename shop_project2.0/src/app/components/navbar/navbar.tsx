"use client";
import React, { useState } from "react";
import Link from "next/link";
import  ProfileMenu  from "./dropdownMenu";
import { useRecoilState, useRecoilValue } from "recoil";
import {UserState} from "@/app/atoms/userState";
import { cartState } from "@/app/atoms/cartState";
import wishListState from "@/app/atoms/wishListState";
import AuthModalContainer from "../user_account/authModal";
import MobileDropdownMenu from "./mobileDropdown";


type navbarProps = {
  to: any;
  title: string;
};

const CustomLink = ({ to, title }: navbarProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Link href={to} className="font-bold hover:text-dark relative group">
        <>
          <div>
            {title}
          </div>
          <span
            className={`h-[2px] inline-block rounded-full bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-400
            ${isHovered ? "w-full" : "w-0"}`}
          />
        </>
      </Link>
    </>
  );
};

export default function Navbar() {
  const { isLoggedIn, userName } = useRecoilValue(UserState);
  const [cartItem] = useRecoilState(cartState);
  const [wishlistItem] = useRecoilState(wishListState);

    const cartTotalQuantity = cartItem.reduce(
      (total, item) => total + item.quantity,
      0
    );

    const wishlistTotalQuantity = wishlistItem.reduce(
      (total, item) => total + item.quantity,
      0
    );

  return (
    <>
      <div className="bg-dark text-white w-full px-4 pt-2 md:pt-0 flex flex-row items-center justify-between">
        <Link href="/" className="text-xl font-bold ">
          Tech<span className="text-RED text-2xl">Shop</span>
        </Link>
        <nav className="hidden gap-4 md:flex md:items-center md:justify-center w-full md:w-auto md:mb-0 rounded-b-full bg-RED py-3 px-10">
          <CustomLink to="/store_page" title="What's New"/>
          <CustomLink to="/store_page" title="Store"/>
          <CustomLink to="/" title="About"/>
          <CustomLink to="/" title="Contact Us"/>
        </nav>

        <div className="flex items-center ml-3">
          {isLoggedIn === true ? (
          <div className="flex justify-center items-center gap-3 text-2xl absolute right-20">
            <h2 className="lg:flex gap-2 hidden">Hello <span className="font-bold uppercase text-RED">{userName}</span></h2>
            <Link href="/checkoutPage" className="relative">
              <i className="bi bi-bag-plus-fill 
                 cursor-pointer text-4xl hover:text-RED scale-105 duration-150">
              </i>
              <p className="absolute -right-2 -top-1 text-[12px] font-bold">
                <span className="bg-RED rounded-full px-[5px] text-center">{cartTotalQuantity}</span>
              </p>
            </Link>
            <Link href="/" className="relative lg:hidden">
              <i className="bi bi-suit-heart-fill 
                 cursor-pointer text-4xl hover:text-RED scale-105 duration-150">
              </i>
              <p className="absolute -right-2 -top-1 text-[12px] font-bold">
                <span className="bg-RED rounded-full px-[5px] text-center">{wishlistTotalQuantity}</span>
              </p>
            </Link>
          </div>) : (<AuthModalContainer/>)}

          <ProfileMenu />
          <MobileDropdownMenu/>
        </div>
      </div>
    </>
  );
}
