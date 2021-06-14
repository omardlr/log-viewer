import React from 'react';

export const RadioButton = (id,name,label,changed,value,isSelected) => {
	return (
		<label className="custom-control custom-radio custom-control-inline">
			<input
				className="custom-control-input"
                id={id}
                name={name}
                onChange={changed}
                value={value}
				checked={isSelected}
				type="radio"				
			/>
			<span className="custom-control-label"> {label} </span>
		</label>
	);
};
