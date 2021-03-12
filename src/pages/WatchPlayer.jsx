import React from 'react';
import './styles/WatchPlayer.scss';

import { useHistory } from 'react-router-dom';
import testVideo from '../assets/videos/test-video-2.mp4';
import RectangularButton from '../components/RectangularButton';
const posterVideo =
	'https://occ-0-29-987.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSFemv1LOz5nHsQa6TrW1N_yyCOIMa11goJH_f_n4XAt6ygtncHEo16ESfZDWHHyKC5_E3tnh-2bD6oYBXbjqxb8MOOB.jpg?r=360';

const WatchPlayer = () => {
	let history = useHistory();

	return (
		<div className='mediaPlayer'>
			<video controls autoPlay poster={posterVideo} className='player'>
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
