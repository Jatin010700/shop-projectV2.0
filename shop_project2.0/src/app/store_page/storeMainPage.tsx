"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

type listProps = {
  classDiv: string;
  classGrid: string;
};

const List = ({ classDiv, classGrid }: listProps) => {
  return (
    <>
      <div className="bg-white flex flex-col md:grid grid-cols-3 gap-2 md:py-4 p-4 w-full md:w-11/12 h-auto">
        <Link href="/store_page/game" className={`col-span-2 row-span-2 w-full h-48 md:h-96 lg:h-full ${classGrid}  hover:!scale-[1.01]`}>
          <div className={`top-[45%] text-center ${classDiv}`}>
            <p className="text-white hover:!text-RED !text-4xl md:!text-6xl">
              WHAT&apos;S IN STORE
            </p>
          </div>
          <Image
            src="/assets/gaming.jpg"
            className="storeImg"
            alt="Content"
            width={100}
            height={100}
          />
        </Link>

        <Link href="/store_page/game" className={`row-span-4 h-80 md:h-auto ${classGrid} hover:!scale-[1.01]`}>
          <div className={`top-[40%] ${classDiv}`}>
            <p className="storeText">
              HEADSET
            </p>
          </div>
          <Image
            src="/assets/headset1.jpg"
            className="storeImg"
            alt="Headset"
            width={100}
            height={100}
          />
        </Link>

        <Link href="/store_page/game" className={`row-span-3 h-80 md:h-auto  ${classGrid}`}>
          <div className={`top-[40%] ${classDiv}`}>
            <p className="storeText">
              PC
            </p>
          </div>
          <Image
            src="/assets/tech1.jpg"
            className="storeImg"
            alt="Keyboard"
            width={100}
            height={100}
          />
        </Link>

        <Link href="/store_page/game" className={`row-span-2 ${classGrid}`}>
          <div className={`top-[40%] ${classDiv}`}>
            <p className="storeText">
              MOUSE
            </p>
          </div>
          <Image
            src="/assets/mouse.jpg"
            className="storeImg"
            alt="Mouse"
            width={100}
            height={100}
          />
        </Link>

        <Link href="/store_page/game" className={classGrid}>
          <div className={`top-[40%] ${classDiv}`}>
            <p className="storeText">
              KEYBOARD
            </p>
          </div>
          <Image
            src="/assets/keyboard.jpg"
            className="storeImg"
            alt="Tech"
            width={100}
            height={100}
          />
        </Link>

        <Link href="/store_page/game" className={classGrid}>
          <div className={`top-[40%] ${classDiv}`}>
            <p className="storeText">
              GAME
            </p>
          </div>
          <Image
            src="/assets/game1.jpg"
            className="storeImg"
            alt="Tech"
            width={100}
            height={100}
          />
        </Link>
      </div>
    </>
  );
};

export default function ShopStore() {
  return (
    <>
      <div className="bg-white flex flex-col justify-center items-center font-bold">
        <List
          classDiv="absolute w-full text-center"
          classGrid=" w-full relative hover:scale-[1.03] duration-150"
        />
      </div>
      <div className="bg-white h-10" />
    </>
  );
}
