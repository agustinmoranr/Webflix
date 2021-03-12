import React from 'react';
import './styles/WatchPlayer.scss';

import { useHistory } from 'react-router-dom';
import testVideo from '../assets/videos/test-video-2.mp4';
import RectangularButton from '../components/RectangularButton';

const WatchPlayer = () => {
	let history = useHistory();

	return (
		<div className='mediaPlayer'>
			<video controls className='player'>
				<source src={testVideo} type='video/mp4' />
			</video>
			<div className='goBack-btn-wrapper'>
				<RectangularButton
					action={() => history.push('/')}
					icon='keyboard_backspace'
					className='goBack-btn'
				/>
				<span className='goBack-drop-text'>Regresa a Explorar</span>
			</div>
		</div>
	);
};

export default WatchPlayer;
