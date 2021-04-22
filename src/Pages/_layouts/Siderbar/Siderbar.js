import React from 'react';
import { SiderbarFooter } from './SiderbarFooter';
import SiderbarList from './SiderbarList';

 const Siderbar = ({ userFullName }) => {
	return (
		<div id="layoutSidenav_nav">
			<nav className="sidenav shadow-right sidenav-light">
				<SiderbarList />
				<SiderbarFooter userFullName={userFullName} />
			</nav>
		</div>
	);
};


export default Siderbar;
