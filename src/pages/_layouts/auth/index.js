import React from 'react';
import PropTypes from 'prop-types';
import NavbarTop from '../NavbarTop';
import Sidebar from '../Sidebar';

const AuthLayout = ({ children }) => {
	return (
		<>
			<NavbarTop appName="Web Aplication" />
			<div id="layoutSidenav">
				<Sidebar userFullName="José Maldonado" />
				<div id="layoutSidenav_content">
					<main>{children}</main>
					<footer className="footer mt-auto footer-light">
						<div className="container-fluid">
							<div className="row">
								<div className="col-md-6 small">Copyright © JOMA 2020</div>
								<div className="col-md-6 text-md-right small">
									<a href="#!">Privacy Policy</a>·<a href="#!">Terms &amp; Conditions</a>
								</div>
							</div>
						</div>
					</footer>
				</div>
			</div>
		</>
	);
};

AuthLayout.propTypes = {
	children: PropTypes.element.isRequired,
};

export default AuthLayout;
