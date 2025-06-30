import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearched } from "../features/animal";
import { GrSearch } from "react-icons/gr";



const Search = () => {
  const dispatch = useDispatch()

  const [searchText, setSearchText] = useState("");


const handleChange = (e)=>{
  console.log(e.target.value)
  const data=e.target.value
  setSearchText(data)
  dispatch(getSearched(data))
}

  return (
    <div className="block w-xs md:w-2/5 m-auto pb-4">
    <GrSearch className="absolute h-5 w-5 mt-3 ml-3" />

        <input
          type="text"
          placeholder="mammals, birds, reptiles, etc."
          value={searchText}
          onChange={(e) => handleChange(e)}
          className="w-full h-12 pl-10 pr-4 py-3 rounded-2xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
        />
    </div>
  );
};

export default Search;
