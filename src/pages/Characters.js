import { useState, useEffect, useRef } from "react";
import "../index.css";

const Characters = () => {
  var selectedCharacter = useRef();

  const [search, setSearch] = useState("");
  const [imgSource, setImgSource] = useState("");
  const [characters, setCharacters] = useState([]);
  const [mainCharacter, setMainCharacter] = useState(selectedCharacter);

  const filteredCharacters = search
    ? characters.filter((d) => d.name.includes(search))
    : null;

  function handleCharacterNumber(url) {
    const urlIndex = url.replaceAll("/", " ").trim().split(" ").slice(-1);
    return urlIndex;
  }

  function onSelectCharacter(url) {
    selectedCharacter = handleCharacterNumber(url);
    setPrincipalCharacter(selectedCharacter);
  }

  function setPrincipalCharacter(index) {
    setImgSource(`../characters/${index}.png`);
    const characterUrl = "https://swapi.dev/api/people/" + index;
    fetch(characterUrl)
      .then((response) => response.json())
      .then((data) => {
        setMainCharacter(data);
      });
  }

  useEffect(() => {
    setPrincipalCharacter(11);

    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);
  return (
    <section id="characters">
      <div className="characters w-screen h-screen grid grid-cols-3 items-end scroll-smooth">
        <div className="justify-self-start self-end absolute z-20">
          <div className="flex items-end justify-end p-10">
            <h1 className="text-5xl font-lexend uppercase text-white font-bold">
              {mainCharacter.name}
            </h1>
            <p className="text-2xl px-2 font-lexend uppercase text-white">
              {mainCharacter.birth_year}
            </p>
          </div>
        </div>

        {mainCharacter ? (
          <img
            src={imgSource}
            loading="lazy"
            className="justify-self-center z-10 h-5/6 absolute pr-40 object-bottom"
            alt={mainCharacter.name}
          />
        ) : (
          <p>image unknown</p>
        )}

        <div className="justify-self-end w-1/2 h-4/5 self-end absolute z-0 bg-zinc-900 rounded-t-md">
          <div className="flex font-lexend justify-end px-10 py-5">
            <div className="flex flex-col items-end mx-5">
              <p className="text-gray-500">Height:</p>
              <h1 className="text-white">{mainCharacter.height}cm</h1>
            </div>
            <div className="flex flex-col items-end mx-5">
              <p className="text-gray-500">Mass:</p>
              <h1 className="text-white">{mainCharacter.mass}kg</h1>
            </div>
            <div className="flex flex-col items-end mx-5">
              <p className="text-gray-500">Hair:</p>
              <h1 className="text-white capitalize ">
                {mainCharacter.hair_color}
              </h1>
            </div>
            <div className="flex flex-col items-end mx-5">
              <p className="text-gray-500">Skin:</p>
              <h1 className="text-white capitalize ">
                {mainCharacter.skin_color}
              </h1>
            </div>
            <div className="flex flex-col items-end mx-5">
              <p className="text-gray-500">Eyes:</p>
              <h1 className="text-white capitalize ">
                {mainCharacter.eye_color}
              </h1>
            </div>
          </div>
          <div className="flex font-lexend justify-end px-10 py-5">
            <div className="flex flex-col items-end mx-5">
              <p className="text-gray-500">Gender:</p>
              <h1 className="text-white capitalize ">{mainCharacter.gender}</h1>
            </div>
            <div className="flex flex-col items-end mx-5">
              <p className="text-gray-500">HomeWorld:</p>
              <h1 className="text-white">{mainCharacter.homeworld}</h1>
            </div>
            <div className="flex flex-col items-end mx-5">
              <p className="text-gray-500">Species:</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen bg-zinc-900">
        <div className="flex items-center">
          <input
            className="m-10 w-1/2 bg-zinc-700 rounded-sm p-2 focus:outline-none"
            placeholder="Find any character"
            type="text"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          ></input>
        </div>
        <div className="grid grid-cols-5 gap-4 px-10 h-screen">
          {search
            ? filteredCharacters.map((filteredCharacter) => {
                return (
                  <div
                    key={filteredCharacter.url}
                    onClick={() => {
                      onSelectCharacter(filteredCharacter.url);
                    }}
                    className="flex flex-col max-h-72 p-5 bg-black bg-opacity-50 w-auto rounded-lg cursor-pointer font-lexend font-bold text-white items-center"
                  >
                    {filteredCharacter.name}
                  </div>
                );
              })
            : characters.map((character) => {
                return (
                  <div
                    key={character.url}
                    onClick={() => {
                      onSelectCharacter(character.url);
                    }}
                    className="flex flex-col p-5 bg-black bg-opacity-50 w-auto rounded-lg cursor-pointer font-lexend font-bold text-white items-center max-h-72"
                  >
                    {character.name}
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default Characters;
