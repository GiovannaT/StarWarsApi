import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="text-white text-xl font-lexend uppercase font-bold">
        <Link to="/" className="hover:text-green-400 transition-colors pr-2">Home</Link>
        <Link to="/films" className="hover:text-green-400 transition-colors px-2">Films</Link>
        <Link to="/characters" className="hover:text-green-400 transition-colors px-2">Characters</Link>
        <Link to="/species" className="hover:text-green-400 transition-colors px-2">Species</Link>
        <Link to="/planets" className="hover:text-green-400 transition-colors px-2">Planets</Link>
        <Link to="/starships" className="hover:text-green-400 transition-colors px-2">Starships</Link>
        <Link to="/vehicles" className="hover:text-green-400 transition-colors pl-2">Vehicles</Link>
      </div>
    </>
  );
}
