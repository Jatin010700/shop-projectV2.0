import { Button } from "flowbite-react";
import LoginModal from "./loginModal";
import RegisterModal from "./registerModal";
import { useRecoilState } from "recoil";
import { modalState } from "@/app/atoms/userState";

export default function AuthModalContainer() {
    const [modal, setModal] = useRecoilState(modalState);
  
    const openLoginModal = () => {
      setModal({
        logInModal: true,
        createAccountModal: false,
      });
    };
  
    return (
      <>
        <Button
          onClick={openLoginModal}
          className="rounded-full bg-RED !border-none focus:ring-0 font-bold shadow-xl absolute right-20 button">
          LOGIN
        </Button>
        
        {/* Conditionally render the LoginModal */}
        {modal.logInModal ? (
          <LoginModal />
        ) : null}
  
        {/* Conditionally render the RegisterModal */}
        {modal.createAccountModal ? (
          <RegisterModal />
        ) : null}
      </>
    );
  }
  