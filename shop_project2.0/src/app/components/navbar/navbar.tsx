"use client";
import React, { useState } from "react";
import Link from "next/link";
import  ProfileMenu  from "./dropdownMenu";
import { useRecoilState, useRecoilValue } from "recoil";
import UserState from "@/app/atoms/userState";
import LoginModal from "../user_account/loginModal";
import { cartState } from "@/app/atoms/cartState";


type navbarProps = {
  to: any;
  title: string;
  className: string;
};

const CustomLink = ({ to, title, className }: navbarProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Link href={to} className={`${className} relative group`}>
        <>
          <div className="">
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

    const totalQuantity = cartItem.reduce(
      (total, item) => total + item.quantity,
      0
    );

  return (
    <>
      <div className="bg-dark text-white w-full px-4 flex flex-row items-center justify-between">
            <Link href="/" className="text-xl font-bold ">
              Tech
              <span className="text-RED text-2xl">Shop</span>
            </Link>

        <nav className="hidden gap-4 md:flex md:items-center 
        md:justify-center w-full md:w-auto md:mb-0 rounded-b-full bg-RED py-4 px-10 ml-14">
          <CustomLink to="" title="What's New" className="font-bold" />
          <CustomLink to="/store_page" title="Store" className="font-bold hover:text-dark" />
          <CustomLink to="" title="About" className="font-bold" />
          <CustomLink to="" title="Contact Us" className="font-bold" />
        </nav>

        <div className="flex items-center gap-3">
          {isLoggedIn === true ? (
          <div className="flex justify-center items-center gap-3 text-xl">
            <h2>Hello, <span className="font-bold uppercase text-RED">{userName}</span></h2>
            <Link href="/checkoutPage">
              <i className="bi bi-bag-plus-fill cursor-pointer text-3xl 
              hover:text-RED rounded-full scale-105 duration-150 hover:scale-125
              relative"></i>
              <span className="absolute right-14 top-3 bg-RED px-2 text-base rounded-full">
                {totalQuantity}
              </span>
            </Link>
          </div>) : (<LoginModal/>)}

          <ProfileMenu />
        </div>
      </div>
    </>
  );
}
