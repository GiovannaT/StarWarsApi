import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import "../index.css";

const Characters = () => {
  var selectedCharacter = useRef();

  const [search, setSearch] = useState("");
  const [imgSource, setImgSource] = useState("");
  const [characters, setCharacters] = useState([]);
  const [selectedSearchPage, setSelectedSearchPage] = useState();
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

  function selectPage(index) {
    setSelectedSearchPage(index);
    var url = "https://swapi.dev/api/people/?page=" + index;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }

  useEffect(() => {
    setPrincipalCharacter(11);

    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <section
      id="characters"
      className="characters flex flex-col pt-10 items-center"
    >
      <Navbar></Navbar>
      <div className="w-screen h-screen grid grid-cols-3 items-end scroll-smooth">
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
      <div className="w-screen h-fit bg-zinc-900">
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
        <div className="grid grid-cols-5 gap-4 px-10 h-fit">
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
        <div className="text-white font-lexend flex justify-center py-5">
          <ul className="flex">
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={() => selectPage(1)}
                className="p-2 hover:text-green-500"
              >
                1
              </button>
              {selectedSearchPage == 1 ? (
                <div className="bg-green-500 w-2 h-2 animate-pulse rounded-full"></div>
              ) : null}
            </div>
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={() => selectPage(2)}
                className="p-2 hover:text-green-500"
              >
                2
              </button>
              {selectedSearchPage == 2 ? (
                <div className="bg-green-500 w-2 h-2 animate-pulse rounded-full"></div>
              ) : null}
            </div>
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={() => selectPage(3)}
                className="p-2 hover:text-green-500"
              >
                3
              </button>
              {selectedSearchPage == 3 ? (
                <div className="bg-green-500 w-2 h-2 animate-pulse rounded-full"></div>
              ) : null}
            </div>
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={() => selectPage(4)}
                className="p-2 hover:text-green-500"
              >
                4
              </button>
              {selectedSearchPage == 4 ? (
                <div className="bg-green-500 w-2 h-2 animate-pulse rounded-full"></div>
              ) : null}
            </div>
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={() => selectPage(5)}
                className="p-2 hover:text-green-500"
              >
                5
              </button>
              {selectedSearchPage == 5 ? (
                <div className="bg-green-500 w-2 h-2 animate-pulse rounded-full"></div>
              ) : null}
            </div>
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={() => selectPage(6)}
                className="p-2 hover:text-green-500"
              >
                6
              </button>
              {selectedSearchPage == 6 ? (
                <div className="bg-green-500 w-2 h-2 animate-pulse rounded-full"></div>
              ) : null}
            </div>
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={() => selectPage(7)}
                className="p-2 hover:text-green-500"
              >
                7
              </button>
              {selectedSearchPage == 7 ? (
                <div className="bg-green-500 w-2 h-2 animate-pulse rounded-full"></div>
              ) : null}
            </div>
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={() => selectPage(8)}
                className="p-2 hover:text-green-500"
              >
                8
              </button>
              {selectedSearchPage == 8 ? (
                <div className="bg-green-500 w-2 h-2 animate-pulse rounded-full"></div>
              ) : null}
            </div>
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={() => selectPage(9)}
                className="p-2 hover:text-green-500"
              >
                9
              </button>
              {selectedSearchPage == 9 ? (
                <div className="bg-green-500 w-2 h-2 animate-pulse rounded-full"></div>
              ) : null}
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Characters;
