import React, { useState,useEffect } from 'react';
import menuService from '../../../services/menuService'
import { SidebarFooter } from './SidebarFooter';
import SidebarList from './SidebarList';

 const Sidebar = ({ userFullName }) => {
	const [items,setItems] = useState([]);

	useEffect(() => {
		setItems(menuService.GetMenu());
	},[])

	return (
		<div id="layoutSidenav_nav">
			<nav className="sidenav shadow-right sidenav-light">
				<SidebarList Items={items} />
				<SidebarFooter userFullName={userFullName} />
			</nav>
		</div>
	);
};

export default Sidebar;