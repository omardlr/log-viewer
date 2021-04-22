import React from 'react';

export const SiderbarFooter = ({userFullName}) => (
	<div className="sidenav-footer">
		<div className="sidenav-footer-content">
			<div className="sidenav-footer-subtitle">Logged in as:</div>
			<div className="sidenav-footer-title">{userFullName}</div>
		</div>
	</div>
);