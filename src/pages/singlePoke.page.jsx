import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function SinglePokePage() {
  const  [item, setItem]  = useState({});
  const { id } = useParams();
  console.log(id);

  function getPoke(){
    fetch(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`)
      .then((res) => {
        return res.json();
      })
      .then((data)=>{
        let objToArray = data.pokemon
        setItem(objToArray[id-1])
      })
      .catch((err)=>{
        console.log(err.message)
      });
  }

  useEffect(()=>{
    getPoke();
  },[]);

  return (
    <div>
      <div>
        <img src={`${item.img}`} alt={`${item.name}`}/>
      </div>
      <div>
        <h1>{item.name}</h1>
        <p>
          Info: number: {item.num}. type: {item.type}. weaknesses: {item.weaknesses}
        </p>
      </div>
    </div>
  );
}
