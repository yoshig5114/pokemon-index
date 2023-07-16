import { useState, useEffect } from "react";

export function PokeList(props) {
  const [list, setList] = useState([]);

  function getPoke() {
    fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data[0].title);
        let newArr = [];
        for (let i = 0; i < data.length; i++) {
          newArr.push(data[i].title);
        }
        setList(newArr);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    getPoke();
  }, []);

  return (
    <div>
      <ul>
        {list.map((poke, index) => {
          return <li key={index + poke}>{poke}</li>;
        })}
      </ul>
    </div>
  );
}
