import React from 'react';
import cl from './Transfer.module.scss'

const Transfer = ({props}) => {
	return (
		<div className={cl.transfer__text}>
			{props}
		</div>
	);
};

export default Transfer;