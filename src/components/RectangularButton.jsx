import React from 'react';

const RectangularButton = ({ icon, text, className }) => {
	return (
		<button className={`rectangular-button ${className || ''}`}>
			<i className='material-icons'>{icon}</i>
			<span>{text}</span>
		</button>
	);
};

export default RectangularButton;
