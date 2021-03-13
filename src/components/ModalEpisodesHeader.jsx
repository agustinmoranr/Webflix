import React, { useState } from 'react';
import RectangularButton from './RectangularButton';
import ModalSectionTitle from './ModalSectionTitle';
const ModalEpisodesHeader = ({ onChangeSeason }) => {
	const [showMenu, setShowMenu] = useState(false);
	const [seasonNum, setSeasonNum] = useState(1);

	function changeSeason(start, end, seasonNum) {
		onChangeSeason(start, end);
		setSeasonNum(seasonNum);
	}
	return (
		<section className='episode-header'>
			<ModalSectionTitle title='Episodios' />
			<div tabIndex='5' className='episode-header__dropdown'>
				<RectangularButton
					icon='arrow_drop_down'
					text={`Temporada ${seasonNum}`}
					className={
						showMenu ? `dropdown-button arrow-rotate` : 'dropdown-button'
					}
					action={() => setShowMenu(!showMenu)}
				/>
				<ul className={`episode-dropdown-menu ${showMenu ? 'show-menu' : ''}`}>
					<li tabIndex='1' onClick={() => changeSeason(0, 5, 1)}>
						<span className='label-numSeasons'>Temporada 1</span>
						<span className='label-numEpisodes'>(5 episodios)</span>
					</li>
					<li
						tabIndex='2'
						className='outline'
						onClick={() => changeSeason(5, 10, 2)}>
						<span className='label-numSeasons'>Temporada 2</span>
						<span className='label-numEpisodes'>(5 episodios)</span>
					</li>
					<li tabIndex='3' onClick={() => changeSeason(10, 15, 3)}>
						<span className='label-numSeasons'>Temporada 3</span>
						<span className='label-numEpisodes'>(5 episodios)</span>
					</li>
					<li tabIndex='4' onClick={() => changeSeason(15, 20, 4)}>
						<span className='label-numSeasons'>Temporada 4</span>
						<span className='label-numEpisodes'>(5 episodios)</span>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default ModalEpisodesHeader;
