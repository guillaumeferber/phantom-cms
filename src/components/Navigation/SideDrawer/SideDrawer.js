import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import DrawerToggle from './DrawerToggle/DrawerToggle';
import classes from './SideDrawer.css';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {
	const associatedClasses = [classes.SideDrawer, props.open ? classes.Open : null];
	return (
		<Aux>
			<div className={associatedClasses.join(' ')} >
				<div className={classes.Heading}>
					<Logo color="white" clicked={props.drawerToggleClicked}/>
					<DrawerToggle visible={props.open} clicked={props.drawerToggleClicked}/>
				</div>
				<NavigationItems />
			</div>
		</Aux>
	 );
}

export default sideDrawer;
