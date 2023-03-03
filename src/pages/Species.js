import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

const Species = () => {
  var defaultSpecie = "https://swapi.dev/api/species/1/";
  const [species, setSpecies] = useState([]);
  const [mainSpecie, setMainSpecie] = useState([]);
  const [selectedSearchPage, setSelectedSearchPage] = useState();

  function setPrincipalSpecie(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMainSpecie(data));
  }

  function selectPage(index) {
    setSelectedSearchPage(index);
    var url = "https://swapi.dev/api/species/?page=" + index;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setSpecies(data.results));
  }

  useEffect(() => {
    setPrincipalSpecie(defaultSpecie);
    fetch("https://swapi.dev/api/species/")
      .then((response) => response.json())
      .then((data) => setSpecies(data.results));
  }, []);

  return (
    <>
      <div className="species w-screen h-screen flex">
        <section className="w-1/2 h-screen bg-zinc-900 text-3xl flex flex-col text-gray-400 font-lexend font-bold ">
          <Navbar className="z-10"/>
          {species.map((specie) => {
            return (
              <ul key={specie.url}>
                <button
                  onClick={() => {
                    setPrincipalSpecie(specie.url);
                  }}
                  className="hover:text-white hover:cursor-pointer uppercase py-2 px-10 transition-colors"
                >
                  {specie.name}
                </button>
              </ul>
            );
          })}
          <ul className="flex font-light text-xl justify-center">
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
            </ul>
        </section>
        <section className="w-1/2">
          <div className="px-10 py-20">
            <div className="flex items-end text-white font-lexend pb-5 justify-between">
              <h1 className="uppercase  text-5xl font-bold">
                {mainSpecie.name}
              </h1>
              <h3 className="uppercase text-xl font-light px-3 ">
                {mainSpecie.classification}
              </h3>
              <h3 className="uppercase text-xl font-bold ">
                {mainSpecie.designation}
              </h3>
            </div>
            <hr></hr>
            <div className="grid grid-cols-3 gap-10 font-lexend text-xl font-light py-5">
              <div className="text-end">
                <div className="flex flex-col">
                  <p className="text-white uppercase">
                    {mainSpecie.average_height}CM
                  </p>
                  <legend className="text-gray-300">avg height</legend>
                </div>
                <div className="flex flex-col py-10">
                  <p className="text-white uppercase">
                    {mainSpecie.skin_colors}
                  </p>
                  <legend className="text-gray-300">skin colors</legend>
                </div>
              </div>
              <div className="text-end">
                <div className="flex flex-col">
                  <p className="text-white uppercase">
                    {mainSpecie.average_lifespan}
                  </p>
                  <legend className="text-gray-300">avg lifespan</legend>
                </div>
                <div className="flex flex-col py-10">
                  <p className="text-white uppercase">
                    {mainSpecie.hair_colors}
                  </p>
                  <legend className="text-gray-300">hair colors</legend>
                </div>
              </div>
              <div className="text-end">
                <div className="flex flex-col">
                  <p className="text-white uppercase">{mainSpecie.language}</p>
                  <legend className="text-gray-300">language</legend>
                </div>
                <div className="flex flex-col py-10">
                  <p className="text-white uppercase">
                    {mainSpecie.eye_colors}
                  </p>
                  <legend className="text-gray-300">eye colors</legend>
                </div>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    </>
  );
};

export default Species;
