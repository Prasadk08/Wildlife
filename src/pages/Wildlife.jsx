import React, { useEffect } from "react";
import { FocusCardsDemo } from "../components/importedUi/FocusCardsDemo";

import Search from "../components/Search";
import { useDispatch, useSelector } from "react-redux";
import { getAnimals } from "../features/animal";

const Wildlife = () => {
  const dispatch = useDispatch()
  const{animals,search}=useSelector((state)=> state.animal)

  useEffect(() => {
    dispatch(getAnimals())
  }, [dispatch]);
 

  const filtered=animals.filter((animal)=>{
    return animal.category.toLowerCase().includes(search.toLowerCase())

  })


    return (
      <div className="w-screen mx-auto px-4 py-4 font-sans antialiased">
      <Search />
        <h1 className="text-4xl font-bold mb-8">Wildlife</h1>
        <p className="text-lg mb-4">
          Explore the beauty of wildlife through our curated collection of
          images and stories.
        </p>
        {filtered.length ? (<FocusCardsDemo cardss={filtered} />) : (<p>No results found</p>)}

      </div>
    );
  
};

export default Wildlife;
