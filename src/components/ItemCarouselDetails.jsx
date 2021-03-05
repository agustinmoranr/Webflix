import React, { useState, useEffect, useContext } from 'react';
import RoundedButton from './RoundedButton';
import { myListContext } from '../pages/Home';

const ItemCarouselDetails = ({ props }) => {
	const [itemExistence, setItemExistence] = useState();
	const { myList, setMyList } = useContext(myListContext);
	useEffect(() => {
		function myListItemExistence() {
			const exist = myList.find((item) => item.id === props.id);

			//if item does exist return true, if not false
			if (exist !== undefined) {
				return true;
			}
			return false;
		}
		setItemExistence(myListItemExistence());
	}, [myList, props.id]);

	function handleAddMyList() {
		// const exist = myListItemExistence();
		// if (exist) {
		//   return false;
		// }
		setMyList((prevItems) => {
			return [
				...prevItems,
				{
					id: props.id,
					poster_path: props.poster_path,
					overview: props.overview,
				},
			];
		});
	}
	function handleDeleteMyListItem() {
		// const exist = myListItemExistence();
		// if (!exist) {
		//   return false;
		// }

		const myListCopy = [...myList];

		const newList = myListCopy.filter((item) => item.id !== props.id);

		setMyList(newList);
	}
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
				<RoundedButton icon='expand_more' action={props.onOpen} />
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
