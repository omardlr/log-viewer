import React, { useState, useEffect } from 'react';
import SiderbarContainerItem from './SiderbarContainerItem';
const SiderbarList = () => {
	const [siderbarItems, setSiderbarItems] = useState([]);

	useEffect(() => {
		setSiderbarItems([
			{
				id: 1,
				section: 'Section 1',
				items: [
					{ id: 1, label: 'Home', to: '/', exact: true, icon: 'home' },
					{ id: 2, label: 'User', to: '/User', icon: 'user' },
				],
			},
			{
				id: 2,
				section: 'Section 2',
				items: [
					{
						id: 1,
						label: 'Opcion collapse',
						to: '#',
						icon: 'user',
						subItems: [
							{ id: 1, label: 'Test 1', to: '/', exact: true, badge: 'Updated' },
							{ id: 2, label: 'Test 2', to: '/User' },
							{ id: 3, label: 'Test 3', to: '/Hey' },
						],
					},
				],
			},
		]);
	}, []);

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
