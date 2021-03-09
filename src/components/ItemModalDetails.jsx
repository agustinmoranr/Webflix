import React from 'react';

const ItemModalDetails = ({ modalItemProps }) => {
	const { overview } = modalItemProps;
	return (
		<section className='modal-details'>
			<div className='modal-details__metadata-left'>
				<div className='modal-details__metadata-left-main'>
					<span className='metadata-recomendations'>98% para ti</span>
					<span>2019</span>
					<span className='metadata-rating'>TV-MA</span>
					<span>4 temporadas</span>
				</div>
				<div className='modal-details__overview'>{overview}</div>
			</div>
			<div className='modal-details__metadata-right'>
				<p>
					<span className='modal-details__metadata-right-tag'>Elenco: </span>
					<span>
						<a href='#/'>Justin Roiland, </a>
						<a href='#/'>Chris Parnell, </a>
						<a href='#/'>Spencer Grammer, </a>
						<a href='#/'>más</a>
					</span>
				</p>
				<p>
					<span className='modal-details__metadata-right-tag'>Géneros: </span>
					<span>
						<a href='#/'>TV de ciencía ficción, </a>
						<a href='#/'>Sitcoms, </a>
						<a href='#/'>Comedias de TV</a>
					</span>
				</p>
				<p>
					<span className='modal-details__metadata-right-tag'>
						Este título es:{' '}
					</span>
					<span>
						<a href='#/'>Absurdo, </a>
						<a href='#/'>Excéntrico, </a>
						<a href='#/'> Irreverente</a>
					</span>
				</p>
			</div>
		</section>
	);
};

export default ItemModalDetails;
