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
      <div className=" bg-dark text-white text-center md:flex flex-col justify-center items-center pb-4">
        <div className="w-1/2 md:w-3/4 mx-auto pt-2.5">
          <i className="bi bi-arrow-down-circle-fill text-RED text-2xl animate-bounce"></i>
        </div>
      </div>
      <div className="bg-RED h-1"></div>
    </>
  );
}
