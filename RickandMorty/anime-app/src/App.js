import React from "react";
import { useState, useEffect } from "react";

import Header from "./components/Header";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [search, setSearch] = useState("");
  const [index, setIndex] = useState(1);

  // console.log(Object.entries(characters));

  console.log(characters);

  const url = "https://rickandmortyapi.com/api/character";

  const getApi = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getApi(url);
  }, []);

  const onPrev = () => {
    getApi(info.prev);
    setIndex(index - 1);
  };

  const onNext = () => {
    getApi(info.next);
    setIndex(index + 1);
  };

  return (
    <div>
      <div className="App">
        <Header
          index={index}
          setSearch={setSearch}
          search={search}
          characters={characters}
          info={info}
          onNext={onNext}
          onPrev={onPrev}
        />
      </div>
    </div>
  );
}

export default App;
