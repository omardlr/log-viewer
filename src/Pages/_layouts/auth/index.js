import React from 'react';
import PropTypes from 'prop-types';
import NavbarTop from '../NavbarTop';
import Siderbar from '../Siderbar';
import Footer from '../Footer';

const AuthLayout = ({ children }) => {
	return (
		<>
			<NavbarTop appName="Web Aplication" />
			<div id="layoutSidenav">
				<Siderbar userFullName="José Maldonado" />
				<div id="layoutSidenav_content">
					<main>
						{children}
					</main>
					<Footer />
				</div>
			</div>
		</>
	);
};

AuthLayout.propTypes = {
	children: PropTypes.element.isRequired,
};

export default AuthLayout;
