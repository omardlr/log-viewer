import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, className, children }) => (
	<div className={`card ${className}`}>
		{title && <div className="card-header border-bottom-0">{title}</div>}
		<div className="card-body">{children}</div>
	</div>
);

Card.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node
};

Card.defaultProps = {
    title:''
};

export default Card;
