import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Gallery from './screens/Gallery/Gallery.jsx';
import Pinterest from './screens/Pinterest/Pinterest.jsx';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ Gallery } />
                    <Route path="/pinterest" component={ Pinterest } />
                </Switch>
            </BrowserRouter>
        );
    }
}
