import React, { Component, Fragment } from 'react';

import Header from './header';
import Navigation from './navigation';
import Epg from './epg';

import '../styles/app.scss';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Header/>
                <Epg/>
                <Navigation/>
            </Fragment>
        );
    }
}

export default App;