//import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SidebarContainerItem from './SidebarContainerItem';

const SidebarList = ({Items}) => {

	return (
		<div className="sidenav-menu">
			<div className="nav accordion" id="accordionSidenav">
				{Items.map((item) => (
					<SidebarContainerItem key={item.id} textSection={item.section} items={item.items} />
				))}
			</div>
		</div>
	);
};

SidebarList.propTypes = {
	Items: PropTypes.array
}

export default SidebarList;
