import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                {/* Add more routes here */}
            </Switch>
        </Router>
    );
};

export default AppRouter;

