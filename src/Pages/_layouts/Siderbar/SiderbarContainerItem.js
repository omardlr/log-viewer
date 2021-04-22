import React from 'react';
import SiderbarSection from './SiderbarSection';
import SiderbarItem from './SiderbarItem';

const SiderbarContainerItem = ({ textSection, items }) => {
	return (
		<>
			<SiderbarSection text={textSection} />
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
