import React from 'react';
import appLogo from '../../assets/images/logo.svg';
import classes from './Logo.css';

const logo = (props) => {
	const attachedClasses = [classes.Logo, 'white' === props.color ? classes.white : null];
	return (
		<div className={attachedClasses.join(' ')} onClick={props.clicked}>
			<img src={appLogo} alt="Phantom CMS"/>
		</div>
	 );
}

export default logo;
