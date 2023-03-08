import { RxExit } from "react-icons/rx";
const NoPage = () => {
  return (
    <div className="noPage w-screen h-screen bg-zinc-900 flex p-10 items-center justify-center font-lexend font-light">
      <img
        src="./characters/trooper1.png"
        alt="StormTrooper"
        className="w-40"
      ></img>
      <div className="m-10">
        <label className="text-gray-400">Trooper Report:</label>
        <h1 className="text-white text-xl">
          This is not the page you are looking for.. Move along..
        </h1>
        <a
          className="uppercase text-gray-400 hover:text-green-500 py-5 flex items-center"
          href="/"
        >
          <RxExit className="mr-2"/>
          Return to home
        </a>
      </div>
      <img
        src="./characters/trooper2.png"
        alt="StormTrooper"
        className="w-40"
      ></img>
    </div>
  );
};

export default NoPage;
