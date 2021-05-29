import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Dashboard from '../pages/dashboard';
import Settings from '../pages/settings';
import Detail from '../pages/settings/details';

const Routes = () => {
	return (
		<Switch>
			{/* <Route path="/" exact component={SignIn} /> */}
			<Route path="/" exact component={Dashboard} isPrivate />
			<Route path="/user" component={Dashboard} isPrivate />
			<Route path="/Settings" exact component={Settings} isPrivate />
			<Route path="/Settings/Edit/:id" exact component={Detail} isPrivate />

			{/* redirect user to SignIn page if route does not exist and user is not authenticated */}
			{/*<Route component={SignIn} />*/}
		</Switch>
	);
};

export default Routes;