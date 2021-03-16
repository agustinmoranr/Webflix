import React from 'react';
import useMediaQuery from '../utils/useMediaQuery';

const ItemCarouselPreview = ({ src, alt, onOpen, props }) => {
	const max767Query = useMediaQuery('max', 767);

	const modalProps = {
		title: props.title,
		overview: props.overview,
		poster_path: props.poster_path,
		id: props.id,
	};

	return (
		<div
			onClick={max767Query ? () => onOpen(modalProps) : null}
			className='item-carousel__img'>
			<picture>
				<img src={src} alt={alt} />
			</picture>
		</div>
	);
};

export default ItemCarouselPreview;
