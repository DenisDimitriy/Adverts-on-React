import React, { Component } from 'react'
import Advert from './Advert'
import Home from './Home'
import { BrowserRouter as Router, Route } from "react-router-dom";

/** Router from https://reacttraining.com/react-router/web/example/basic */

export default class App extends Component{
    render() {
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/advert" component={Advert} />
                </div>
            </Router>
        )
    }
}