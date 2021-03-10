import React from 'react';
import RoundedButton from './RoundedButton';
import useAddMyList from '../utils/useAddMyList';
// import { myListContext } from '../pages/Home';

const ItemCarouselDetails = ({ props }) => {
	const {
		itemExistence,
		handleDeleteMyListItem,
		handleAddMyList,
	} = useAddMyList(props);
	const modalProps = {
		title: props.title,
		overview: props.overview,
		poster_path: props.poster_path,
		id: props.id,
	};
	return (
		<div className='item-carousel__details'>
			<div className='item-carousel__details__controls'>
				<ul>
					<li>
						<RoundedButton icon='play_arrow' />
					</li>
					<li>
						<RoundedButton
							icon={itemExistence ? 'delete_outline' : 'add'}
							action={itemExistence ? handleDeleteMyListItem : handleAddMyList}
						/>
					</li>
					<li>
						<RoundedButton icon='thumb_up_off_alt' />
					</li>
					<li>
						<RoundedButton icon='thumb_down_off_alt' />
					</li>
				</ul>
				<RoundedButton
					icon='expand_more'
					action={() => props.onOpen(modalProps)}
				/>
			</div>

			<p className='item-carousel__details__info'>
				<span className='info__recomendation'>96% para ti</span>
				<span className='info__mature-rating'>TV-MA</span>
				<span>1h 50min</span>
			</p>

			<p className='item-carousel__details__categories'>
				<span>categorie 1</span>
				<span>categorie 2</span>
				<span>categorie 3</span>
			</p>
		</div>
	);
};

export default ItemCarouselDetails;
