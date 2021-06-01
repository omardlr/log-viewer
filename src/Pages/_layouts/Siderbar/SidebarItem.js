import React from 'react';
import SidebarLink from './SidebarLink';
import SidebarCollapseLink from './SidebarCollapseLink';

const SidebarItem = ({ activeOnlyWhenExact, to, text, icon, badge, subItems }) => {
	
	return !subItems ? (
		<SidebarLink to={to} text={text} activeOnlyWhenExact={activeOnlyWhenExact} icon={icon} badge={badge} />
	) : (
		<SidebarCollapseLink text={text} icon={icon} subItems={subItems} />
	);
};

export default SidebarItem;
