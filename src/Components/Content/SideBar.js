import React from 'react';

const SideBar = () => {
	return (
		<nav className="navbar navbar-vertical fixed-left navbar-expand-md " id="sidebar">
			<div className="container-fluid">
				{/* Toggler */}
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#sidebarCollapse"
					aria-controls="sidebarCollapse"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				{/* Brand */}
				<a className="navbar-brand" href="./index.html">
					<img src="./img/logo.svg" className="navbar-brand-img mx-auto" alt="..." />
				</a>
				{/* User (xs) */}
				<div className="navbar-user d-md-none">
					{/* Dropdown */}
					<div className="dropdown">
						{/* Toggle */}
						<a
							href="./index"
							id="sidebarIcon"
							className="dropdown-toggle"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							<div className="avatar avatar-sm avatar-online">
								<img
									src="./img/avatars/profiles/avatar-1.jpg"
									className="avatar-img rounded-circle"
									alt="..."
								/>
							</div>
						</a>

						{/* Menu */}
						<div className="dropdown-menu dropdown-menu-right" aria-labelledby="sidebarIcon">
							<a href="./profile-posts.html" className="dropdown-item">
								Profile
							</a>
							<a href="./account-general.html" className="dropdown-item">
								Settings
							</a>
							<hr className="dropdown-divider" />
							<a href="./sign-in.html" className="dropdown-item">
								Logout
							</a>
						</div>
					</div>
				</div>
				{/* Collapse */}
				<div className="collapse navbar-collapse" id="sidebarCollapse">
					{/* Form */}
					<form className="mt-4 mb-3 d-md-none">
						<div className="input-group input-group-rounded input-group-merge">
							<input
								type="search"
								className="form-control form-control-rounded form-control-prepended"
								placeholder="Search"
								aria-label="Search"
							/>
							<div className="input-group-prepend">
								<div className="input-group-text">
									<span className="fe fe-search"></span>
								</div>
							</div>
						</div>
					</form>

					{/* Heading */}
					<h6 className="navbar-heading">Menu</h6>
					{/* Divider */}
					<hr className="navbar-divider my-3" />

					{/* Navigation */}
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link " href="./Dashboard">
								<i className="fe fe-home"></i> Dashboards
							</a>
						</li>
					</ul>

					{/* Push content down */}
					<div className="mt-auto"></div>

					{/* User (md) */}
					<div className="navbar-user d-none d-md-flex" id="sidebarUser">
						{/* Icon */}
						<a href="#sidebarModalActivity" className="navbar-user-link" data-toggle="modal">
							<span className="icon">
								<i className="fe fe-bell"></i>
							</span>
						</a>

						{/* Dropup */}
						<div className="dropup">
							{/* Toggle */}
							<a
								href="#"
								id="sidebarIconCopy"
								className="dropdown-toggle"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<div className="avatar avatar-sm avatar-online">
									<img
										src="./img/avatars/profiles/avatar-1.jpg"
										className="avatar-img rounded-circle"
										alt="..."
									/>
								</div>
							</a>

							{/* Menu */}
							<div className="dropdown-menu" aria-labelledby="sidebarIconCopy">
								<a href="./profile-posts.html" className="dropdown-item">
									Profile
								</a>
								<a href="./account-general.html" className="dropdown-item">
									Settings
								</a>
								<hr className="dropdown-divider" />
								<a href="./sign-in.html" className="dropdown-item">
									Logout
								</a>
							</div>
						</div>

						{/* Icon */}
						<a href="#sidebarModalSearch" className="navbar-user-link" data-toggle="modal">
							<span className="icon">
								<i className="fe fe-search"></i>
							</span>
						</a>
					</div>
				</div>{' '}
				{/* / .navbar-collapse */}
			</div>
		</nav>
	);
};

export default SideBar;
