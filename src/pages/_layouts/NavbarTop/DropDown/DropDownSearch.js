import React from 'react';
import FeatherIcon from 'feather-icons-react';

const DropDownSearch = () => (
	<li className="nav-item dropdown no-caret mr-3 d-md-none">
		<a
			className="btn btn-icon btn-transparent-dark dropdown-toggle"
			id="searchDropdown"
			href="#/"
			role="button"
			data-toggle="dropdown"
			aria-haspopup="true"
			aria-expanded="false"
		>
			<FeatherIcon icon="search" size={16} />
		</a>
		<div
			className="dropdown-menu dropdown-menu-right p-3 shadow animated--fade-in-up"
			aria-labelledby="searchDropdown"
		>
			<form className="form-inline mr-auto w-100">
				<div className="input-group input-group-joined input-group-solid">
					<input
						className="form-control"
						type="text"
						placeholder="Search..."
						aria-label="Search"
						aria-describedby="basic-addon2"
					/>
					<div className="input-group-append">
						<div className="input-group-text">
							<FeatherIcon icon="search" size={16} />
						</div>
					</div>
				</div>
			</form>
		</div>
	</li>
);

export default DropDownSearch;
