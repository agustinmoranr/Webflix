import React from 'react';

const RectangularButton = ({ icon, text, className, action }) => {
	return (
		<button
			onClick={action ? action : null}
			className={`rectangular-button ${className || ''}`}>
			<i className='material-icons'>{icon}</i>
			{text && <span>{text}</span>}
		</button>
	);
};

export default RectangularButton;
