import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, type, btnClass, className,onClick,disabled }) => (
	<button disabled={disabled} type={type} className={`btn ${btnClass} ${className}`} onClick={event => onClick(event)}>
		{text}
	</button>
);

Button.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	disabled:PropTypes.bool,
	type: PropTypes.string,
};

Button.defaultProps = {
	className: 'btn-primary',
	text:'Button',
	disabled: false,
	type:'button'
};

export default Button;