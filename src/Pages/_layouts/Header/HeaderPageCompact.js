import React from 'react';
import FeatherIcon from 'feather-icons-react';

const HeaderPageCompact = ({ title, icon }) => (
	<header className="page-header page-header-compact page-header-light border-bottom bg-white mb-4">
		<div className="container-fluid">
			<div className="page-header-content">
				<div className="row align-items-center justify-content-between pt-3">
					<div className="col-auto mb-3">
						<h1 className="page-header-title">
							<div className="page-header-icon">
								<FeatherIcon icon={icon} />
							</div>
							{title}
						</h1>
					</div>
					<div className="col-12 col-xl-auto mb-3">
						{/* <button className="btn btn-sm btn-light text-primary active mr-2">Today</button>
						<button className="btn btn-sm btn-light text-primary mr-2">Month</button>
						<button className="btn btn-sm btn-light text-primary">Year</button> */}
					</div>
				</div>
			</div>
		</div>
	</header>
);

export default HeaderPageCompact;
