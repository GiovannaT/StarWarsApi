import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section
        id="#onboarding"
        className="onboarding w-screen h-screen flex flex-col items-center p-10"
      >
        <div className="border border-y-2 border-x-0 text-center text-lg tracking-wider">
          <img src="icons/LogoStarWars.svg" alt="Star Wars"></img>
          <p className="uppercase font-lexend font-light text-white">
            Discovery
          </p>
        </div>
        <div className="onboarding-links flex h-screen items-center">
          <div className="onboarding-link hover:border hover:border-y-2 hover:border-x-0 hover:transition-all duration-100 ease-in-out p-5 m-3 ">
            <Link
              to="/films"
              className="flex flex-col items-center font-lexend text-3xl uppercase font-bold text-white"
            >
             <img src="icons/films.svg" alt="films" className="w-24 my-5" />
            Films 
            </Link>
          </div>
          <div className="onboarding-link hover:border hover:border-y-2 hover:border-x-0 transition-all duration-75 p-5 m-3 ">
            <Link
              to="/characters"
              className="flex flex-col items-center font-lexend text-3xl uppercase font-bold text-white"
            >
              <img
              src="icons/characters.svg"
              alt="Characters"
              className="w-24 my-5"
            />
            Characters
            </Link>
          </div>
          <div className="onboarding-link hover:border hover:border-y-2 hover:border-x-0 transition-all duration-75 p-5 m-3  ">
            <Link
              to="/species"
              className="flex flex-col items-center font-lexend text-3xl uppercase font-bold text-white"
            >
              <img
                src="icons/species.svg"
                alt="Characters"
                className="w-24 my-5"
              />
              Species
            </Link>
          </div>
          <div className="onboarding-link hover:border hover:border-y-2 hover:border-x-0 transition-all duration-75 p-5 m-3  ">
            <a
              href="/planets"
              className="flex flex-col items-center font-lexend text-3xl uppercase font-bold text-white"
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
              href="/starships"
              className="flex flex-col items-center font-lexend text-3xl uppercase font-bold text-white"
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
              href="/vehicles"
              className="flex flex-col items-center font-lexend text-3xl uppercase font-bold text-white"
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
    </>
  );
};

export default Home;
