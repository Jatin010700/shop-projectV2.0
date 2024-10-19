"use client";
import {UserState} from "@/app/atoms/userState";
import { Dropdown } from "flowbite-react";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import Link from "next/link";
import wishListState from "@/app/atoms/wishListState";
import MobileDropdownMenu from "./mobileDropdown";

export default function ProfileMenu() {
  const [iconClick, setIconClick] = useState(false);
  const { isLoggedIn } = useRecoilValue(UserState);
  const logOutState = useSetRecoilState(UserState);
  const [wishCart] = useRecoilState(wishListState);
  const router = useRouter()
  
  const handleLogout = () => {
    logOutState({isLoggedIn: false, userName: ""})
    router.push("/")
  }

  return (
    <Dropdown
      label=""
      dismissOnClick={false}
      className="rounded-3xl w-full md:w-2/12"
      renderTrigger={() => (
        <span>
          <i
            onClick={() => {
              setIconClick(!iconClick);
            }}
            className={`bi bi-filter-circle-fill cursor-pointer text-4xl 
                     ${iconClick ? "text-RED" : "text-white"}`}
          ></i>
        </span>
      )}
    >
      <div className="w-full flex flex-col items-center rounded-3xl">
        {isLoggedIn === true ? (
          <>
            <Dropdown.Item className="rounded-3xl w-[340px] relative md:w-52 flex justify-center text-dark font-bold">
              <Link href="/wishlist">
                Wishlist
                <p className="absolute top-2 right-12 text-[12px] text-white">
                  <span className="bg-RED rounded-full px-[5px] text-center">{wishCart.length}</span>
                </p>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item className=" rounded-3xl w-[340px] md:w-52 flex justify-center text-dark font-bold">
              Settings
            </Dropdown.Item>
            <Dropdown.Item 
            onClick={handleLogout}
            className=" bg-RED hover:!bg-dark duration-150 hover:scale-105 text-white font-bold  rounded-3xl w-[340px] md:w-52 flex justify-center">
              Log Out
            </Dropdown.Item>
          </>
        ) : (
          <>
            <Dropdown.Item className=" rounded-3xl w-[340px] md:w-52 flex justify-center">
              Dashboard
            </Dropdown.Item>
            <Dropdown.Item className=" rounded-3xl w-[340px] md:w-52 flex justify-center">
              Earnings
            </Dropdown.Item>
            <Dropdown.Item className=" rounded-3xl w-[340px] md:w-52 flex justify-center">
              Settings
            </Dropdown.Item>
          </>
        )}
          <MobileDropdownMenu/>
      </div>
    </Dropdown>
  );
}
