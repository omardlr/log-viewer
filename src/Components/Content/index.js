import React from 'react';
// import TopBar from './TopBar';
import SideBar from './SideBar';
import Header from './Header';

const Content = () => {
	return (
		<>
			<SideBar />
			<div className="main-content">
				<Header />

				{/* CARDS */}
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 col-lg-6 col-xl">
							{/* Value  */}
							<div className="card">
								<div className="card-body">
									<div className="row align-items-center">
										<div className="col">
											{/* Title */}
											<h6 className="text-uppercase text-muted mb-2">Value</h6>

											{/* Heading */}
											<span className="h2 mb-0">$24,500</span>

											{/* Badge */}
											<span className="badge badge-soft-success mt-n1">+3.5%</span>
										</div>
										<div className="col-auto">
											{/* Icon */}
											<span className="h2 fe fe-dollar-sign text-muted mb-0"></span>
										</div>
									</div>
									{/* / .row */}
								</div>
							</div>
						</div>

						<div className="col-12 col-lg-6 col-xl">
							{/* Hours*/}
							<div className="card">
								<div className="card-body">
									<div className="row align-items-center">
										<div className="col">
											{/* Title*/}
											<h6 className="text-uppercase text-muted mb-2">Total hours</h6>

											{/* Heading*/}
											<span className="h2 mb-0">763.5</span>
										</div>
										<div className="col-auto">
											{/* Icon*/}
											<span className="h2 fe fe-briefcase text-muted mb-0"></span>
										</div>
									</div>
									{/* / .row*/}
								</div>
							</div>
						</div>
						<div className="col-12 col-lg-6 col-xl">
							{/* Exit*/}
							<div className="card">
								<div className="card-body">
									<div className="row align-items-center">
										<div className="col">
											{/* Title*/}
											<h6 className="text-uppercase text-muted mb-2">Exit %</h6>

											{/* Heading*/}
											<span className="h2 mb-0">35.5%</span>
										</div>
										<div className="col-auto">
											{/* Chart*/}
											{/* <div className="chart chart-sparkline">
												<canvas className="chart-canvas" id="sparklineChart"></canvas>
											</div> */}
										</div>
									</div>
									{/* / .row*/}
								</div>
							</div>
						</div>

						<div className="col-12 col-lg-6 col-xl">
							{/* Time d*/}
							<div className="card">
								<div className="card-body">
									<div className="row align-items-center">
										<div className="col">
											{/* Title d*/}
											<h6 className="text-uppercase text-muted mb-2">Avg. Time</h6>

											{/* Heading d*/}
											<span className="h2 mb-0">2:37</span>
										</div>
										<div className="col-auto">
											{/* Icon d*/}
											<span className="h2 fe fe-clock text-muted mb-0"></span>
										</div>
									</div>
									{/* / .row d*/}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Content;
