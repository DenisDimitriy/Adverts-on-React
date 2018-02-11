import React, { Component } from 'react'
import About from './About'
import Home from './Home'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

/** Router from https://reacttraining.com/react-router/web/example/basic */

export default class App extends Component{
    render() {
        return(
            <Router>
                <div>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                </ul>

                <hr />

                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                </div>
            </Router>
        )
    }
}