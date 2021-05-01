import React from 'react';
import SiderbarContainerItem from './SiderbarContainerItem';

const SiderbarList = ({ siderbarItems }) => {
	return (
		<div className="sidenav-menu">
			<div className="nav accordion" id="accordionSidenav">
				{siderbarItems.map((item) => (
					<SiderbarContainerItem key={item.id} textSection={item.section} items={item.items} />
				))}
			</div>
		</div>
	);
};

export default SiderbarList;
