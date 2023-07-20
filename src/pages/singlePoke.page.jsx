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
        setItem(data)
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
        <img src={`${item.image}`} alt={`${item.name }`}/>
      </div>
      <div>
        <h1>{item.name}</h1>
        <p>
          Info: number {item.num}. type {item.type}. weakness {item.weakness}
        </p>
        <p>
         
        </p>
        <h2>Description</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
}
