"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import RegisterModal from "./registerModal";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import UserState from "@/app/atoms/userState";
import toast from "react-hot-toast";
import Preloader from "../extra/preloader";

export default function LoginModal() {
  const [openModal, setOpenModal] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [iconClick, setIconClick] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const setUserState = useSetRecoilState(UserState);

  function onCloseModal() {
    setOpenModal(false);
    setUserName("");
    setPassword("");
  }

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "/api/login",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Check response status using response.status
      if (response.status === 200) {
        const data = response.data; // Use response.data directly
        toast.success(`${data.message}`, {
          style: {
            fontWeight: "bold",
            borderRadius: "100px",
          },
        });
        onCloseModal();
      }
      setUserState({ isLoggedIn: true, userName: username });
    } catch (error) {
      toast.error("Invalid Username or Password", {
        style: {
          fontWeight: "bold",
          borderRadius: "100px",
        },
      });
      console.error("Error during login:", error);
      setIsLoading(false);
    }
  };
  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className="rounded-full bg-RED !border-none focus:ring-0  font-bold shadow-xl hover:scale-110 duration-150"
      >
        LOGIN
      </Button>
      <Modal
        dismissible
        show={openModal}
        size="md"
        onClose={onCloseModal}
        popup
      >
        <div className="text-dark flex justify-end px-6 pt-6">
          <button onClick={onCloseModal}>
            <i className="bi bi-x-circle-fill text-2xl hover:text-RED scale-105 duration-150"></i>
          </button>
        </div>
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl text-RED font-bold">
              Sign in to our platform
            </h3>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="email"
                  value="Your Username:"
                  className="font-bold"
                />
              </div>
              <input
                type="text"
                value={username}
                className="w-full rounded-full text-dark text-sm border-1 focus:border-RED focus:ring-0"
                placeholder="Username"
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="password"
                  value="Your password:"
                  className="font-bold"
                />
              </div>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full rounded-full text-dark text-sm border-1 focus:border-RED focus:ring-0"
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
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  className="text-RED border-1 focus:border-RED focus:ring-0"
                />
                <Label htmlFor="remember" className="font-bold">
                  Remember me
                </Label>
              </div>
              <a
                href="#"
                className="text-sm text-RED font-bold hover:underline dark:text-cyan-500"
              >
                Lost Password?
              </a>
            </div>
            <div className="w-full flex justify-center">
              <Button
                className="text-white rounded-full w-full 
              bg-RED font-bold hover:scale-105 duration-150 shadow-xl !border-none focus:ring-0"
                onClick={handleLogin}
              >
                {isLoading ? (
                  <Preloader
                    preloaderSize="20"
                    preloaderColor="#ffffff"
                    className=""
                  />
                ) : (
                  "Log In to your Account"
                )}
              </Button>
            </div>
            <p className="font-bold text-RED"><span className="text-dark">Account detail:</span>Test, 123</p>
            <div className="flex justify-between items-center text-sm text-dark font-bold">
              Not registered?&nbsp;
              {/* register modal button */}
              <RegisterModal />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
