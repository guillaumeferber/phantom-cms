import React from 'react';
import classes from './Toolbar.css';
const toolbar = (props) => {
	return (
		<header className={[classes.Toolbar, props.open ? classes.Open : null].join(' ')}>

		</header>
	);
}

export default toolbar;
