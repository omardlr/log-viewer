import React from 'react';
import FeatherIcon from 'feather-icons-react';

 const DropDownItem = ({ date, text }) => (
	<a className="dropdown-item dropdown-notifications-item" href="#!">
		<div className="dropdown-notifications-item-icon bg-warning">
			<FeatherIcon icon="activity" size={16} />
		</div>
		<div className="dropdown-notifications-item-content">
			<div className="dropdown-notifications-item-content-details">{date}</div>
			<div className="dropdown-notifications-item-content-text">{text}</div>
		</div>
	</a>
);

export default DropDownItem;
