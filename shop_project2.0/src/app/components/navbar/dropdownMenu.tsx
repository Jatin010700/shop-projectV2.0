"use client"
import {UserState} from "@/app/atoms/userState";
import { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import Link from "next/link";
import wishListState from "@/app/atoms/wishListState";

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [iconClick, setIconClick] = useState(false);
  const { isLoggedIn } = useRecoilValue(UserState);
  const logOutState = useSetRecoilState(UserState);
  const [wishCart] = useRecoilState(wishListState);
  const router = useRouter()
  
  const handleLogout = () => {
    logOutState({isLoggedIn: false, userName: ""})
    router.push("/")
    setIsOpen(!isOpen);
    setIconClick(false)
  }

  const toggleAccountMenu = () => {
    setIsOpen(!isOpen);
    setIconClick(false)
  } 

  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center items-center">
      <button
        className="font-bold hover:text-RED transition ease-in-out hover:-translate-z-1 hover:scale-125"
        onClick={toggleMenu}>
        <i 
        onClick={() => {setIconClick(!iconClick);}}
        className={`bi bi-filter-circle-fill text-4xl ${iconClick ? "text-RED" : "text-white"}`}></i>
      </button>
      {isOpen && (
        <div className="h-screen !z-50 w-screen fixed bottom-0 left-0"
        onClick={toggleAccountMenu}>
        <div className="fixed top-16 right-5  p-2 rounded-3xl h-auto w-64 bg-white "
        onClick={(e) => e.stopPropagation()}>
          <div className="flex flex-col items-center gap-2">
                <ul className="flex flex-col gap-2 w-full items-center">
                {isLoggedIn ? (
                  <>
                  <Link href="/wishlist" className="rounded-3xl w-full flex text-dark justify-center hover:bg-dark/5 relative py-1">
                    Wishlist
                    <p className="absolute top-2 right-12 text-[12px] text-white font-bold">
                      <span className="bg-RED rounded-full px-[5px] text-center">{wishCart.length}</span>
                    </p>
                  </Link>
                  <li className="rounded-3xl w-full flex justify-center text-dark hover:bg-dark/5 py-1">
                    Earnings
                  </li>
                  <li className="rounded-3xl flex justify-center text-dark hover:bg-dark/5 py-1 w-full">
                    Settings
                  </li>
                    <button
                    onClick={handleLogout}
                    className=" bg-RED py-1 hover:!bg-dark duration-150 text-white font-bold rounded-3xl w-full flex justify-center">
                      Log Out
                    </button>
                  </>
                ) : (
                  <>
                  <Link href="/wishlist" className="rounded-3xl w-full flex text-dark justify-center hover:bg-dark/5 relative py-1">
                    Dashboard
                  </Link>
                  <li className="rounded-3xl w-full flex justify-center text-dark hover:bg-dark/5 py-1">
                    Earnings
                  </li>
                  <li className="rounded-3xl flex justify-center text-dark hover:bg-dark/5 py-1 w-full">
                    Settings
                  </li>
                  </>
                  )}
              </ul>
            </div>
          </div>
        </div>
        )}
      </div>
  );
};
