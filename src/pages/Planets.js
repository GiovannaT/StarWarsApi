import { useEffect, useState } from "react";

const Planets = () => {

    const [planets,setPlanets] = useState([]);

    useEffect(()=>{
        fetch("https://swapi.dev/api/planets/")
        .then(response => response.json())
        .then(data => setPlanets(data.results))
    },[])

    return (
        <div className="planets w-screen h-screen flex">
            {planets.map(planet => {
                return(
                    <ul key={planet.url} className="text-white">
                        <li className="p-2">{planet.name}</li>
                    </ul>)
            })}
        </div>
    )
};

export default Planets;