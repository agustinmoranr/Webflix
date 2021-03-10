import React from 'react';
import ModalSectionTitle from './ModalSectionTitle';
import Metadata from './Metadata';

const creadoPor = [{ href: '#/', text: 'Raphael Bob-Waksberg' }];
const Elenco = [
	{ href: '#/', text: 'Will Arnett' },
	{ href: '#/', text: 'Aaron Paul' },
	{ href: '#/', text: 'Amy Sedaris' },
	{ href: '#/', text: 'Alison Brie' },
	{ href: '#/', text: 'Paul F. Tompkins' },
];
const generos = [
	{ href: '#/', text: 'Sitcoms' },
	{ href: '#/', text: 'Comedias de TV' },
	{ href: '#/', text: 'Series de EE.UU.' },
];
const about = [
	{ href: '#/', text: 'Sarcástico' },
	{ href: '#/', text: 'Cínico' },
	{ href: '#/', text: 'Ingenioso' },
	{ href: '#/', text: 'Irreverente' },
];

const ItemModalFooter = ({ modalItemProps }) => {
	return (
		<section className='modal-footer'>
			<ModalSectionTitle
				title='Acerca de'
				strongVariable={modalItemProps.title}
				className='title-lighter'
			/>
			<div className='modal-footer-metadata'>
				<Metadata tag='Creado por' links={creadoPor} />
				<Metadata tag='Elenco' links={Elenco} />
				<Metadata tag='Géneros' links={generos} />
				<Metadata tag='Este título es' links={about} />
				<div className='maturity-rating-wrapper'>
					<span className='mature-title'>Clasificación por edad:</span>
					<span className='maturity-rating'>
						<span className='maturity-class'>TV-MA</span>
						<p>Lenguaje inapropiado, consumo de tabaco</p>
						<p>
							Recomendada para público adulto. No apta para menores de 17 años.
						</p>
					</span>
				</div>
			</div>
		</section>
	);
};

export default ItemModalFooter;
