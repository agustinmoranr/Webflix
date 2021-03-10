import React from 'react';
import ItemModalWrapper from './ItemModalWrapper';
import ItemModalHero from './ItemModalHero';
import ItemModalDetails from './ItemModalDetails';
import ItemModalEpisodes from './ItemModalEpisodes';
import ItemModalMoreLikeThis from './ItemModalMoreLikeThis';
import ItemModalRelated from './ItemModalRelated';
import ItemModalFooter from './ItemModalFooter';

const ItemModal = ({ onClose, heroData, modalItemProps, movies }) => {
	return (
		<article className='itemModal'>
			<div className='itemModal__overlay' />
			<section className='itemModal__container'>
				<button className='close-btn material-icons' onClick={onClose}>
					close
				</button>
				<ItemModalHero heroData={heroData} modalItemProps={modalItemProps} />
				<ItemModalWrapper>
					<ItemModalDetails modalItemProps={modalItemProps} />
					<ItemModalEpisodes movies={movies.tendencias} />
					<ItemModalMoreLikeThis movies={movies.originals} />
					<ItemModalRelated />
					<ItemModalFooter />
				</ItemModalWrapper>
			</section>
		</article>
	);
};

export default ItemModal;
