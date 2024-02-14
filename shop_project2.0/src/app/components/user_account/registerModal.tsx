"use client";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

export default function RegisterModal() {
  const [openModal, setOpenModal] = useState(false);
  const [userName, setUserName] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setUserName("");
  }

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className="rounded-full bg-RED border-1 border-RED font-bold shadow-xl hover:scale-110 duration-150"
      >
        Create Account
      </Button>
      <Modal
        dismissible
        show={openModal}
        size="md"
        onClose={onCloseModal}
        popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl text-RED font-bold">
              Register to our platform
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your Username:" className="font-bold" />
              </div>
              <input type="text" 
              value={userName} 
              className="w-full rounded-full text-dark text-sm"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
              required/>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password:" className="font-bold" />
              </div>
              <input type="password" 
              className="w-full rounded-full text-dark text-sm"
              placeholder="********"
              required/>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" className="text-RED border-RED"/>
                <Label htmlFor="remember" className="font-bold">Remember me</Label>
              </div>
              <a
                href="#"
                className="text-sm text-RED font-bold hover:underline dark:text-cyan-500"
              >
                Lost Password?
              </a>
            </div>
            <div className="w-full flex justify-center">
              <Button className="text-dark rounded-full w-full bg-RED font-bold hover:scale-110 duration-150">
                Register your account</Button>
            </div>
            <p className="font-bold text-dark">Note: This project does not have registering feature
            <span className="text-RED ml-1">Please use account detail in login page?</span></p>
            <div className="flex justify-between text-sm font-medium text-RED ">
              Not registered?&nbsp;
              <a
                href="#"
                className="text-cyan-700 hover:underline dark:text-cyan-500">
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
