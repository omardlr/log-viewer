import React from 'react';
import SidebarSection from './SidebarSection';
import SidebarItem from './SidebarItem';

const SidebarContainerItem = ({ textSection, items }) => {
	return (
		<>
			<SidebarSection text={textSection} />
			{!items
				? null
				: items.map((item) => (
						<SidebarItem 
							key={item.id}
							to={item.to}
							text={item.text}
							activeOnlyWhenExact={item.exact}
							icon={item.icon}
                            badge={item.badge}
                            subItems={item.subItems}
						/>
				  ))}
		</>
	);
};

export default SidebarContainerItem;
