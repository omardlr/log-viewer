import React from 'react';
import FeatherIcon from 'feather-icons-react';

const DropDownUser = ({userFullName,userEmail}) => (
	<li className="nav-item dropdown no-caret mr-2 dropdown-user">
		<a
			className="btn btn-icon btn-transparent-dark dropdown-toggle"
			id="navbarDropdownUserImage"
			href="#/"
			role="button"
			data-toggle="dropdown"
			aria-haspopup="true"
			aria-expanded="false"
		>
			<img className="img-fluid" alt="" style={{borderRadius: "100%",  width: "2.5rem", height: "2.5rem"}} src="https://source.unsplash.com/QAB-WJcbgJk/60x60" />
		</a>
		<div
			className="dropdown-menu dropdown-menu-right border-0 shadow animated--fade-in-up"
			aria-labelledby="navbarDropdownUserImage"
		>
			<h6 className="dropdown-header d-flex align-items-center">
				<img className="dropdown-user-img" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" alt="" />
				<div className="dropdown-user-details">
					<div className="dropdown-user-details-name">{userFullName}</div>
					<div className="dropdown-user-details-email">{userEmail}</div>
				</div>
			</h6>
			<div className="dropdown-divider"></div>
			<a className="dropdown-item" href="#!">
				<div className="dropdown-item-icon">
					<FeatherIcon icon="settings" size={16} />
				</div>
				Cuenta
			</a>
			<a className="dropdown-item" href="#!">
				<div className="dropdown-item-icon">
					<FeatherIcon icon="log-out" size={16} />
				</div>
				Salir
			</a>
		</div>
	</li>
);

export default DropDownUser;
