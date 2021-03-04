import React from 'react';
// const imgPath = 'https://image.tmdb.org/t/p/w300';

const ItemCarouselPreview = ({src, alt}) => {
	return (
		<picture className="item-carousel__img">
			<img src={src} alt={alt} />
		</picture>
	);
};

export default ItemCarouselPreview;
