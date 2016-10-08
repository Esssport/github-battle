import axios from 'axios';

let id = "YOUR_CLIENT_ID";
let sec = "YOUR_SECRET_ID";
let param = `?client_id=${id}&client_secret=${sec}`;

function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username + param);
}

function getRepos(username) {
//fetch username repos
    return axios.get(`https://api.github.com/users/${username}/repos${param}&per_page=100`);

}

function getTotalStars(repos) {
//calculate user stars
    return repos.data.reduce((prev, current) => prev + current.stargazers_count, 0);
}
//mine
function getPlayersData (player) {
    return getRepos(player.login)
    .then(getTotalStars)
    .then(totalStarts => {
        return {
        followers: player.followers,
        totalStars: totalStarts
        };
    })
}


function calculateScores (players) {
    //returns an array
    return [
        players[0].followers * 3 + players[0].totalStars,
        players[1].followers * 3 + players[1].totalStars
    ];
}

var helpers = {
    getPlayersInfo: function (players) {
        //fetch data from github
        return axios.all(
            players.map(username => getUserInfo(username))
        )
            .then(info => info.map(user => user.data))
            .catch(err => console.warn("Error in getPlayersInfo", err));
    },

    battle: function (players) {
        var playerOneData = getPlayersData(players[0]);
        var playerTwoData = getPlayersData(players[1]);

        return axios.all([playerOneData, playerTwoData])
        .then(calculateScores)
        .catch( err => console.warn("you've got an error in playersInfo2", err));
    }
};

export { helpers };