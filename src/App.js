import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from './Home'
import Create from './Create'
import View from './View'

/**Init localStorage

import adverts from './adverts'

var advertsString = JSON.stringify(adverts);
localStorage.removeItem("adverts");
localStorage.setItem("adverts", advertsString);

*/

/** Router from https://reacttraining.com/react-router/web/example/basic */

export default class App extends Component{
    render() {
        //var pathCreate = "/create"
        return(
            <Router>
                <div>
                    <Redirect from='/delete/$:idDeleted' to='/'/>
                    <Route exact path="/" component={Home} />
                    <Route path="/create" component={Create} />
                    <Route path="/$:id" component={View} />
                    <Route path="/delete/$:idDeleted" component={Home} />
                </div>
            </Router>
        )
    }
}
