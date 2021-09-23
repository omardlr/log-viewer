import React from 'react';
import PropTypes from 'prop-types';
import HeaderCompact from '../Header/HeaderPageCompact';
// import HeaderSimplified from '../Header/HeaderPageSimplified';
import NavbarTop from '../NavbarTop';
import Sidebar from '../Siderbar/index';

const AuthLayout = ({ children }) => {
	return (
		<>
			<NavbarTop appName="Log Viewer" />
			<div id="layoutSidenav">
				<Sidebar userFullName="José Maldonado" />
				<div id="layoutSidenav_content">
					<main>
						<HeaderCompact title="Dashboard" icon="activity" />
						<div className="container-xl px-4">
						{children}
						</div>
					</main>
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
