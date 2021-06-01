import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import SidebarLink from './SidebarLink';

const SidebarCollapseLink = ({ text, icon, subItems }) => {
	let Id = `collapse${text.replace(' ', '')}`;
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
				{text}
				<div className="sidenav-collapse-arrow">
					<FontAwesomeIcon icon={faAngleDown} />
				</div>
			</a>
			<div className="collapse" id={Id} data-parent="#accordionSidenav">
				<nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPages">
					{subItems.map((item,index) => (
						<SidebarLink
							key={index}
							to={item.to}
							text={item.text}
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

export default SidebarCollapseLink;

