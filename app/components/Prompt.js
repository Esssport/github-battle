import React from "react";
import { styles } from "../styles";


//funcitonal stateless components
function Prompt(props) {
    return (
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center"
            style={styles.transparentBg}>
            <h1> {props.header} </h1>
            <div className="col-sm-12">
                <form onSubmit={props.onSubmitUser}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="Github Username"
                            type="text"
                            onChange={props.onUpdateUser}
                            value={props.username}
                            />
                    </div>
                    <div className="form-control col-sm-4 col-offset-4">
                        <button
                            className="btn btn-block btn-success"
                            type="submit">
                            Continue
                            </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

Prompt.propTypes = {
    header: React.PropTypes.string.isRequired,
    onUpdateUser: React.PropTypes.func.isRequired,
    onSubmitUser: React.PropTypes.func.isRequired,
    username: React.PropTypes.string.isRequired
};



module.exports = Prompt;


