import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, children }) => (
	<div className="card">
		{title && <div className="card-header">{title}</div>}
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
