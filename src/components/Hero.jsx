import React, { useState } from 'react';
import useHeroPlayer from '../utils/useHeroPlayer';
import RectangularButton from './RectangularButton';
import RoundedButton from './RoundedButton';

const Hero = ({ heroData }) => {
	const { video, posterVideo, logoSerie } = heroData;
	const [buttonIcon, setButtonIcon] = useState('volume_off');

	const { heroPlayer, handleReplay, handleIcon } = useHeroPlayer(
		buttonIcon,
		setButtonIcon,
	);

	return (
		<section className='hero'>
			<div className='hero-background-dark'></div>
			<video
				ref={heroPlayer}
				onEnded={handleReplay}
				poster={posterVideo}
				className='hero__video'
				muted>
				<source src={video} type='video/mp4' />
			</video>
			<div className='hero__logo'>
				<picture>
					<img src={logoSerie} alt='logo de la seríe' />
				</picture>
			</div>
			<article className='hero__info'>
				<div className='hero__info__title'>
					<h2>N.º 8 en México hoy</h2>
				</div>
				<div className='hero__info__details'>
					<p>2021</p>
					<p>TV-MA</p>
					<p>1 temporada</p>
				</div>
				<div className='hero__info__synopsis'>
					<p>
						Buscaba respuestas sobre ella misma, pero terminó encontrando algo
						más oscuro en un escalofriante hotel de Los Ángeles.
					</p>
				</div>
			</article>
			<div className='hero__controls'>
				<div className='hero__controls__wrapper'>
					<RectangularButton
						icon='play_arrow'
						text='Reproducir'
						className='hero__controls__wrapper-play'
					/>

					<RectangularButton
						icon='info'
						text='Más información'
						className='hero__controls__wrapper-more-info'
					/>
				</div>
				<div className='hero__controls__player'>
					<RoundedButton icon={buttonIcon} action={handleIcon} />
					<span>TV-MA</span>
				</div>
			</div>
			<picture className='hero-background-img'>
				<div className='hero-background-img__shadow'></div>
				<img src={posterVideo} alt='poster de la serie en el hero'></img>
			</picture>
		</section>
	);
};

export default Hero;
