import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    render() {
        return(
            <ul className="hero__list">
                <li>Green Lantern</li>
                <li>Superman</li>
                <li>Batman</li>
            </ul>
        );
    }
}

export default Nav;