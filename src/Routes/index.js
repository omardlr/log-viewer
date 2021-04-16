import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';


import Dashboard from '../Pages/Dashboard';

const Routes = () => {
	return (
		<Switch>
			<Route path="/" exact component={Dashboard} />
			{/*<Route path="/config/user" component={UserConfig} isPrivate />*/}

			{/* redirect user to SignIn page if route does not exist and user is not authenticated */}
			{/*<Route component={SignIn} />*/}
		</Switch>
	);
};

export default Routes;