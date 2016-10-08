import React from 'react';
var ReactRouter = require("react-router");
import MainContainer from './MainContainer';
let Link = ReactRouter.Link;

var Khoone = React.createClass({
    render: function() {
        return (
            <MainContainer>
                <h1>Github Battle</h1>
                <p className="lead"> some fancy motto </p>
                <Link to="/playerOne">
                    <button type="button" className="btn btn-lg btn-success">
                    Get Started 
                    </button>
                 </Link>
            </MainContainer>
        );
    }
});

export {Khoone};