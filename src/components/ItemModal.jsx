import React from 'react';
import ReactDOM from 'react-dom';
import ItemModalHero from './ItemModalHero';
import ItemModalDetails from './ItemModalDetails';
import ItemModalEpisodes from './ItemModalEpisodes';
import ItemModalSimilars from './ItemModalSimilars';
import ItemModalRelated from './ItemModalRelated';
import ItemModalFooter from './ItemModalFooter';

const ItemModal = ({onClose}) => {
	return ReactDOM.createPortal(
		<article className="itemModal">
			<div className="itemModal__overlay" />
			<section className="itemModal__container">
				<button className="close-btn material-icons" onClick={onClose}>
					close
				</button>
				<ItemModalHero />
				<ItemModalDetails />
				<ItemModalEpisodes />
				<ItemModalSimilars />
				<ItemModalRelated />
				<ItemModalFooter />
			</section>
		</article>,
		document.getElementById('item-portal')
	);
};

export default ItemModal;
