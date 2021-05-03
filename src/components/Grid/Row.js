import React from 'react';
import PropTypes from 'prop-types';

export const Row = ({ className, children }) => {
	let vClassName = className ? 'row '+ className : 'row';
	return(<div className={vClassName}>{children}</div>)};

Row.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.string]),
};
