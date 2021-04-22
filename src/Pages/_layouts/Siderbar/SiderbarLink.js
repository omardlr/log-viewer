import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link, useRouteMatch } from 'react-router-dom';

const SiderbarLink = ({ activeOnlyWhenExact, to, label, icon, badge }) => {
    let match = useRouteMatch({
		path: to,
		exact: activeOnlyWhenExact,
    });
    
	return (
		<Link to={to} className={match ? 'active nav-link' : ' nav-link'}>
			{icon ? (
				<div className="nav-link-icon">
					<FeatherIcon icon={icon} size={16} />
				</div>
			) : (
				null
			)}

			{label}
			{badge ? <span className="badge badge-primary-soft text-primary ml-auto">{badge}</span> : null}
		</Link>
	);
};

export default SiderbarLink;
