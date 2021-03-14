import React, { useState, useEffect } from 'react';

const ItemCarouselPreview = ({ src, alt, onOpen, props }) => {
	const midRangeQuery = window.matchMedia('(max-width: 767px)');
	const [midMediaQuery, setMidMediaQuery] = useState(midRangeQuery.matches);
	useEffect(() => {
		const handler = (e) => setMidMediaQuery(e.matches);
		midRangeQuery.addEventListener('change', handler);
		return () => midRangeQuery.removeEventListener('change', handler);
	});

	const modalProps = {
		title: props.title,
		overview: props.overview,
		poster_path: props.poster_path,
		id: props.id,
	};
	return (
		<div className='item-carousel__img'>
			<picture onClick={midMediaQuery ? () => onOpen(modalProps) : null}>
				<img src={src} alt={alt} />
			</picture>
		</div>
	);
};

export default ItemCarouselPreview;
