import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';
const navigationItems = ( props ) => {
	const navigationItems = [
		{ url: '/', label: 'Home' },
		{ url: '/notes', label: 'Notes' }
	]
	return (
		<nav className={classes.NavigationItems}>
			<ul>
				{navigationItems.map((item, idx) => (
					<NavigationItem
						exact={idx === 0}
						url={item.url}
						key={item.label}>
						{item.label}
					</NavigationItem>
				))}
			</ul>
		</nav>
	 );
}

export default navigationItems;
