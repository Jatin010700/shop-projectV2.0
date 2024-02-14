import { atom } from "recoil"

const UserState = atom({
    key: "UserState",
    default: {
      isLoggedIn: false,
      userName: "",
    },
  });

  export default UserState