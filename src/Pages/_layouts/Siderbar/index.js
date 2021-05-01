import React, { useState, useEffect } from 'react';
import { SiderbarFooter } from './SiderbarFooter';
import SiderbarList from './SiderbarList';

const Siderbar = ({ userFullName }) => {
	const [siderbarItems, setSiderbarItems] = useState([]);

	useEffect(() => {
		setSiderbarItems([
			{
				id: 1,
				section: 'Section 1',
				items: [
					{ id: 1, label: 'Dashboard', to: '/', exact: true, icon: 'activity' },
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
		<div id="layoutSidenav_nav">
			<nav className="sidenav shadow-right sidenav-light">
				<SiderbarList siderbarItems={siderbarItems} />
				<SiderbarFooter userFullName={userFullName} />
			</nav>
		</div>
	);
};

export default Siderbar;
