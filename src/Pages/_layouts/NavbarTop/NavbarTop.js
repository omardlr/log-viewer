import React from 'react';
import PropTypes from 'prop-types';
import FormSearch from './FormSearch';
import DropDownContainer from './DropDown/DropDownContainer';
import FeatherIcon from 'feather-icons-react';

const NavbarTop = ({ appName }) => {
	return (
		<nav className="topnav navbar navbar-expand shadow navbar-light bg-white" id="sidenavAccordion">
			<a className="navbar-brand active" href="/">
				{appName}
			</a>
			<button
				className="btn btn-icon btn-transparent-dark order-1 order-lg-0 mr-lg-2"
				id="sidebarToggle"
				href="#"
			>
				<FeatherIcon icon="menu" size={16} />
			</button>
			<FormSearch />
			<DropDownContainer />
		</nav>
	);
};

NavbarTop.propTypes = {
	appName: PropTypes.string,
};

export default NavbarTop;