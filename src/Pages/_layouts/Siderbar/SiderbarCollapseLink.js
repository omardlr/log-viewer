import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import SiderbarLink from './SiderbarLink';

const SiderbarCollapseLink = ({ label, icon, subItems }) => {
	let Id = `collapse${label.replace(' ', '')}`;
	let Target = `#${Id}`;

	return (
		<>
			<a
				className="nav-link collapsed"
				href="#/"
				data-toggle="collapse"
				data-target={Target}
				aria-expanded="false"
				aria-controls={Id}
			>
				<div className="nav-link-icon">
					<FeatherIcon icon={icon} size={16} />
				</div>
				{label}
				<div className="sidenav-collapse-arrow">
					<FontAwesomeIcon icon={faAngleDown} />
				</div>
			</a>
			<div className="collapse" id={Id} data-parent="#accordionSidenav">
				<nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPages">
					{subItems.map((item,index) => (
						<SiderbarLink
							key={index}
							to={item.to}
							label={item.label}
							activeOnlyWhenExact={item.exact}
							icon={item.icon}
							badge={item.badge}
						/>
					))}
				</nav>
			</div>
		</>
	);
};

export default SiderbarCollapseLink;

