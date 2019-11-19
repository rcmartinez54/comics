import React, { Component } from 'react';
import Nav from './Nav'

class MainPage extends Component {
    render() {
        return (
            <div className="hero">
                <div className="hero__name">
                    <h2>Choose a Hero</h2>
                    <Nav />
                </div>
            </div>
        );
    }
}

export default MainPage;