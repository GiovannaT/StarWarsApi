import { RxPlus, RxCross1 } from "react-icons/rx";
import * as Dialog from "@radix-ui/react-dialog";
import * as ScrollArea from "@radix-ui/react-scroll-area";

import "./index.css";
import { useState, useEffect, useRef } from "react";
import { setCardImage } from "./utils/setCardImage";

function App() {
  var selectedCharacter = useRef();

  var source = "characters/11.png";

  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState("");
  const [characters, setCharacters] = useState([]);
  const [mainCharacter, setMainCharacter] = useState(selectedCharacter);

  const filtered = search
    ? characters.filter((d) => d.name.includes(search))
    : null;

  function getDateYear(date) {
    var formatedDate = new Date(date);
    return formatedDate.getFullYear();
  }

  function handleCharacterNumber(url) {
    const urlIndex = url.replaceAll("/", " ").trim().split(" ").slice(-1);
    return urlIndex;
  }

  function onSelectCharacter(url) {
    selectedCharacter = handleCharacterNumber(url);
    setPrincipalCharacter(selectedCharacter);
  }

  function setPrincipalCharacter(index) {
    const characterUrl = "https://swapi.dev/api/people/" + index;
    fetch(characterUrl)
      .then((response) => response.json())
      .then((data) => {
        setMainCharacter(data);
      });
  }

  useEffect(() => {
    setPrincipalCharacter(11);

    fetch("https://swapi.dev/api/films/")
      .then((response) => response.json())
      .then((data) => setFilms(data.results));

    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <>
      <section
        id="#onboarding"
        className="onboarding w-screen h-screen flex flex-col items-center p-10"
      >
        <div className="border border-y-2 border-x-0 text-center text-lg tracking-wider">
          <img src="icons/LogoStarWars.svg"></img>
          <p className="uppercase font-lexend font-light text-white">
            discovery
          </p>
        </div>
        <div className="onboarding-links flex h-screen items-center">
          <div className="onboarding-link hover:border hover:border-y-2 hover:border-x-0 transition-all duration-75 p-5 m-3 ">
            <a
              href="#films"
              className="flex flex-col items-center font-lexend text-3xl uppercase font-bold text-white text-2xl"
            >
              <img src="icons/films.svg" alt="films" className="w-24 my-5" />
              Films
            </a>
          </div>
          <div className="onboarding-link hover:border hover:border-y-2 hover:border-x-0 transition-all duration-75 p-5 m-3 ">
            <a
              href="#characters"
              className="flex flex-col items-center font-lexend text-3xl uppercase font-bold text-white text-2xl"
            >
              <img
                src="icons/characters.svg"
                alt="Characters"
                className="w-24 my-5"
              />
              Characters
            </a>
          </div>
          <div className="onboarding-link hover:border hover:border-y-2 hover:border-x-0 transition-all duration-75 p-5 m-3  ">
            <a
              href="#species"
              className="flex flex-col items-center font-lexend text-3xl uppercase font-bold text-white text-2xl"
            >
              <img
                src="icons/species.svg"
                alt="Characters"
                className="w-24 my-5"
              />
              Species
            </a>
          </div>
          <div className="onboarding-link hover:border hover:border-y-2 hover:border-x-0 transition-all duration-75 p-5 m-3  ">
            <a
              href="#planets"
              className="flex flex-col items-center font-lexend text-3xl uppercase font-bold text-white text-2xl"
            >
              <img
                src="icons/planets.svg"
                alt="Characters"
                className="w-24 my-5"
              />
              Planets
            </a>
          </div>
          <div className="onboarding-link hover:border hover:border-y-2 hover:border-x-0 transition-all duration-75 p-5 m-3  ">
            <a
              href="#starships"
              className="flex flex-col items-center font-lexend text-3xl uppercase font-bold text-white text-2xl"
            >
              <img
                src="icons/starships.svg"
                alt="Characters"
                className="w-24 my-5"
              />
              Starships
            </a>
          </div>
          <div className="onboarding-link hover:border hover:border-y-2 hover:border-x-0 transition-all duration-75 p-5 m-3  ">
            <a
              href="#vehicles"
              className="flex flex-col items-center font-lexend text-3xl uppercase font-bold text-white text-2xl"
            >
              <img
                src="icons/vehicles.svg"
                alt="Characters"
                className="w-24 my-5"
              />
              Vehicles
            </a>
          </div>
        </div>
      </section>

      <section id="films" className="films flex w-fill h-screen p-10">
        <div className="display:inline align-middle items-center w-11/12 flex-nowrap overflow-auto">
              {films.map((film) => {
                return (
                  <div key={film.episode_id}>
                    <div className="w-96 h-72 bg-black rounded-lg bg-opacity-60 m-2 text-white flex items-center justify-between">
                      <div className="h-fit">
                        {setCardImage(film.episode_id)}
                      </div>
                      <div className="flex h-100 flex-col h-full justify-between text-center items-center py-10">
                        <h1 className="font-lexend uppercase font-bold text-2xl w-2/3">
                          {film.title}
                        </h1>
                        <Dialog.Root>
                          <Dialog.Trigger asChild>
                            <button>
                              <RxPlus />
                            </button>
                          </Dialog.Trigger>
                          <Dialog.Portal>
                            <Dialog.Overlay className="DialogOverlay" />
                            <Dialog.Content className="DialogContent bg-zinc-900 w-5/6 rounded-2xl py-10 px-20">
                              <header className="flex items-start justify-between">
                                <Dialog.Title className="DialogTitle text-3xl font-bold text-white">
                                  {film.title}
                                </Dialog.Title>
                                <div className="flex flex-col items-end">
                                  <label className="text-gray-500 text-sm">
                                    Director:
                                  </label>
                                  <p className="text-white text-xl">
                                    {film.director}
                                  </p>
                                </div>
                                <div className="flex flex-col items-end">
                                  <label className="text-gray-500 text-sm">
                                    Producer:
                                  </label>
                                  <p className="text-white text-xl">
                                    {film.producer}
                                  </p>
                                </div>
                                <div className="flex flex-col items-end">
                                  <label className="text-gray-500 text-sm">
                                    Year:
                                  </label>
                                  <p className="text-white text-xl">
                                    {getDateYear(film.release_date)}
                                  </p>
                                </div>
                                <Dialog.Close asChild>
                                  <button
                                    className="IconButton text-white"
                                    aria-label="Close"
                                  >
                                    <RxCross1 />
                                  </button>
                                </Dialog.Close>
                              </header>
                              <article className="flex">
                                <div className="bg-gray-500 w-80 h-auto rounded-lg p-5 bg-opacity-10 text-white text-lg font-base">
                                  {film.opening_crawl}
                                </div>
                                <div className="p-5">
                                  <label className="text-gray-500">
                                    Characters
                                  </label>
                                  <div className="grid grid-cols-2">
                                    {/* {film.characters.map((character) => 
                        {
                          return (<div key={character}>
                            <p>{handleCharacterName(character)}</p>
                          </div>)
                          })} */}
                                  </div>
                                </div>
                              </article>
                            </Dialog.Content>
                          </Dialog.Portal>
                        </Dialog.Root>
                        <p className="font-lexend font-bold text-2xl">
                          {getDateYear(film.release_date)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </section>

      <section id="characters">
        <div className="characters w-screen h-screen grid grid-cols-3">
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
              src={source}
              loading="lazy"
              className="justify-self-center self-end z-10 h-5/6 absolute pr-40 object-bottom"
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
                <h1 className="text-white capitalize ">
                  {mainCharacter.gender}
                </h1>
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
              className="m-10 w-1/2 bg-zinc-700 rounded-sm p-2"
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
              ? filtered.map((data) => {
                  return (
                    <div
                      onClick={() => {
                        onSelectCharacter(data.url);
                      }}
                      className="flex flex-col max-h-72 p-5 bg-black bg-opacity-50 w-auto rounded-lg cursor-pointer font-lexend font-bold text-white items-center"
                    >
                      {data.name}
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
            <div>Paginação</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
