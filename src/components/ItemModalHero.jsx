import React, { useState } from 'react';
import useAddMyList from '../utils/useAddMyList';
import useHeroPlayer from '../utils/useHeroPlayer';
import RectangularButton from './RectangularButton';
import RoundedButton from './RoundedButton';
import { Link } from 'react-router-dom';

const imgPath = 'https://image.tmdb.org/t/p/w780';

const ItemModalHero = ({ heroData, modalItemProps }) => {
	const { video, posterVideo, logoSerie } = heroData;
	const [buttonIcon, setButtonIcon] = useState('volume_off');
	const { heroPlayer, handleReplay, handleIcon } = useHeroPlayer(
		buttonIcon,
		setButtonIcon,
	);
	const {
		itemExistence,
		handleDeleteMyListItem,
		handleAddMyList,
	} = useAddMyList(modalItemProps);
	return (
		<section className='modal-hero'>
			<video
				ref={heroPlayer}
				onEnded={handleReplay}
				poster={`${imgPath}${modalItemProps.poster_path || posterVideo}`}
				className='modal-hero__video'
				muted>
				<source src={video} type='video/mp4' />
			</video>
			<div className='modal-hero__details'>
				<div className='modal-hero__details--img'>
					<picture>
						<img src={logoSerie} alt='logo de la seríe' />
					</picture>
				</div>
				<div className='modal-hero__details--duration'>
					<span className='progress'>
						<span></span>
					</span>
					<span>20 de 50 min</span>
				</div>
				<div className='modal-hero__details--actions'>
					<span className='modal-hero__actions--play'>
						<Link to={`/watch/${modalItemProps.id}`}>
							<RectangularButton icon='play_arrow' text='Reanudar' />
						</Link>
					</span>
					<span className='actions-wrapper'>
						<span>
							<RoundedButton
								icon={itemExistence ? 'delete_outline' : 'add'}
								action={
									itemExistence ? handleDeleteMyListItem : handleAddMyList
								}
							/>
						</span>
						<span>
							<RoundedButton icon='thumb_up_off_alt' />
						</span>
						<span>
							<RoundedButton icon='thumb_down_off_alt' />
						</span>
					</span>
				</div>
			</div>
			<div className='toggle-mute-replay'>
				<RoundedButton icon={buttonIcon} action={handleIcon} />
			</div>
		</section>
	);
};

export default ItemModalHero;
