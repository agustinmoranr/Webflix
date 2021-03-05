import React from 'react';

const RoundedButton = ({ action, icon }) => {
	return (
		<button
			className='material-icons rounded-button'
			onClick={action ? action : null}>
			{icon}
		</button>
	);
};

export default RoundedButton;
