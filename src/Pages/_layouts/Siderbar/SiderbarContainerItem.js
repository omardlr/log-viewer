import React from 'react';
import SiderbarSection from './SiderbarSection';
import SiderbarItem from './SiderbarItem';

const SiderbarContainerItem = ({ titleSection, items }) => {
	return (
		<>
			<SiderbarSection text={titleSection} />
			{!items
				? null
				: items.map((item) => (
						<SiderbarItem
							key={item.id}
							to={item.to}
							label={item.label}
							activeOnlyWhenExact={item.exact}
							icon={item.icon}
                            badge={item.badge}
                            subItems={item.subItems}
						/>
				  ))}
		</>
	);
};

export default SiderbarContainerItem;
