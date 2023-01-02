import { useState, useEffect } from "react";
import data from "./resources/countryData.json";
import "./App.css";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Escape") {
        setList([]);
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  function onChangeHandler(el) {
    let countries = [];
    data.map((e) => {
      if (
        el.target.value &&
        e.name.toLowerCase().search(el.target.value.toLowerCase()) === 0
      ) {
        countries.push(e.name);
      }
    });
    setList(countries);
  }

  return (
    <div className="App">
      <h1>Search</h1>
      <div className="main">
        <input onChange={onChangeHandler} type="text" />
        <button>Search</button>
        <ul className="list">
          {list.map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
