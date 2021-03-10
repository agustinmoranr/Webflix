import { useRef, useEffect } from 'react';

const useHeroPlayer = (buttonIcon, setButtonIcon) => {
	const heroPlayer = useRef(null);

	useEffect(() => autoPlay(), []);
	function autoPlay() {
		if (heroPlayer.current !== null) {
			setTimeout(() => {
				if (heroPlayer.current === null) return;
				return heroPlayer.current.play();
			}, 3000);
		}
	}
	function handleReplay(e) {
		e.preventDefault();
		let mediaBtnCopy = buttonIcon;
		mediaBtnCopy = 'replay';
		setButtonIcon(mediaBtnCopy);
	}
	function toggleMute(icon) {
		let mediaBtnCopy = buttonIcon;
		if (icon === 'volume_off') {
			mediaBtnCopy = 'volume_up';
		}
		if (icon === 'volume_up') {
			mediaBtnCopy = 'volume_off';
		}
		if (icon === 'replay') {
			heroPlayer.current.play();
			mediaBtnCopy = 'volume_off';
			setButtonIcon(mediaBtnCopy);
			return (heroPlayer.current.muted = true);
		}
		setButtonIcon(mediaBtnCopy);
		return (heroPlayer.current.muted = !heroPlayer.current.muted);
	}
	function handleIcon(e) {
		e.preventDefault();
		if (heroPlayer.current === null) return;
		return toggleMute(buttonIcon);
	}
	return { heroPlayer, handleReplay, handleIcon };
};

export default useHeroPlayer;
