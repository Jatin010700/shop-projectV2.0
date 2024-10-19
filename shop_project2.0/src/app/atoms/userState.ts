import { atom } from "recoil"

const UserState = atom({
    key: "UserState",
    default: {
      isLoggedIn: false,
      userName: "",
    },
  });

  const modalState = atom({
    key: "modalState",
    default: {
      logInModal: false,
      createAccountModal: false,
    },
  });

  export { UserState, modalState };