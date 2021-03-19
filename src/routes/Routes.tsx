import React from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import routes from '../interfaces/routes/Routelist';


const Routes = () => {
   
    return (
        <BrowserRouter>
        <Switch>
            {routes.map((route, index) => {
                return (
                    <Route 
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        render={(props) => (
                            <route.component
                                name={route.name} 
                                {...props}
                                {...route.props}
                            />
                        )}
                    />
                );
            })}
        </Switch>
    </BrowserRouter>

    );
   
}


export default Routes;

