import React from 'react';

const ModalSectionTitle = ({ title, className }) => {
	return (
		<div>
			<p className={`modal-section-title ${className || ''}`}>{title}</p>
		</div>
	);
};

export default ModalSectionTitle;
