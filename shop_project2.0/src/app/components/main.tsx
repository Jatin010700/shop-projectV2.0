"use client";
import React from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import HeaderVertical from "./swiperVertical";
import HeaderHorizontal from "./horizontalSwiper";

export default function Header() {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <HeaderHorizontal/>
        <HeaderVertical/>
      </div>
      <div className="hidden bg-dark text-white text-center md:flex flex-col justify-center items-center pb-4">
        <p className="text-lg md:text-xl font-bold">Scroll Down</p>
        <div className="w-1/2 md:w-3/4 mx-auto mt-2">
          <i className="bi bi-arrow-down-circle-fill text-RED text-2xl animate-bounce"></i>
        </div>
      </div>
      <div className="bg-RED h-1"></div>
    </>
  );
}
