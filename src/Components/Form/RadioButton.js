import React from 'react';

export const RadioButton = props => {
	return (
		<label className="custom-control custom-radio custom-control-inline">
			<input
				className="custom-control-input"
                id={props.id}
                name={props.name}
                onChange={props.changed}
                value={props.value}
				checked={props.isSelected}
				type="radio"				
			/>
			<span className="custom-control-label"> {props.label} </span>
		</label>
	);
};
