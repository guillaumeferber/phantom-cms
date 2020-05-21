import React from 'react';
import classes from './DrawerToggle.css';

const drawerToggle = (props) => {
	return (
		<div onClick={props.clicked} className={[classes.DrawerToggle, props.visible ? classes.Open : null].join(' ')}>
			<div></div>
		</div>
	 );
}

export default drawerToggle;
