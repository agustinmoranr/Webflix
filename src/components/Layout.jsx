import React from 'react';
import Header from './Header';
import Footer from './Footer';
const Layout = ({children, position}) => {
	return (
		<div style={{position: position}}>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
