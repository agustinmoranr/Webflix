import React from 'react';
import RectangularButton from './RectangularButton';
import ModalSectionTitle from './ModalSectionTitle';
const ModalEpisodesHeader = () => {
	return (
		<section className='episode-header'>
			{/* <p className='episode-header__title'>Episodios</p> */}
			<ModalSectionTitle title='Episodios' />
			<div className='episode-header__dropdown'>
				<RectangularButton
					icon='arrow_drop_down'
					text='Temporada 1'
					className='dropdown-button'
				/>
			</div>
		</section>
	);
};

export default ModalEpisodesHeader;
