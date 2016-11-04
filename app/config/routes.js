import React from 'react';
var ReactRouter = require('react-router');

import Main from '../components/Main.js';
import { Home } from '../components/Home.js';
import PromptContainer from "../containers/PromptContainer";
import { ConfirmBattleContainer } from "../containers/ConfirmBattleContainer";
import { ResultsContainer } from "../containers/ResultsContainer";

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var routes = (


    <Router history={hashHistory}>

        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="playerOne" header="Player One" component={PromptContainer} />
            <Route path="playerTwo/:playerOne" header="Player Two" component={PromptContainer} />
            <Route path="battle" component={ConfirmBattleContainer} />
            <Route path="results" component={ResultsContainer} />
        </Route>

    </Router>
);

module.exports = routes;