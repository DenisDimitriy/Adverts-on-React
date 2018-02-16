import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home'
import Create from './Create'

/**Init localStorage

import adverts from './adverts'

var advertsString = JSON.stringify(adverts);
localStorage.removeItem("adverts");
localStorage.setItem("adverts", advertsString);

*/

/** Router from https://reacttraining.com/react-router/web/example/basic */

export default class App extends Component{
    render() {
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/create" component={Create} />
                </div>
            </Router>
        )
    }
}

