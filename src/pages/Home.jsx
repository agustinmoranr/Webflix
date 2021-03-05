import React, { useState, useEffect, createContext } from 'react';
import './styles/Home.scss';
import Layout from '../components/Layout.jsx';
// import Header from '../components/Header';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Modal from '../components/Modal';
import ItemCarousel from '../components/ItemCarousel';
import ItemModal from '../components/ItemModal';

const LS_KEY = 'netflixApp.carousel.myList';
export const myListContext = createContext();

export default function App() {
	const [movies, setMovies] = useState({
		tendencias: [],
		originals: [],
	});
	const [myList, setMyList] = useState([]);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		async function getMovies() {
			const api_key = 'df773e56e533884f1644caecf3837215';
			const URL =
				'https://api.themoviedb.org/3/discover/movie?api_key=' +
				api_key +
				'&primary_release_year=2017&sort_by=revenue.desc';
			try {
				const data = await fetch(URL).then((response) => response.json());
				const results = data.results;
				const reversed = [...results];
				setMovies({
					tendencias: results,
					originals: reversed.reverse(),
				});
			} catch (error) {
				console.error('FETCH ERROR:', error);
			}
		}
		getMovies();
	}, []);
	useEffect(() => getMyListFromLS(), []);
	useEffect(() => {
		localStorage.setItem(LS_KEY, JSON.stringify(myList));
	}, [myList]);
	function getMyListFromLS() {
		const LS_MyList = JSON.parse(localStorage.getItem(LS_KEY));
		if (LS_MyList) setMyList(LS_MyList);
	}

	return (
		<>
			{isOpen && (
				<Modal>
					<ItemModal onClose={() => setIsOpen(false)} />
				</Modal>
			)}
			<Layout position={isOpen ? 'fixed' : 'static'}>
				<Hero />
				<myListContext.Provider value={{ myList, setMyList, LS_KEY }}>
					<main className='home-content'>
						{myList.length > 0 ? (
							<Carousel title='Mi Lista' length={myList.length}>
								{myList.map((movie, index) => (
									<ItemCarousel
										key={movie.id}
										{...movie}
										onOpen={() => setIsOpen(true)}
									/>
								))}
							</Carousel>
						) : (
							<div></div>
						)}

						{movies.tendencias.length > 0 ? (
							<Carousel title='Tendencias' length={movies.tendencias.length}>
								{movies.tendencias.map((movie, index) => (
									<ItemCarousel
										key={movie.id}
										{...movie}
										onOpen={() => setIsOpen(true)}
									/>
								))}
							</Carousel>
						) : (
							<p>Loading</p>
						)}
						{movies.originals.length > 0 ? (
							<Carousel
								title='Originales de Netflix'
								length={movies.originals.length}>
								{movies.originals.map((movie, index) => (
									<ItemCarousel
										key={index}
										{...movie}
										onOpen={() => setIsOpen(true)}
									/>
								))}
							</Carousel>
						) : (
							<p>Loading...</p>
						)}
					</main>
				</myListContext.Provider>
			</Layout>
		</>
	);
}
