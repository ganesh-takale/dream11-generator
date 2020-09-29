import React, { Component } from "react";
import TeamService from "../services/team.service";
import PlayerService from "../services/player.service";
import { Link } from "react-router-dom";

export default class TeamsList extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveTeams = this.retrieveTeams.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveTeam = this.setActiveTeam.bind(this);
        this.searchTitle = this.searchTitle.bind(this);
        this.retrievePlayers = this.retrievePlayers.bind(this);
        this.setActivePlayer = this.setActivePlayer.bind(this);

        this.state = {
            teams: [],
            players:[],
            currentTeam: null,
            currentPlayer: null,
            currentIndex: -1,
            currentPlayerIndex: -1,
            searchTitle: ""
        };
    }

    componentDidMount() {
        this.retrieveTeams();
    }

    onChangeSearchTitle(e) {
        const searchTitle = e.target.value;

        this.setState({
            searchTitle: searchTitle
        });
    }

    retrieveTeams() {
        TeamService.getAll()
            .then(response => {
                this.setState({
                    teams: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    retrievePlayers(id) {
        PlayerService.get(id)
            .then(response => {
                this.setState({
                    players: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshList() {
        this.retrieveTeams();
        this.setState({
            currentTeam: null,
            currentIndex: -1
        });
    }

    setActiveTeam(team, index) {
        this.retrievePlayers(team.id);
        this.setState({
            currentTeam: team,
            currentIndex: index
        });
    }

    setActivePlayer(player, index) {
        this.setState({
            currentPlayer: player,
            currentPlayerIndex: index
        });
    }

    searchTitle() {
        TeamService.findByTitle(this.state.searchTitle)
            .then(response => {
                this.setState({
                    teams: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { searchTitle, teams, players, currentTeam, currentIndex, currentPlayerIndex } = this.state;
        return (
            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by title"
                            value={searchTitle}
                            onChange={this.onChangeSearchTitle}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={this.searchTitle}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Teams List</h4>

                    <ul className="list-group">
                        {teams &&
                        teams.map((team, index) => (
                            <li
                                className={
                                    "list-group-item " +
                                    (index === currentIndex ? "active" : "")
                                }
                                onClick={() => this.setActiveTeam(team, index)}
                                key={index}
                            >
                                {team.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6">
                    {currentTeam ? (
                        <div>
                            <h4>{currentTeam.name}</h4>
                            <ul className="list-group">
                                {players &&
                                players.map((player, index) => (
                                    <li
                                        className={
                                            "list-group-item " +
                                            (index === currentPlayerIndex ? "active" : "")
                                        }
                                        onClick={() => this.setActivePlayer(player, index)}
                                        key={index}
                                    >
                                        {player.name} ({player.credits})
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Please click on a Team...</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
