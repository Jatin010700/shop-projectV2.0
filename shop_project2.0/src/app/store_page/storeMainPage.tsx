"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchInputDiv from "./game/searchDiv";

type listProps = {
  classDiv: string;
  classGrid: string;
};

const List = ({ classDiv, classGrid }: listProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <>
      {/* <SearchInputDiv
      handleSearchProps={(e:any) => setSearchTerm(e.target.value)}
      searchTermProps={searchTerm}/> */}

      <div className="bg-white grid grid-cols-3 gap-2 md:py-4 p-4 w-full md:w-11/12 h-auto">
        <div
          className={`col-span-2 row-span-2 w-full h-48 md:h-96 lg:h-full ${classGrid}  hover:!scale-[1.01]`}
        >
          <div className={`top-2/4 left-[55%] ${classDiv}`}>
            <Link
              href="/store_page/game"
              className="text-white hover:!text-RED !text-4xl md:!text-6xl"
            >
              WHAT&apos;S IN STORE
            </Link>
          </div>
          <Image
            src="/assets/gaming.jpg"
            className="storeImg"
            alt="Content"
            width={100}
            height={100}
          />
        </div>

        <div className={`row-span-4 ${classGrid} hover:!scale-[1.01]`}>
          <div className={`top-2/4 left-[55%] ${classDiv}`}>
            <Link href="/store_page/game" className="storeText">
              HEADSET
            </Link>
          </div>

          <Image
            src="/assets/headset1.jpg"
            className="storeImg"
            alt="Headset"
            width={100}
            height={100}
          />
        </div>

        <div className={`row-span-3 ${classGrid}`}>
          <div className={`top-2/4 left-3/4 ${classDiv}`}>
            <Link href="/store_page/game" className="storeText">
              PC
            </Link>
          </div>
          <Image
            src="/assets/tech1.jpg"
            className="storeImg"
            alt="Keyboard"
            width={100}
            height={100}
          />
        </div>

        <div className={`row-span-2 ${classGrid}`}>
          <div className={`top-2/4 left-[62%] ${classDiv}`}>
            <Link href="/store_page/game" className="storeText">
              MOUSE
            </Link>
          </div>
          <Image
            src="/assets/mouse.jpg"
            className="storeImg"
            alt="Mouse"
            width={100}
            height={100}
          />
        </div>

        <div className={classGrid}>
          <div className={`top-2/4 left-1/2 ${classDiv}`}>
            <Link href="/store_page/game" className="storeText">
              KEYBOARD
            </Link>
          </div>
          <Image
            src="/assets/keyboard.jpg"
            className="storeImg"
            alt="Tech"
            width={100}
            height={100}
          />
        </div>

        <div className={classGrid}>
          <div className={`top-2/4 left-[65%] ${classDiv}`}>
            <Link href="/store_page/game" className="storeText">
              GAME
            </Link>
          </div>
          <Image
            src="/assets/game1.jpg"
            className="storeImg"
            alt="Tech"
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  );
};

export default function ShopStore() {
  return (
    <>
      <div className="bg-white flex flex-col justify-center items-center font-bold">
        <List
          classDiv="absolute w-3/4 transform -translate-x-1/2 -translate-y-1/2"
          classGrid=" w-full relative hover:scale-[1.03] duration-150"
        />
      </div>
      <div className="bg-white h-10" />
    </>
  );
}
