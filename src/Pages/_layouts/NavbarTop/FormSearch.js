import React from 'react';
import FeatherIcon from 'feather-icons-react';

 const FormSearch = () => (
	<form className="form-inline mr-auto d-none d-md-block">
		<div className="input-group input-group-joined input-group-solid">
			<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
			<div className="input-group-append">
				<div className="input-group-text">
					<FeatherIcon icon="search" size={16} />
				</div>
			</div>
		</div>
	</form>
);

export default FormSearch;