import React,{ useState } from "react";

export default function HomePage(props) {
    const [list, setList] = useState(["list"]);
    const [text, setText] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        setList([...list, text]);
      }
      
    return (
        <div>
          <h1>Pokemon Index</h1>
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

