import { atom } from "recoil"

const SearchState = atom({
    key: "SearchState",
    default: {
      searchString: ""
    },
  });

  export default SearchState