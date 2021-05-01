import React from 'react';
import FeatherIcon from 'feather-icons-react';

 const HeaderPageSimplified = ({ title, subTitle,icon }) => (
	<header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
		<div className="container">
			<div className="page-header-content pt-4">
				<div className="row align-items-center justify-content-between">
					<div className="col-auto mt-4">
						<h1 className="page-header-title">
							<div className="page-header-icon">
								<FeatherIcon icon={icon}/>
							</div>
							{title}
						</h1>
						<div className="page-header-subtitle">{subTitle}</div>
					</div>
					<div className="col-12 col-xl-auto mt-4">
						<button className="btn btn-white btn-sm line-height-normal p-3" id="reportrange">
							<FeatherIcon icon="calendar" size={16} className="mr-2 text-primary" />
							<span>July 30, 2020 - August 28, 2020</span>
							<FeatherIcon icon="chevron-down" size={14} className="ml-1" />

						</button>
					</div>
				</div>
			</div>
		</div>
	</header>
);

export default HeaderPageSimplified;