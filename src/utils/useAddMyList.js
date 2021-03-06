import { useState, useEffect, useContext } from 'react';
import { myListContext } from '../pages/Home';
const useAddMyList = ({ id, poster_path, overview }) => {
	const [itemExistence, setItemExistence] = useState();
	const { myList, setMyList } = useContext(myListContext);
	useEffect(() => {
		function myListItemExistence() {
			const exist = myList.find((item) => item.id === id);

			//if item does exist return true, if not false
			if (exist !== undefined) {
				return true;
			}
			return false;
		}
		setItemExistence(myListItemExistence());
	}, [myList, id]);

	function handleAddMyList() {
		// const exist = myListItemExistence();
		// if (exist) {
		//   return false;
		// }
		setMyList((prevItems) => {
			return [
				...prevItems,
				{
					id: id,
					poster_path: poster_path,
					overview: overview,
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

		const newList = myListCopy.filter((item) => item.id !== id);

		setMyList(newList);
	}
	return {
		itemExistence,
		handleDeleteMyListItem,
		handleAddMyList,
	};
};

export default useAddMyList;
