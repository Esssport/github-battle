import React from "react";
import { ConfirmBattle } from '../components/ConfirmBattle';
import { helpers as githubHelpers } from '../utils/githubHelpers';

let ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState: function () {
        return {
            isLoading: true,
            playersInfo: []
        };
    },

    handleInitiateBattle: function () {
        this.context.router.push({
            pathname: '/results',
            state: {
                playersInfo: this.state.playersInfo
            }
        });
    },

    componentDidMount: function () {
        //  console.log("confirmBattle", this);
        let query = this.props.location.query;
        //fetch info from github then update the state
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
            .then(players => {
                this.setState({
                    isLoading: false,
                    playersInfo: [players[0], players[1]]
                })
            });

    },

    render: function () {
        return (
            <ConfirmBattle
                isLoading={this.state.isLoading}
                playersInfo={this.state.playersInfo}
                onInitiateBattle={this.handleInitiateBattle}
                />
        );
    }
});

export { ConfirmBattleContainer };