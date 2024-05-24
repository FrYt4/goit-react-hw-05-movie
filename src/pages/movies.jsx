
import { useState } from "react";
import { Search } from "../components/search";
import { Searchbar } from "../components/SearchBar";



export const Movies = () => {
  
    const [foundMovies, setFoundMovies] = useState([])
    const [searchData, setSearchData] = useState()

 
    

    const onChange = (event) => {
    event.preventDefault();
    setSearchData(event.target.value)
  }

    const onClick= (event) => {
        event.preventDefault();
        Search(setFoundMovies,searchData)
  
    };
    
    return (
    
        <div>
             <Searchbar onChange={onChange} onClick={onClick} />
            {foundMovies}
        </div>
  )
}
  