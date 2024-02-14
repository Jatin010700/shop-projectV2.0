import { atom } from "recoil"

interface StoreModel {
    _id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }

const wishListState = atom({
    key: "wishListState",
    default: [] as StoreModel[],
})

export default wishListState