"use client";
import { Button, Label, Modal } from "flowbite-react";
import { useState } from "react";
import Preloader from "../extra/preloader";
import { useRecoilState } from "recoil";
import { modalState } from "@/app/atoms/userState";

export default function RegisterModal() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [iconClick, setIconClick] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useRecoilState(modalState);

  function onCloseModal() {
    setUserName("");
    setPassword("");

    setModal({
      logInModal: false,
      createAccountModal: false,
    });
  };

  return (
    <>
      <Modal
        dismissible
        show={modal.createAccountModal}
        size="md"
        onClose={onCloseModal}
        popup>
        <Modal.Body>
          <div className="text-xl text-RED font-bold space-y-6 pt-6 relative">
            <h3 className="text-xl text-RED font-bold">
              Create your personal account
            </h3>
            <button onClick={onCloseModal} className="text-dark absolute top-0 right-0">
              <i className="bi bi-x-circle-fill text-2xl hover:text-RED scale-105 duration-150"></i>
            </button>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="email"
                  value="Username"
                  className="font-bold"
                />
              </div>
              <input
                type="text"
                value={username}
                className="w-full rounded-full text-dark text-sm border-1 focus:border-RED focus:ring-0"
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="mt-2">
              <div className="mb-2 block">
                <Label
                  htmlFor="password"
                  value="Password"
                  className="font-bold"
                />
              </div>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  className="placeholder:translate-y-0.5 w-full rounded-full text-dark text-sm border-1 focus:border-RED focus:ring-0"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <i
                  className={`bi bi-eye-fill absolute right-5 text-lg cursor-pointer ${
                    iconClick ? "text-RED" : "text-dark"
                  } `}
                  onClick={() => {
                    setShowPassword(!showPassword);
                    setIconClick(!iconClick);
                  }}
                ></i>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <Button
                className="text-white rounded-full w-full 
              bg-RED font-bold hover:scale-105 duration-150 shadow-xl !border-none focus:ring-0">
                {isLoading ? (
                  <Preloader
                    preloaderSize="14"
                    preloaderColor="#ffffff"
                    className=""
                  />
                ) : (
                  "CREATE ACCOUNT"
                )}
              </Button>
            </div>
            <p className="font-bold text-dark text-sm">
              Login Account:<span className=" text-RED">Test, 123 <br/>Note:</span>
            This project doesn&apos;t have a registering feature
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
