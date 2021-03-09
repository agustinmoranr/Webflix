import React from 'react';
import ModalEpisodesHeader from './ModalEpisodesHeader';
import ModalEpisodeItem from './ModalEpisodeItem';

const ItemModalEpisodes = ({ movies }) => {
	return (
		<section>
			<ModalEpisodesHeader />
			<div>
				{movies.map((movie, index) => (
					<ModalEpisodeItem key={movie.id} movie={movie} index={index} />
				))}
			</div>
		</section>
	);
};

export default ItemModalEpisodes;
