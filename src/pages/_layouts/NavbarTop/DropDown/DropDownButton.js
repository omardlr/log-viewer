import React from 'react';
import FeatherIcon from 'feather-icons-react';

const DropDownButton = ({ icon }) => (
	<a
		className="btn btn-icon btn-transparent-dark dropdown-toggle"
		id="navbarDropdownAlerts"
		href="#/"
		role="button"
		data-toggle="dropdown"
		aria-haspopup="true"
		aria-expanded="false"
	>
		<FeatherIcon icon={icon} />
	</a>
);

export default DropDownButton;
