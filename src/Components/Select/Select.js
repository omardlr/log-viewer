import React from 'react';
import PropTypes from 'prop-types';

 const Select = ({ name,label, value, className, data, placeholder, onChange }) => {
	const handleChange = event => {
		const { value } = event.target;
		onChange(value);
	};

	return (
		<>
			{label && <label htmlFor={name}>{label}</label>}
			<select name={name} id={name} value={value} className={`form-control ${className}`} onChange={handleChange}>
				{placeholder && <option value="" selected>{placeholder}</option>}
				{data.map((item, key) => (
					<option key={key} value={item.value}>
						{item.label}
					</option>
				))}
			</select>
		</>
	);
};

Select.propTypes = {
	value: PropTypes.string,
	placeholder: PropTypes.string,
	data: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
	value: '',
	placeholder: '',
};

export default Select;