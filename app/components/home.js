import React from 'react';
var ReactRouter = require("react-router");
import MainContainer from './MainContainer';
let Link = ReactRouter.Link;

var Home = React.createClass({
    render: function () {
        return (
            <MainContainer>
                <h1>Github Battle</h1>
                <p className="lead"> Lets see who's more active on Github! </p>
                <Link to="/playerOne">
                    <button type="button" className="btn btn-lg btn-success">
                        Get Started
                    </button>
                </Link>
            </MainContainer>
        );
    }
});

export { Home };