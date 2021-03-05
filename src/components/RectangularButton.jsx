import React from 'react';

const RectangularButton = ({ icon, text, color, background }) => {
	return (
		<button className='rectangular-button' style={{ background }}>
			<i className='material-icons' style={{ color: color }}>
				{icon}
			</i>
			<span style={{ color: color }}>{text}</span>
		</button>
	);
};

export default RectangularButton;
