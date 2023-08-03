import React,{ useState } from "react";
import SearchBar from "../components/SearchBar";

import { handleSearch } from "../helpers/poke.helpers";

export default function HomePage(props) {
    
    const [list, setList] =useState(["list"])
    const [text, setText] = useState("");
    

    
    

    function handleSubmit(event) {
        event.preventDefault();
        setList([...list, text]);
      }

  
      
    return (
        <div>
          <h1>Pokemon Index</h1>
          <div>
            <h4>search by name or click the link above for filters</h4>
            <SearchBar onSearch={handleSearch} />
           
          </div>
          <h3>Wish List</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit">Add</button>
          </form>
          <ul>
            {list.map((string, index) => {
              return <li key={index + string}>{string}</li>;
            })}
          </ul>
          
        </div>
      );
    }

