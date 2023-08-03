import { useState, useEffect } from "react";
import {
  filterByType,
  filterByWeaknesses,
  getListOf,
} from "../helpers/poke.helpers";
import { Link } from "react-router-dom";

export default function PokePage(props) {
  const [list, setList] = useState([]);
  const [searchType, setSearchType] = useState("");
  const [searchWeaknesses, setSearchWeaknesses] = useState("");

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

  let pokeByWeaknesses = filterByWeaknesses(list, searchWeaknesses);
  let weaknesses = getListOf(list, "weaknesses");
  let pokeByType = filterByType(list, searchType);
  let type = getListOf(list, "type");
  //console.log(type, weaknesses)
  return (
    <div>
      <h1>Pokemon By Types and Weaknesses</h1>
      <h4>Click on a name to see more</h4>
      <form>
        <label htmlFor="searchType">Filter By Type</label>
        <select
          name="searchType"
          id="searchType"
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="">All</option>
          {type.map((type, index) => {
            return (
              <option key={type + index} value={type}>
                {type}
              </option>
            );
          })}
        </select>
      </form>
      <form>
        <label htmlFor="searchWeaknesses">Filter By Weaknesses</label>
        <select
          name="searchWeaknesses"
          id="searchWeaknesses"
          value={searchWeaknesses}
          onChange={(e) => setSearchWeaknesses(e.target.value)}
        >
          <option value="">All</option>
          {weaknesses.map((weaknesses, index) => {
            return (
              <option key={weaknesses + index} value={weaknesses}>
                {weaknesses}
              </option>
            );
          })}
        </select>
      </form>
      <ul>
        {pokeByType.map((poke) => {
          return (
            <li key={poke.id}>
              <Link to={`/pokes/poke/${poke.id}`}>{poke.name}</Link>:{" "}
              <b>num: </b> {poke.num} <b> type: </b>
              {poke.type} <b> weaknesses: </b> {poke.weaknesses}
            </li>
          );
        })}
      </ul>
      <ul>
        {pokeByWeaknesses.map((poke) => {
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
}
