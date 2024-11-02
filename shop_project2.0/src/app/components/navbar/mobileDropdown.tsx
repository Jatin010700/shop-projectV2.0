"use client";
import { UserState } from "@/app/atoms/userState";
import { Dropdown } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

export default function MobileDropdownMenu() {
  const [iconClick, setIconClick] = useState(false);
  const logOutState = useSetRecoilState(UserState);
  const { isLoggedIn, userName } = useRecoilValue(UserState);
  const router = useRouter()

  const handleLogout = () => {
    logOutState({isLoggedIn: false, userName: ""})
    router.push("/")
  }

  return (
    <Dropdown
      label=""
      dismissOnClick={false}
      className="w-full mobileDropdown"
      renderTrigger={() => (
        <span>
          <i
            onClick={() => {
              setIconClick(!iconClick);
            }}
            className={`bi bi-filter-circle-fill cursor-pointer text-4xl ml-16 md:hidden
                     ${iconClick ? "text-RED" : "text-white"}`}
          ></i>
        </span>
      )}>
          <div className="w-full flex flex-col items-center rounded-3xl">
            {isLoggedIn && (
              <Dropdown.Item className=" rounded-b-3xl w-full flex justify-center hover:!bg-RED bg-RED">
                <h2 className="flex gap-2 text-xl text-white">Hello <span className="font-bold uppercase text-dark">{userName}</span></h2>
              </Dropdown.Item>
            )}
            <Dropdown.Item className=" rounded-3xl w-full flex justify-center">
              <Link href="/store_page" className="font-bold">What&apos;s New</Link>
            </Dropdown.Item>
            <Dropdown.Item className=" rounded-3xl w-full flex justify-center">
              <Link href="/store_page" className="font-bold">Store</Link>
            </Dropdown.Item>
            <Dropdown.Item className=" rounded-3xl w-full flex justify-center">
              <Link href="/store_page" className="font-bold">About</Link>
            </Dropdown.Item>
            <Dropdown.Item className=" rounded-3xl w-full flex justify-center">
              <Link href="/store_page" className="font-bold">Contact Us</Link>
            </Dropdown.Item>
            {isLoggedIn && (
              <Dropdown.Item 
              onClick={handleLogout}
              className=" bg-RED hover:!bg-dark duration-150 text-white font-bold rounded-3xl w-full flex justify-center">
                Log Out
              </Dropdown.Item>
            )}
            </div>
    </Dropdown>
  );
}
