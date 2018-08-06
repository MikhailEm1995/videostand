import React from 'react';
import { Tab } from 'semantic-ui-react';

import Gallery from './screens/Gallery/Gallery.jsx';
import Pinterest from './screens/Pinterest/Pinterest.jsx';

import './styles/index.pcss';

export default class App extends React.Component {
    panes = [
        { menuItem: 'ГАЛЕРЕЯ', render: () => <Tab.Pane><Gallery/></Tab.Pane> },
        { menuItem: 'PINTEREST', render: () => <Tab.Pane><Pinterest/></Tab.Pane> }
    ];

    render() {
        return (
            <Tab panes={ this.panes } />
        );
    }
}
