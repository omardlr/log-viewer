import React from 'react';
import PropTypes from 'prop-types';
// import { validateInput } from '../../common/Validator';

export const InputField = ({ name, value, label, placeholder, validators, type, onChange,controlClass }) => {
	//const [error, setError] = useState(false);

	const handleChange = event => {
		const { value } = event.target;
		//setError(validateInput(validators, value));
		onChange(value);
	};

	return (
		<>
			{label && <label htmlFor={name}>{label}</label>}

			{type === 'textarea' ? (
				<textarea
					className={controlClass}
					name={name}
					id={name}
					placeholder={placeholder}
					value={value}
					defaultValue={value}
					onChange={handleChange}
				/>
			) : (
				<input
					name={name}
					id={name}
					className={controlClass}
					placeholder={placeholder}
					value={value}					
					type={type}
					onChange={onChange}
				/>
			)}
			{/* {error && <span className="text-danger">{error.message}</span>} */}
		</>
	);
};

InputField.propTypes = {
	name: PropTypes.string,
	value: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	validators: PropTypes.array,
	type:  PropTypes.oneOf(["text","email","password","textarea"]),
	onChange: PropTypes.func,
	controlClass: PropTypes.string,
};

InputField.defaultProps = {
	name: '',
	value: '',
	label: 'Label text',
	placeholder: '',
	type: 'text',
	validators: [],
	controlClass: "form-control",
};
