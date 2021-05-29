const menuService = {
    GetMenu: function() {
        return [
			{
				id: 1,
				section: 'Section 1',
				items: [
					{ id: 1, text: 'Home', to: '/', exact: true, icon: 'home' },
					{ id: 2, text: 'User', to: '/User', icon: 'user' },
					{ id: 3, text: 'General Settings', to: '/Settings', icon: 'settings'}
				],
			},
			{
				id: 2,
				section: 'Section 2',
				items: [
					{
						id: 1,
						text: 'Opcion collapse',
						to: '#',
						icon: 'user',
						subItems: [
							{ id: 1, text: 'Test 1', to: '/', exact: true, badge: 'Updated' },
							{ id: 2, text: 'Test 2', to: '/User' },
							{ id: 3, text: 'Test 3', to: '/Hey' },
						],
					},
				],
			},
		];
    }
};

export default menuService;