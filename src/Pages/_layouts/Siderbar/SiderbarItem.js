import React from 'react';
import SiderbarLink from './SiderbarLink';
import SiderbarCollapseLink from './SiderbarCollapseLink';

const SiderbarItem = ({ activeOnlyWhenExact, to, label, icon, badge, subItems }) => {
	
	return !subItems ? (
		<SiderbarLink to={to} label={label} activeOnlyWhenExact={activeOnlyWhenExact} icon={icon} badge={badge} />
	) : (
		<SiderbarCollapseLink label={label} icon={icon} subItems={subItems} />
	);
};

export default SiderbarItem;
