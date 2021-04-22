import React from 'react';

const Header = () => {
	return (
		<>
			{/* HEADER */}
			<div className="header">
				<div className="container-fluid">
					{/* Body */}
					<div className="header-body">
						<div className="row align-items-end">
							<div className="col">
								{/* Pretitle */}
								<h6 className="header-pretitle">Overview</h6>

								{/* Title */}
								<h1 className="header-title">Dashboard</h1>
							</div>
							<div className="col-auto">
								{/* Button */}
								<a href="#!" className="btn btn-primary lift">
									Create Report
								</a>
							</div>
						</div>
						{/* / .row */}
					</div>
					{/* / .header-body */}
				</div>
			</div>
			{/* / .header */}
		</>
	);
};

export default Header;
