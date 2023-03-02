import { useEffect, useState } from "react";

const Species = () => {
    var defaultSpecie = "https://swapi.dev/api/species/1/"
  const [species, setSpecies] = useState([]);
  const [mainSpecie, setMainSpecie] = useState([]);

  function setPrincipalSpecie(url){
    fetch(url)
    .then(response => response.json())
    .then(data => setMainSpecie(data))
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
        <section className="w-1/2 h-screen bg-zinc-900 p-10 text-3xl flex flex-col justify-center text-gray-400 font-lexend font-bold ">
          {species.map((specie) => {
            return (
              <ul key={specie.url}>
                <button 
                onClick={()=>{setMainSpecie(specie.url)}}
                className="hover:text-white hover:cursor-pointer uppercase py-2">
                  {specie.name}
                </button>
              </ul>
            );
          })}
        </section>
        <section className="w-1/2">
          <div className="p-10">
            <div className="flex items-end text-white font-lexend pb-5 justify-between">
              <h1 className="uppercase  text-6xl font-bold">{mainSpecie.name}</h1>
              <h3 className="uppercase text-xl font-light ">{mainSpecie.classification}</h3>
              <h3 className="uppercase text-xl font-bold ">{mainSpecie.designation}</h3>
            </div>
            <hr></hr>
            <div className="grid grid-cols-3 gap-10 font-lexend text-xl font-light py-5">
              <div className="text-end">
                <div className="flex flex-col">
                  <p className="text-white uppercase">{mainSpecie.average_height}CM</p>
                  <legend className="text-gray-300">avg height</legend>
                </div>
                <div className="flex flex-col py-10">
                  <p className="text-white uppercase">{mainSpecie.skin_colors}</p>
                  <legend className="text-gray-300">skin colors</legend>
                </div>
              </div>
              <div className="text-end">
                <div className="flex flex-col">
                  <p className="text-white uppercase">{mainSpecie.average_lifespan}Y</p>
                  <legend className="text-gray-300">avg lifespan</legend>
                </div>
                <div className="flex flex-col py-10">
                  <p className="text-white uppercase">{mainSpecie.hair_colors}</p>
                  <legend className="text-gray-300">hair colors</legend>
                </div>
              </div>
              <div className="text-end">
                <div className="flex flex-col">
                  <p className="text-white uppercase">{mainSpecie.language}</p>
                  <legend className="text-gray-300">language</legend>
                </div>
                <div className="flex flex-col py-10">
                  <p className="text-white uppercase">{mainSpecie.eye_colors}</p>
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
