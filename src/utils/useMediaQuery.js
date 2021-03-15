import { useState, useCallback, useEffect } from 'react';

const useMediaQuery = (minMax, width) => {
	const [targetReached, setTargetReached] = useState(false);

	const updateTarget = useCallback((e) => {
		if (e.matches) {
			setTargetReached(true);
		} else {
			setTargetReached(false);
		}
	}, []);

	useEffect(() => {
		const media = window.matchMedia(`(${minMax}-width: ${width}px)`);
		media.addEventListener('change', updateTarget);

		// Check on mount (callback is not called until a change occurs)
		if (media.matches) {
			setTargetReached(true);
		}

		return () => media.removeEventListener('change', updateTarget);
	}, [minMax, width, updateTarget]);

	return targetReached;
};

export default useMediaQuery;
