import { useState, useEffect } from 'react';

const useWindowScrollY = () => {
	const [scroll, setScroll] = useState(window.scrollY);

	function updateScroll(e) {
		e.preventDefault();
		let scroll = window.scrollY;
		return setScroll(scroll);
	}

	useEffect(() => {
		window.addEventListener('scroll', updateScroll);
	}, []);
	return scroll;
};

export default useWindowScrollY;
