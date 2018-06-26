import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from 'pages';

const App = () => (
    <React.Fragment>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
        </Switch>
    </React.Fragment>
);

export default App;