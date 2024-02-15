"use client";
import { Dropdown } from "flowbite-react";
import { useState } from "react";
import Link from "next/link";

export default function MobileDropdownMenu() {
  const [iconClick, setIconClick] = useState(false);

  return (
    <Dropdown
      label=""
      dismissOnClick={false}
      className="rounded-3xl w-full md:w-2/12 "
      renderTrigger={() => (
        <span className="bg-RED mt-2 py-1 cursor-pointer hover:!bg-dark 
        duration-150 hover:scale-105 text-white font-bold 
        rounded-3xl w-[340px] md:w-52 flex justify-center items-center gap-2">
            <i className="bi bi-filter-circle-fill cursor-pointer text-2xl"></i>Menu
        </span>
      )}>
          <div className="md:hidden -full flex flex-col items-center rounded-3xl">
            <Dropdown.Item className=" rounded-3xl w-[340px] md:w-52 flex justify-center">
              <Link href="/store_page" className="font-bold">What&apos;s New</Link>
            </Dropdown.Item>
            <Dropdown.Item className=" rounded-3xl w-[340px] md:w-52 flex justify-center">
              <Link href="/store_page" className="font-bold">Store</Link>
            </Dropdown.Item>
            <Dropdown.Item className=" rounded-3xl w-[340px] md:w-52 flex justify-center">
              <Link href="/store_page" className="font-bold">About</Link>
            </Dropdown.Item>
            <Dropdown.Item className=" rounded-3xl w-[340px] md:w-52 flex justify-center">
              <Link href="/store_page" className="font-bold">Contact Us</Link>
            </Dropdown.Item>
            </div>
    </Dropdown>
  );
}
