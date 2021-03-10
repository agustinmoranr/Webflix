import React, { useState, useEffect, createContext } from 'react';
import './styles/Home.scss';
import Layout from '../components/Layout.jsx';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Modal from '../components/Modal';
import ItemCarousel from '../components/ItemCarousel';
import ItemModal from '../components/ItemModal';

import testVideo from '../assets/videos/test-video-2.mp4';

const heroData = {
	video: testVideo,
	posterVideo:
		'https://occ-0-29-987.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSFemv1LOz5nHsQa6TrW1N_yyCOIMa11goJH_f_n4XAt6ygtncHEo16ESfZDWHHyKC5_E3tnh-2bD6oYBXbjqxb8MOOB.jpg?r=360',
	logoSerie:
		'https://occ-0-29-987.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABU0SsrQ7stPoG2alvtMW7Ud2UBI0AaPTTRG4Eg2xIzpkIoyLTJ9Eex53bwwu024ZIehu-Ki18X2Dkv81zEIgvKwLHrH0387wbBS0kGqFtjrzGgVflZOL-RNgiUuFU69DwRLjDgYw8l9vOfYQUfOBwyJY3bICasoIccy3xz0joL3gLw.png?r=900',
};
const LS_KEY = 'netflixApp.carousel.myList';
export const myListContext = createContext();

export default function App() {
	const [movies, setMovies] = useState({
		tendencias: [],
		originals: [],
	});
	const [myList, setMyList] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const [modalItemProps, setModalItemProps] = useState({});

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

	function getItemModal(props) {
		setModalItemProps(props);
		setIsOpen(true);
	}

	function cleanItemModal() {
		setModalItemProps({});
		setIsOpen(false);
	}
	return (
		<>
			<myListContext.Provider value={{ myList, setMyList, LS_KEY }}>
				{isOpen && (
					<Modal>
						<ItemModal
							modalItemProps={modalItemProps}
							onClose={() => cleanItemModal()}
							heroData={heroData}
							movies={movies}
						/>
					</Modal>
				)}
				<Layout position={isOpen ? 'fixed' : 'static'}>
					<Hero
						heroData={heroData}
						itemProps={movies.tendencias[0]}
						onOpen={getItemModal}
					/>
					<main className='home-content'>
						{myList.length > 0 ? (
							<Carousel title='Mi Lista' length={myList.length}>
								{myList.map((movie, index) => (
									<ItemCarousel
										key={movie.id}
										{...movie}
										onOpen={getItemModal}
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
										onOpen={getItemModal}
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
									<ItemCarousel key={index} {...movie} onOpen={getItemModal} />
								))}
							</Carousel>
						) : (
							<p>Loading...</p>
						)}
					</main>
				</Layout>
			</myListContext.Provider>
		</>
	);
}
