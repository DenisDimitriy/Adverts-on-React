import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home'
import Create from './Create'
import View from './View'
import Edit from './Edit'

/** Router from https://reacttraining.com/react-router/web/example/basic */

export default class App extends Component{
    render() {
        //var pathCreate = "/create"
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/create" component={Create} />
                    <Route path="/$:id" component={View} />
                    <Route path="/edit/$:id" component={Edit} />
                </div>
            </Router>
        )
    }
}