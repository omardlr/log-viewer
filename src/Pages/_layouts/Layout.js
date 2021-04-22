import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarTop from './NavbarTop';
import Siderbar from './Siderbar';
import Footer from './Footer';
import Home from '../pages/Home';
import User from '../pages/User';
import NoMatch from '../pages/NoMatch';

export const Layout = () => (
	<>
		<NavbarTop appName="Web Aplication" />
		<div id="layoutSidenav">
			<Router>
				<Siderbar userFullName="José Maldonado" />
				<div id="layoutSidenav_content">
					<main>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/User" component={User} />
							<Route component={NoMatch} />
						</Switch>
					</main>
					<Footer />
				</div>
			</Router>
		</div>
	</>
);
