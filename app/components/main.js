var React = require("react");
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import main from "../main.css";

var Asli = React.createClass({
    render: function() {
        return (
            <div className="main-container">
            <ReactCSSTransitionGroup
            transitionName="appear"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500} >
                {React.cloneElement(this.props.children, {"key": this.props.location.pathname})}
            </ReactCSSTransitionGroup>
            </div>
        );
    }
    }
);

module.exports = Asli;
