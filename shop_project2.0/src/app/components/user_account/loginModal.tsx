"use client";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import {UserState, modalState} from "@/app/atoms/userState";
import toast from "react-hot-toast";
import Preloader from "../extra/preloader";

export default function LoginModal() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [iconClick, setIconClick] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const setUserState = useSetRecoilState(UserState);
  const [modal, setModal] = useRecoilState(modalState);

  function onCloseModal() {
    setUserName("");
    setPassword("");

    setModal({
      logInModal: false,
      createAccountModal: false,
    });
  };

  const openCreateAccountModal = () => {
    setModal({
      logInModal: false,
      createAccountModal: true,
    });
  };
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
      setIsLoading(false);
    }
  };

  return (
    <>
      <Modal
        dismissible
        show={modal.logInModal}
        size="md"
        onClose={onCloseModal}
        popup>
        <Modal.Body>
          <div className="text-xl text-RED font-bold space-y-6 pt-6 relative">
            <h3 className="text-xl text-RED font-bold">
              Sign in to our platform
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
                Forgot Password?
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
                    preloaderSize="14"
                    preloaderColor="#ffffff"
                    className=""
                  />
                ) : (
                  "LOG IN"
                )}
              </Button>
            </div>
            <p className="font-bold text-RED text-sm">
              <span className=" text-dark">Test Account:</span>Test, 123
            </p>
            <div className="flex justify-between items-center text-sm text-dark font-bold">
              Not registered?
              <Button
                onClick={openCreateAccountModal}
                className="rounded-full bg-RED border-1 border-RED font-bold shadow-xl hover:scale-110 duration-150">
                Create Account
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
