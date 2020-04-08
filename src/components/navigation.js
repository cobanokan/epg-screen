import React from "react";

import { Home, ViewList, LiveTv, LocalLibrary, Replay } from '@material-ui/icons';

import '../styles/navigation.scss';

export default function Navigation(props) {
    return (
        <nav>
            <ul>
                <li>
                    <Home/>
                </li>
                <li>
                    <LiveTv/>
                </li>
                <li className="selected">
                    <ViewList/>
                </li>
                <li>
                    <Replay/>
                </li>
                <li>
                    <LocalLibrary/>
                </li>
            </ul>
        </nav>
    );
}