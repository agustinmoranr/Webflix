import React, { useState } from 'react';
import ModalEpisodesHeader from './ModalEpisodesHeader';
import ModalEpisodeItem from './ModalEpisodeItem';

const ItemModalEpisodes = ({ movies }) => {
	const [episodes, setEpisodes] = useState(movies.slice(0, 5));

	function selectSeason(from, to) {
		setEpisodes(movies.slice(from, to));
	}
	return (
		<section>
			<ModalEpisodesHeader onChangeSeason={selectSeason} />
			<div>
				{episodes.map((movie, index) => (
					<ModalEpisodeItem key={movie.id} movie={movie} index={index} />
				))}
			</div>
		</section>
	);
};

export default ItemModalEpisodes;
