import React from 'react';
import ItemCarouselPreview from './ItemCarouselPreview';
import ItemCarouselDetails from './ItemCarouselDetails';
// import testVideo from "../assets/videos/test-video-2.mp4";

const imgPath = 'https://image.tmdb.org/t/p/w300';
const ItemCarousel = (props) => {
	// console.log(props);
	return (
		<div className="item-carousel">
			<ItemCarouselPreview
				src={`${imgPath}${props.poster_path}`}
				alt={props.overview}
			/>
			<ItemCarouselDetails props={props} />
		</div>
	);
};

export default ItemCarousel;
