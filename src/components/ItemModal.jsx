import React from 'react';
import ItemModalHero from './ItemModalHero';
import ItemModalDetails from './ItemModalDetails';
import ItemModalEpisodes from './ItemModalEpisodes';
import ItemModalSimilars from './ItemModalSimilars';
import ItemModalRelated from './ItemModalRelated';
import ItemModalFooter from './ItemModalFooter';

const ItemModal = ({ onClose, heroData, modalItemProps }) => {
	return (
		<article className='itemModal'>
			<div className='itemModal__overlay' />
			<section className='itemModal__container'>
				<button className='close-btn material-icons' onClick={onClose}>
					close
				</button>
				<ItemModalHero heroData={heroData} modalItemProps={modalItemProps} />
				<ItemModalDetails />
				<ItemModalEpisodes />
				<ItemModalSimilars />
				<ItemModalRelated />
				<ItemModalFooter />
			</section>
		</article>
	);
};

export default ItemModal;
