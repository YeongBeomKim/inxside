import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, PaintingWrite, Paintings } from 'pages';
import Core from 'containers/base/Core';
const App = () => (
    <React.Fragment>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/paintings" component={Paintings}/>
            <Route path="/paintings/write" component={PaintingWrite} />
        </Switch>
        <Core/>
    </React.Fragment>
);

export default App;