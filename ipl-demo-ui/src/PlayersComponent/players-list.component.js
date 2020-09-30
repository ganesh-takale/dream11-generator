import React, { Component } from "react";
import PlayerService from "../services/player.service";
import { Link } from 'react-router-dom';
const Player = (props) => (
    <tr>
        <td>{props.player.name}</td>
        <td>{props.player.type}</td>
        <td>{props.player.credits}</td>
        <td>{props.player.inPlaying11 ? "YES" : "NO"}</td>
        <td>
            <Link style={{marginRight : 5}} to={"/player/"+props.player.id}>Edit</Link>
        </td>
    </tr>
)

const Players = ({ onHandleClick, tasksState}) => tasksState.map(function(currentTask, i){
    return <Player onClick={onHandleClick} player={currentTask} key={i} />;
});

export default class PlayersList extends Component {
    constructor(props) {
        super(props);
        this.refreshList = this.refreshList.bind(this);
        this.retrievePlayers = this.retrievePlayers.bind(this);
        this.setActivePlayer = this.setActivePlayer.bind(this);

        this.state = {
            players:[],
            currentPlayer: null,
        };
    }

    componentDidMount() {
        this.retrievePlayers();
    }

    retrievePlayers() {
        PlayerService.getAll(this.props.match.params.id)
            .then(response => {
                console.log(response.data);
                this.setState({
                    players: response.data
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshList() {
        this.retrievePlayers();
        this.setState({
            currentTeam: null,
            currentIndex: -1
        });
    }

    setActivePlayer(player, index) {
        this.setState({
            currentPlayer: player,
            currentPlayerIndex: index
        });
    }

    render() {
        const {players} = this.state;
        return (
            <div>
            <h3></h3>
            <table className="table table-striped" style={{ marginTop: 20 }} >
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Credits</th>
                    <th>In Playing11</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <Players tasksState={players || []} />
                </tbody>
            </table>
        </div>
        )
    }
}
