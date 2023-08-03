import React, { useState,useEffect } from 'react';
import { getListOf, handleSearch } from '../helpers/poke.helpers';
import { Link } from "react-router-dom";



const SearchBar = (prop) => {
  const [list, setList] = useState([]);
  function getPoke() {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        let objToArray = data.pokemon;
        setList(objToArray);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    getPoke();
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
 
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  let pokeByName = handleSearch(list, searchTerm)

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>

     <ul>
     {pokeByName.map((poke) => {
       return (
         <li key={poke.id}>
           <Link to={`/pokes/poke/${poke.id}`}>{poke.name}</Link>:{" "}
           <b>num: </b> {poke.num} <b> type: </b>
           {poke.type} <b> weaknesses: </b> {poke.weaknesses}
         </li>
       );
     })}
   </ul>
    </div>
  );
};

export default SearchBar;