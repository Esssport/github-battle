
var React = require('react');
import {Results} from '../components/Results';
import {helpers as githubHelpers} from '../utils/githubHelpers';

let ResultsContainer = React.createClass({
   getInitialState: function() {
       return {
           isLoading: true,
           scores: []
       }
   },

   componentDidMount: function() {
       githubHelpers.battle(this.props.location.state.playersInfo)
       .then( scores => {
           this.setState({
               scores: scores,
               isLoading: false
           })
       });
   },
   
    render: function() {
        return (
            <Results
            playersInfo={this.props.location.state.playersInfo}
            isLoading={this.state.isLoading}
            scores={this.state.scores} 
            />
        );
    }
});



export { ResultsContainer };
