import React from 'react';
import RoundedButton from './RoundedButton';
const imgPath = 'https://image.tmdb.org/t/p/w342';

const ModalEpisodeItem = ({ movie, index }) => {
	// console.log(movie);
	return (
		<section className='episode-item'>
			<span className='episode-number'>{index + 1}</span>
			<div className='episode-image'>
				<picture className='episode-image-wrapper'>
					<img
						src={`${imgPath}${movie.poster_path}`}
						alt='imagen de la película'
						title='imagen previa de la película'
					/>
				</picture>
				<RoundedButton icon='play_arrow' className='episode-play-btn' />
				<span className='episode-progress'>
					<span></span>
				</span>
			</div>
			<div>
				<div className='episode-metadata-wrapper'>
					<span className='episode-title'>{movie.title}</span>
					<span className='episode-duration'>42 min</span>
				</div>
				<div className='episode-synopsis'>{movie.overview}</div>
			</div>
		</section>
	);
};

export default ModalEpisodeItem;
