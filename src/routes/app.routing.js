import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {PAGES_ROUTES} from './pages.routes';
class AppRoutes extends Component {
    generateKey= () => {
        return new Date() + (Math.random() + 100);
    }
    render() {
        return (
            <Switch>
                {PAGES_ROUTES.map(route => (
                    <Route
                        key={this.generateKey()}
                        path={route.path}
                        component={route.component}
                        exact={route.exact}
                    />
                ))}
            </Switch>
        )
    }
}

export default AppRoutes;
