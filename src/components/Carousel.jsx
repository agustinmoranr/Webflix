import React from 'react';
import useCarousel from '../utils/useCarousel';
const Carousel = ({ title, children, length }) => {
	const {
		setOnHover,
		handleNextContent,
		handlePreviousContent,
		// setTransitioning,
		itemsContainerRef,
		carouselRef,
	} = useCarousel(length);

	return (
		<section ref={carouselRef} className='carousel'>
			<h1 className='carousel__title'>{title}</h1>
			<div
				className='carousel__container'
				onMouseOver={() => setOnHover(true)}
				onMouseLeave={() => setOnHover(false)}>
				<button
					onClick={handlePreviousContent}
					className='material-icons nav-prev'
					type='button'>
					navigate_before
				</button>

				<div
					ref={itemsContainerRef}
					// onTransitionEnd={() => setTransitioning(false)}
					className='items-container'>
					{children}
				</div>

				<button
					onClick={handleNextContent}
					className='material-icons nav-next'
					type='button'>
					navigate_next
				</button>
			</div>
		</section>
	);
};

export default Carousel;
