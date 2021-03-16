import React from 'react';
import RoundedButton from './RoundedButton';
import { Link } from 'react-router-dom';

const imgPath = 'https://image.tmdb.org/t/p/w342';

const MoreLikeThisCard = ({ movie }) => {
	return (
		<Link to={`/watch/${movie.id}`} title={movie.title}>
			<div className='moreLikeThisCard'>
				<div className='moreLikeThisCard__preview'>
					<div className='moreLikeThisCard__preview-overlay' />
					<span className='moreLikeThisCard__preview-seasons'>
						4 Temporadas
					</span>
					<picture className='moreLikeThisCard__preview-image'>
						<img
							src={`${imgPath}${movie.poster_path}`}
							alt='imagen descriptiva de una serie relacionada'
						/>
					</picture>
					<RoundedButton icon='play_arrow' className='episode-play-btn' />
				</div>
				<div className='moreLikeThisCard__metadata'>
					<div className='moreLikeThisCard__metadata-main'>
						<div>
							<p className='metadata-recomendations'>96 % para ti</p>
						</div>
						<div>
							<span className='metadata-rating'>TV-MA</span>
							<span className='metadata-year'>2020</span>
						</div>
					</div>
					<p className='metadata-overview'>{movie.overview}</p>
				</div>
			</div>
		</Link>
	);
};

export default MoreLikeThisCard;
