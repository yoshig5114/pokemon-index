import { useState, useEffect } from "react";
import { filterByType, filterByWeakness, getListOf } from "../helpers/poke.helpers";

export default function PokePage(props) {
  const [list, setList] = useState([]);
  const [searchType, setSearchType] = useState("");
  const [searchWeakness, setSearchWeakness] = useState("");

  function getPoke() {
    fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
      .then((response)=>{
          return response.json();
        
      })
      .then((data)=>{
        console.log(data);
        
        setList(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    getPoke();
  }, []);

  let pokeByWeakness = filterByWeakness(list, searchWeakness);
  let weakness = getListOf(list, "weakness");
  let pokeByType = filterByType(list, searchType);
  let type = filterByType(list, "type")

  return (
    <div>
        <h1>Pokemon By Types and Weaknesses</h1>
        <form>
                <label htmlFor="searchType">Filter By Type</label>
                    <select
                       name="searchType" id="searchType" value={searchType} 
                       onChange={(e) => setSearchType(e.target.value)}
                       >
                           <option value="">All</option>
                           {type.map((type, index) => {
                               return(
                                <option key={type + index} value={type}>
                                {type}
                                </option>
                           )})}
                       </select>
        </form>
      <ul>
        {pokeByType.map((poke) => {
          return <li key={poke.num}>{poke.name}</li>;
        })}
      </ul>
    </div>
  );
}
