import React from 'react';
import PropTypes from 'prop-types';

const DefaultLayout = ({ children }) => {
	return (
		<>
			<header>
				<h2>Header Sign In</h2>
			</header>
			<main>{children}</main>
		</>
	);
};

DefaultLayout.propTypes = {
	children: PropTypes.element.isRequired,
};

export default DefaultLayout;
