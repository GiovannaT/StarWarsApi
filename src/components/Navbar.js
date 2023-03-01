import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <>
        <div className="text-white text-xl font-lexend uppercase">
            <Link to="/films" className="p-2">Films</Link>
            <Link to="/characters" className="p-2">Characters</Link>
            <Link to="/species" className="p-2">Species</Link>
            <Link to="/planets" className="p-2">Planets</Link>
            <Link to="/starships" className="p-2">Starships</Link>
            <Link to="/vehicles" className="p-2">Vehicles</Link>
        </div>
        </>
    )
}