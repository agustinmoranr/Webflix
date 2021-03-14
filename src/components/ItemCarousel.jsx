import React from 'react';
import ItemCarouselPreview from './ItemCarouselPreview';
import ItemCarouselDetails from './ItemCarouselDetails';

const imgPath = 'https://image.tmdb.org/t/p/w342';
const ItemCarousel = (props) => {
	return (
		<div className='item-carousel'>
			<ItemCarouselPreview
				src={`${imgPath}${props.poster_path}`}
				alt={props.overview}
				onOpen={props.onOpen}
				props={props}
			/>
			<ItemCarouselDetails props={props} />
		</div>
	);
};

export default ItemCarousel;
