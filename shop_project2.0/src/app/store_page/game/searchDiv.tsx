import SearchState from "@/app/atoms/searchState";
import { useRecoilState } from "recoil";

export default function SearchInputDiv() {
  const [searchTerm, setSearchTerm] = useRecoilState(SearchState);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm({ searchString: e.target.value });
  };

  const resetSearch = () => {
    setSearchTerm({searchString: ""})
  }

  return (
    <>
      <div className="bg-dark w-full p-2 flex justify-center items-center relative">
        <div className="relative w-3/4 md:w-1/2">
        <input
          type="text"
          placeholder="Search. . ."
          className="py-2 pl-12 rounded-full w-full text-dark !border-none focus:ring-0"
          value={searchTerm.searchString}
          onChange={handleSearch}
        />
        <i className="bi bi-search absolute left-0 bg-RED px-[12px] py-2 rounded-full cursor-pointer"></i>
        {searchTerm.searchString === "" ? null : (
          <i className="bi bi-x bg-RED px-[8px] py-1 
          rounded-full text-2xl absolute right-0 cursor-pointer"
          onClick={resetSearch}></i>
        )}

        </div>
      </div>
      <div className="h-1 w-full bg-RED" />
    </>
  );
}