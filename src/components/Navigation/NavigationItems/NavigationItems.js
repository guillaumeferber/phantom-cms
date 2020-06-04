import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';
import { PAGES_ROUTES } from '../../../routes/pages.routes';

const navigationItems = ( props ) => {

	const returnNavigationFromPages = () => {
		return PAGES_ROUTES.map(route => {
			if (route.inNavigation) {
				return {
					url: route.path,
					label: route.name,
					exact: route.exact
				}
			}
			return null;
		});
	}

	return (
		<nav className={classes.NavigationItems}>
			<ul>
				{returnNavigationFromPages().map((item, idx) => {
					return item && (
						<NavigationItem
						exact={item.exact}
						url={item.url}
						key={idx + item.label}>
						{item.label}
					</NavigationItem>
					)
				})}
			</ul>
		</nav>
	 );
}

export default navigationItems;
