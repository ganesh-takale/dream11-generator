import React, { Component } from "react";
import TeamService from "../services/team.service";
import PlayerService from "../services/player.service";

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
        this.props.history.push("/players/"+team.id);
        // this.retrievePlayers(team.id);
        // this.setState({
        //     currentTeam: team,
        //     currentIndex: index
        // });
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
    };


    render() {
        const { teams, currentTeam, currentIndex, } = this.state;
        return (
                <div>
                    <h3>Teams List</h3>
                    <ul className="list-group">
                        {teams &&
                        teams.map((team, index) => (
                            <li key={index}
                                className={
                                    "list-group-item " +
                                    (index === currentIndex ? "active" : "")
                                }
                                onClick={() => this.setActiveTeam(team, index)}
                            >
                                {team.name}
                            </li>
                        ))}
                    </ul>
                </div>
        );
    }
}
