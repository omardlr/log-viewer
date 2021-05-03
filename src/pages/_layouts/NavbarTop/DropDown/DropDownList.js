import React from 'react';
import FeatherIcon from 'feather-icons-react';

const DropDownList = ({ headerText, headerIcon, footerText, children }) => (
	<div
		className="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up"
		aria-labelledby="navbarDropdownAlerts"
	>
		<h6 className="dropdown-header dropdown-notifications-header">
			<FeatherIcon icon={headerIcon} />
			<font className="ml-2" style={{ verticalAlign: 'inherit' }}>
				<font style={{ verticalAlign: 'inherit' }}>{headerText}</font>
			</font>
		</h6>
		{children}
		<a className="dropdown-item dropdown-notifications-footer" href="#!">
			{footerText}
		</a>
	</div>
);

export default DropDownList;
