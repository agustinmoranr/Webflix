import React from 'react';

const RoundedButton = ({ action, icon, className }) => {
	return (
		<button
			className={`material-icons rounded-button ${className || ''}`}
			onClick={action ? action : null}>
			{icon}
		</button>
	);
};

export default RoundedButton;
