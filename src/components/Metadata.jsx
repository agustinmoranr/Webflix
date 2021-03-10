import React from 'react';

const Metadata = ({ links, tag }) => {
	return (
		<div className='metadata'>
			<span className='metadata-tag'>{tag}</span>
			<span>
				{links.map((link, index) => (
					<span key={index * 13} className='metadata-link'>
						<a href={link.href}>{link.text}</a>
					</span>
				))}
			</span>
		</div>
	);
};

export default Metadata;
