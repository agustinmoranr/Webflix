import React, { useState, useEffect } from 'react';
import MoreLikeThisCard from './MoreLikeThisCard';
import ModalSectionTitle from './ModalSectionTitle';
import RoundedButton from './RoundedButton';
const ItemModalMoreLikeThis = ({ movies }) => {
	const [moreLikeThis, setMoreLikeThis] = useState([]);
	const [expandMoreActive, setExpandMoreActive] = useState(false);
	// console.log(moreLikeThis);

	useEffect(() => {
		if (expandMoreActive) return setMoreLikeThis(movies);
		setMoreLikeThis(movies.slice(0, 9));
	}, [expandMoreActive, movies]);
	return (
		<section className='moreLikeThis'>
			<ModalSectionTitle title='Más títulos similares a este' />
			<section className='moreLikeThis-wrapper'>
				{moreLikeThis.map((movie) => (
					<MoreLikeThisCard key={movie.id} movie={movie} />
				))}
			</section>
			<div className={`section-divider ${expandMoreActive ? '' : 'collapsed'}`}>
				<RoundedButton
					action={() => setExpandMoreActive(!expandMoreActive)}
					icon={expandMoreActive ? 'expand_less' : 'expand_more'}
					className='section-divider-button'
				/>
			</div>
		</section>
	);
};

export default ItemModalMoreLikeThis;
