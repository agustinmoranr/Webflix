import React from 'react';

const ModalSectionTitle = ({ title, strongVariable, className }) => {
	return (
		<div>
			<p className={`modal-section-title ${className || ''}`}>
				{title} {strongVariable && <strong>{strongVariable}</strong>}
			</p>
		</div>
	);
};

export default ModalSectionTitle;
