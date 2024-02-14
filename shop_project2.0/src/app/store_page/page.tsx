"use client";
import React from "react";
import SearchInputDiv from "./game/searchDiv";
import { useRecoilValue } from "recoil";
import SearchState from "../atoms/searchState";
import ShopStore from "./storeMainPage";
import Game from "./game/page";

export default function StoreMain() {
  const searchString = useRecoilValue(SearchState).searchString;

  return (
    <>
      {searchString === "" && <SearchInputDiv />}
      {searchString !== "" ? <Game /> : <ShopStore />}
    </>
  );
}

//Some Issues with searchInput need to be Fix