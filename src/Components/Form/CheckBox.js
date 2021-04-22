import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export const CheckBox = ({ label, selected, onChange }) => {
	const handleChange = event => {
		const { checked } = event.target;
		onChange(checked);
	};

	return (
		<>
			<label className="custom-control custom-checkbox">
				<input
					type="checkbox"
					className="custom-control-input"
					value={selected}
					defaultChecked={selected}
					onChange={handleChange}
				/>
				<div className="custom-control-label">{label}</div>
			</label>
		</>
	);
};

CheckBox.propTypes = {
	// styleClass: PropTypes.string,
	selected: PropTypes.bool.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

CheckBox.defaultProps = {
	// styleClass: '',
	label: '',
};
