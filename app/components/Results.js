let React = require('react');
let PropTypes = React.PropTypes;
let Link = require("react-router").Link;
import MainContainer from './MainContainer';

import { styles } from "../styles";
import {UserDetails} from "./UserDetails"
import {UserDetailsWrapper} from './UserDetailsWrapper';
import { Loading } from "./Loading";

function StartOver() {
  return (
            <div className="col-sm-8 col-sm offset-2">
          <Link to="/playerOne">
            <button type="button" className="btn btn-lg btn-danger">Start Over </button>
          </Link>
        </div>
  );
}

function Results(props) {
if (props.isLoading === true) {
  return (
    <Loading text="Just a Moment" speed={300} />
  )
}

  if (props.scores[0] === props.scores[1]) {
    return (
      <MainContainer>
        <h1>Its a tie!</h1>
          <StartOver />
      </MainContainer>
    );
  }
  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var losingIndex = winningIndex === 0 ? 1 : 0;
  return (
    <MainContainer>
      <h1>Results</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header="Winner">
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]}/>
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser">
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]}/>
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  )
}

Results.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
}


export { Results };
