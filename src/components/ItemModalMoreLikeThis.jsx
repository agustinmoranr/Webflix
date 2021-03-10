import React from 'react';
import MoreLikeThisCard from './MoreLikeThisCard';
import ModalSectionTitle from './ModalSectionTitle';

const ItemModalMoreLikeThis = ({ movies }) => {
	return (
		<section className='moreLikeThis'>
			<ModalSectionTitle title='Más títulos similares a este' />
			<section className='moreLikeThis-wrapper'>
				{movies.map((movie) => (
					<MoreLikeThisCard key={movie.id} movie={movie} />
				))}
			</section>
		</section>
	);
};

export default ItemModalMoreLikeThis;
