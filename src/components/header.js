import React from "react";

import '../styles/header.scss';

import logo from '../assets/images/logo.png';

import { Person, Search } from '@material-ui/icons';

export default function Header(props) {
    return (
        <header>
            <div className="icon-container">
                <Person/>
            </div>
            <div className="logo-container">
                <img src={logo} alt="Norigin Media Logo"/>
            </div>
            <div className="icon-container">
                <Search/>
            </div>
        </header>
    );
}