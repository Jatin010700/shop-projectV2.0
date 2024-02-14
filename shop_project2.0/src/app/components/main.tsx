"use client";
import React from "react";
import Image from "next/image";
import { AnimatedText } from "./extra/animatedText";

export default function Header() {
  return (
    <>
      <main
        id="titleLink"
        className="bg-dark text-white p-4 md:p-10 flex flex-col md:flex-row md:justify-between"
      >
        <div className="md:mr-8 md:w-2/4">
          <AnimatedText text="Welcome To Our Tech Shop" className="!text-6xl" />

          <div className="w-full">
            <h1 className="text-2xl text-RED font-bold">
              The current best Gaming Laptop
            </h1>
            <h2 className="text-xl font-bold">
              HP Omen laptop /
              <span className="text-RED text-2xl">
                $1,500
                <i className="bi bi-tag-fill ml-1"></i>
              </span>
              <div className="md:hidden mt-8 md:mt-0 md:relative flex justify-center md:justify-end">
                <Image
                  src="/assets/laptop1.png"
                  alt=""
                  width={100}
                  height={100}
                  className="w-full md:w-3/4 h-auto rounded-lg"
                />
              </div>
            </h2>
            <p className="py-2 text-justify">
              17.3-inch 1920×1080 IPS screen in a 6.3lb package. This has the
              same processor and 8GB RAM as the 15-inch system but a faster
              Nvidia GTX 960M GPU with 4GB dedicated memory and a 128GB SSD
              alongside its 1TB hard disk. Pay for options and you can get a
              512GB PCIe SSD, 16GB RAM, a GTX 965M GPU, and a 4K screen.
            </p>
          </div>

          <button
            className="shadow-xl p-2 rounded-full font-bold bg-RED hover:scale-110 duration-150 mt-4 md:mt-0"
          >
            Go to Store <i className="bi bi-arrow-right-circle-fill"></i>
          </button>
        </div>

        <div className=" hidden mt-8 md:mt-0 md:relative md:flex justify-center md:justify-end">
          <Image
            src="/assets/laptop1.png"
            alt=""
            width={100}
            height={100}
            className="w-full md:w-3/4 h-auto rounded-lg"
          />
        </div>
      </main>

      <div className="bg-dark text-white text-center flex flex-col justify-center items-center h-[130px]">
        <p className="text-lg md:text-xl font-bold">Scroll Down</p>
        <div className="w-1/2 md:w-3/4 mx-auto mt-2">
          <i className="bi bi-arrow-down-circle-fill text-RED text-2xl animate-bounce"></i>
        </div>
      </div>
      <div className="bg-RED h-1"></div>
    </>
  );
}
