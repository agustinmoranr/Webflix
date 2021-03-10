import React from 'react';
import Metadata from './Metadata';

const generos = [
	{ href: '#/', text: 'TV de ciencia ficción' },
	{ href: '#/', text: 'Sitcoms' },
	{ href: '#/', text: 'Comedias de TV' },
];
const about = [
	{ href: '#/', text: 'TV de ciencia ficción' },
	{ href: '#/', text: 'Sitcoms' },
	{ href: '#/', text: 'Comedias de TV' },
];
const elenco = [
	{ href: '#/', text: 'TV de ciencia ficción' },
	{ href: '#/', text: 'Sitcoms' },
	{ href: '#/', text: 'Comedias de TV' },
];
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
				{/* <p>
					<span className='modal-details__metadata-right-tag'>Elenco: </span>
					<span>
						<a href='#/'>Justin Roiland, </a>
						<a href='#/'>Chris Parnell, </a>
						<a href='#/'>Spencer Grammer, </a>
						<a href='#/'>más</a>
					</span>
				</p> */}
				<Metadata links={elenco} tag='Elenco' />
				<Metadata links={generos} tag='Géneros' />
				{/* <p>
					<span className='modal-details__metadata-right-tag'>
						Este título es:{' '}
					</span>
					<span>
						<a href='#/'>Absurdo, </a>
						<a href='#/'>Excéntrico, </a>
						<a href='#/'> Irreverente</a>
					</span>
				</p> */}
				<Metadata links={about} tag='Este título es' />
			</div>
		</section>
	);
};

export default ItemModalDetails;
