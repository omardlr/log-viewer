import React from 'react';
// import {Container, Row, Col} from 'react-bootstrap';
// import Header from '../../Components/Header';
// import Content from '../../components/Content';

const Dashboard = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-xxl-4 col-xl-12 mb-4">
					<div class="card ">
						<div class="card-header">Dashboard</div>
						<div class="card-body">
							This is an example of a page with the default boxed layout. We've expanded Bootstrap by
							adding a new xxl breakpoint. As the screen width gets larger, the container element will set
							a max width to the content. The boxed layout uses the max width container element on the
							page header and in the main page content in this example.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
