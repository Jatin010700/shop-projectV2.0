import { atom } from "recoil"

interface StoreModel {
    _id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }

  interface MongooseModel {
    _id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }

const wishListState = atom({
    key: "wishListState",
    default: <StoreModel[]><MongooseModel[]>([])
})

export default wishListState