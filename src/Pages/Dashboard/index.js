import React from 'react';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardWidget from '../../components/Card/CardWidget';

const Dashboard = () => {
	const hey = <FontAwesomeIcon icon={faDollarSign} className="fa-w-9 fa-2x text-gray-200" />;
	return (		
			<div className="container mt-5">
				<div className="row">
					<div className="col-xl-3 col-md-6 mb-4">
						<CardWidget text="Text from test" icon={hey} value="$140" valuePorcent="12" dummy="-12" />
					</div>
					<div className="col-xl-3 col-md-6 mb-4">
						<CardWidget text="Text from test 2" icon={hey} value="$27.00" valuePorcent="3" dummy="-3" />
					</div>

					<div className="col-xl-3 col-md-6 mb-4">
						{/* Dashboard info widget 2 */}
						<div className="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-secondary h-100">
							<div className="card-body">
								<div className="d-flex align-items-center">
									<div className="flex-grow-1">
										<div className="small font-weight-bold text-secondary mb-1">
											Average sale price
										</div>
										<div className="h5">$27.00</div>
										<div className="text-xs font-weight-bold text-danger d-inline-flex align-items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												className="feather feather-trending-down mr-1"
											>
												<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
												<polyline points="17 18 23 18 23 12"></polyline>
											</svg>
											3%
										</div>
									</div>
									<div className="ml-2">
										<svg
											className="svg-inline--fa fa-tag fa-w-16 fa-2x text-gray-200"
											aria-hidden="true"
											focusable="false"
											data-prefix="fas"
											data-icon="tag"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
											data-fa-i2svg=""
										>
											<path
												fill="currentColor"
												d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"
											></path>
										</svg>
										{/* <i className="fas fa-tag fa-2x text-gray-200"></i> Font Awesome fontawesome.com */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	);
};

export default Dashboard;
