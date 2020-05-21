import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Footer/Footer';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import * as cx from './Layout.css';

class Layout extends Component {
    state = {
		showSideDrawer: true
	}
    sideDrawerToggleHandler = () => {
		this.setState((prevState) => {
			return { showSideDrawer: !prevState.showSideDrawer }
		});
	}
    render() {
        return (
            <Aux>
                <Toolbar open={this.state.showSideDrawer}></Toolbar>
                <SideDrawer open={this.state.showSideDrawer} drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <main className={[cx.Content, this.state.showSideDrawer ? cx.ContentOpen : null].join(' ')}>
                    {this.props.children}
                </main>
                <Footer open={this.state.showSideDrawer}/>
            </Aux>
         );
    }
}

export default Layout;
