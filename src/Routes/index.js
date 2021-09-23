import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Dashboard from '../Pages/Dashboard';
import Settings from '../Pages/settings/index';
import Detail from '../Pages/settings/Detail';

//Only test
//import Test from '../Pages/Test/index';

const Routes = () => {
	return (
		<Switch>
			{/* <Route path="/" exact component={SignIn} /> */}
			<Route path={`${process.env.PUBLIC_URL}/`} exact component={Dashboard} isPrivate />
			<Route path={`${process.env.PUBLIC_URL}/user`} component={Dashboard} isPrivate />
			<Route path={`${process.env.PUBLIC_URL}/Settings`} exact component={Settings} isPrivate />
			<Route path={`${process.env.PUBLIC_URL}/Settings/Detail/:id`} exact component={Detail} isPrivate />
			{/*<Route path="/Test/" exact component={Test} isPrivate />}

			{/* redirect user to SignIn page if route does not exist and user is not authenticated */}
			{/*<Route component={SignIn} />*/}
		</Switch>
	);
};

export default Routes;