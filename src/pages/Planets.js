import { useEffect, useState } from 'react';

import Navbar from '../components/Navbar';

const Planets = () => {
	var defaultPlanet = 'https://swapi.dev/api/planets/1/';

	const [planets, setPlanets] = useState([]);
	const [mainPlanet, setMainPlanet] = useState([]);
	const [selectedSearchPage, setSelectedSearchPage] = useState();

	function setPrincipalPlanet(url) {
		fetch(url)
			.then((response) => response.json())
			.then((data) => setMainPlanet(data));
	}

	function selectPage(index) {
		setSelectedSearchPage(index);
		var url = 'https://swapi.dev/api/planets/?page=' + index;
		fetch(url)
			.then((response) => response.json())
			.then((data) => setPlanets(data.results));
	}

	useEffect(() => {
		setPrincipalPlanet(defaultPlanet);
		fetch('https://swapi.dev/api/planets/')
			.then((response) => response.json())
			.then((data) => setPlanets(data.results));
	}, []);

	return (
		<>
			<div className='planets flex flex-col justify-center items-center'>
				<div className='px-10 pb-5 pt-10'>
					<Navbar />
				</div>
				<section>
					<div className='px-10 py-20 w-screen'>
						<div className='flex items-end text-white font-lexend pb-5 justify-around'>
							<h1 className='uppercase  text-5xl font-bold'>
								{mainPlanet.name}
							</h1>
							<h3 className='uppercase text-xl font-light px-3 '>
								{mainPlanet.climate}
							</h3>
							<h3 className='uppercase text-xl font-bold '>
								{mainPlanet.terrain}
							</h3>
						</div>
						<hr></hr>
						<div className='grid grid-cols-3 gap-20 font-lexend text-xl font-light px-20 py-10'>
							<div className='text-end'>
								<div className='flex flex-col'>
									<p className='text-white uppercase'>
										{mainPlanet.rotation_period}
									</p>
									<legend className='text-gray-300'>rotation period</legend>
								</div>
								<div className='flex flex-col py-10'>
									<p className='text-white uppercase'>
										{mainPlanet.orbital_period}
									</p>
									<legend className='text-gray-300'>orbital period</legend>
								</div>
							</div>
							<div className='text-end'>
								<div className='flex flex-col'>
									<p className='text-white uppercase'>{mainPlanet.diameter}</p>
									<legend className='text-gray-300'>diameter</legend>
								</div>
								<div className='flex flex-col py-10'>
									<p className='text-white uppercase'>{mainPlanet.gravity}</p>
									<legend className='text-gray-300'>gravity</legend>
								</div>
							</div>
							<div className='text-end'>
								<div className='flex flex-col'>
									<p className='text-white uppercase'>
										{mainPlanet.population}
									</p>
									<legend className='text-gray-300'>population</legend>
								</div>
								<div className='flex flex-col py-10'>
									<p className='text-white uppercase'>
										{mainPlanet.surface_water} %
									</p>
									<legend className='text-gray-300'>water surface</legend>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='grid grid-cols-5 gap-5 w-screen bg-zinc-900 justify-items-center p-10 rounded-t-lg'>
					{planets.map((specie) => {
						return (
							<div
								key={specie.url}
								onClick={() => {
									setPrincipalPlanet(specie.url);
								}}
								className='p-5 w-full bg-black bg-opacity-50 w-auto rounded-lg cursor-pointer font-lexend font-bold text-white items-center'
							>
								{specie.name}
							</div>
						);
					})}
					<div className='text-white font-lexend flex justify-center py-5'>
						<ul className='flex font-light text-xl justify-center'>
							<div className='flex flex-col items-center justify-center'>
								<button
									onClick={() => selectPage(1)}
									className='p-2 hover:text-green-500'
								>
									1
								</button>
								{selectedSearchPage == 1 ? (
									<div className='bg-green-500 w-2 h-2 animate-pulse rounded-full'></div>
								) : null}
							</div>
							<div className='flex flex-col items-center justify-center'>
								<button
									onClick={() => selectPage(2)}
									className='p-2 hover:text-green-500'
								>
									2
								</button>
								{selectedSearchPage == 2 ? (
									<div className='bg-green-500 w-2 h-2 animate-pulse rounded-full'></div>
								) : null}
							</div>
							<div className='flex flex-col items-center justify-center'>
								<button
									onClick={() => selectPage(3)}
									className='p-2 hover:text-green-500'
								>
									3
								</button>
								{selectedSearchPage == 3 ? (
									<div className='bg-green-500 w-2 h-2 animate-pulse rounded-full'></div>
								) : null}
							</div>
							<div className='flex flex-col items-center justify-center'>
								<button
									onClick={() => selectPage(4)}
									className='p-2 hover:text-green-500'
								>
									4
								</button>
								{selectedSearchPage == 4 ? (
									<div className='bg-green-500 w-2 h-2 animate-pulse rounded-full'></div>
								) : null}
							</div>
							<div className='flex flex-col items-center justify-center'>
								<button
									onClick={() => selectPage(5)}
									className='p-2 hover:text-green-500'
								>
									5
								</button>
								{selectedSearchPage == 5 ? (
									<div className='bg-green-500 w-2 h-2 animate-pulse rounded-full'></div>
								) : null}
							</div>
							<div className='flex flex-col items-center justify-center'>
								<button
									onClick={() => selectPage(6)}
									className='p-2 hover:text-green-500'
								>
									6
								</button>
								{selectedSearchPage == 6 ? (
									<div className='bg-green-500 w-2 h-2 animate-pulse rounded-full'></div>
								) : null}
							</div>
						</ul>
					</div>
				</section>
			</div>
		</>
	);
};

export default Planets;
