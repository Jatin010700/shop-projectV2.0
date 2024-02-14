import {atom} from "recoil"

interface StoreModel {
    _id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }
  
export const cartState = atom({
    key: "cartState",
    default: <StoreModel[]>([])
})
