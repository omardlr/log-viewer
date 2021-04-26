import React from 'react';
import PropTypes from 'prop-types';

// type NumberAttr = number | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

export const Col = ({ className, children }) => {
	// { size, className, children}
	// let sizeList = size !== undefined ? size.map(size => 'col-' + size).join(' ') : 'col';
	// let vClassName = className ? className : '';

	return <div className={className ? className : ''}>{children}</div>;
};

Col.propTypes = {
	/**
	 * Content of the column
	 */
	children: PropTypes.node,
	/**
	 * The width of the column for screenclass `xs`, either a number between 0 and 12, or "content"
	 */
	xs: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['content'])]),
	/**
	 * The width of the column for screenclass `sm`, either a number between 0 and 12, or "content"
	 */
	sm: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['content'])]),
	/**
	 * The width of the column for screenclass `md`, either a number between 0 and 12, or "content"
	 */
	md: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['content'])]),
	/**
	 * The width of the column for screenclass `lg`, either a number between 0 and 12, or "content"
	 */
	lg: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['content'])]),
	/**
	 * The width of the column for screenclass `xl`, either a number between 0 and 12, or "content"
	 */
	xl: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['content'])]),
	/**
	 * The width of the column for screenclass `xxl`, either a number between 0 and 12, or "content"
	 */
	xxl: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['content'])]),
	/**
	 * A fixed width of the column for all screenclasses"
	 */
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	/**
	 * The offset of this column for all screenclasses
	 */
	offset: PropTypes.shape({
		xs: PropTypes.number,
		sm: PropTypes.number,
		md: PropTypes.number,
		lg: PropTypes.number,
		xl: PropTypes.number,
		xxl: PropTypes.number,
	}),
	/**
	 * The amount this column is pushed to the right for all screenclasses
	 */
	push: PropTypes.shape({
		xs: PropTypes.number,
		sm: PropTypes.number,
		md: PropTypes.number,
		lg: PropTypes.number,
		xl: PropTypes.number,
		xxl: PropTypes.number,
	}),
	/**
	 * The amount this column is pulled to the left for all screenclasses
	 */
	pull: PropTypes.shape({
		xs: PropTypes.number,
		sm: PropTypes.number,
		md: PropTypes.number,
		lg: PropTypes.number,
		xl: PropTypes.number,
		xxl: PropTypes.number,
	}),
	className: PropTypes.string,
};

Col.defaultProps = {
	children: null,
	xs: null,
	sm: null,
	md: null,
	lg: null,
	xl: null,
	xxl: null,
	width: null,
	offset: {},
	push: {},
	pull: {},
	className: '',
};
