import React from 'react';
import DropDownButton from './DropDownButton';

const DropDown = ({ icon, children }) => {
	return (
		<li className="nav-item dropdown no-caret mr-3 dropdown-notifications">
			<DropDownButton icon={icon} />
			{children}
		</li>
	);
};
export default DropDown;
