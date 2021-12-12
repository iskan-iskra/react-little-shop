import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import AppRoutes from './AppRoutes';

const AppRouter = () => {
    return (
        <Switch>
            {AppRoutes.map(route=>
                <Route
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
            <Redirect to='/404'/>
        </Switch>
           
        
    )
}

export default AppRouter