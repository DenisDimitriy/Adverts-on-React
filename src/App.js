import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home'
import Create from './Create'
import View from './View'
import Edit from './Edit'

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
                    <Route exact path="/" component={Home} />
                    <Route path="/create" component={Create} />
                    <Route path="/$:id" component={View} />
                    <Route path="/edit/$:id" component={Edit} />
                </div>
            </Router>
        )
    }
}

/*
<Redirect from='/delete/$:idDeleted' to='/'/>
<Route path="/delete/$:idDeleted" component={Home} />


<Redirect from='/delete/$:id' to='/'/>
<Redirect from='/logout' to='/'/>
<Route path="/:option" component={Home} />
<Route path="/:option/$:id" component={Home} />
*/