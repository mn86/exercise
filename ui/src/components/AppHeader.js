import React, { Component } from 'react';
import logo from "../logo.svg";

class AppHeader extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div>Unycom - Full Stack Java Exercise</div>
            </header>
        );
    }
}

export default AppHeader;