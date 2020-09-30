import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import PlayerService from "../services/player.service";

class EditPlayer extends Component {
    constructor(props) {
        super(props);
        this.onChangePlayerCredits = this.onChangePlayerCredits.bind(this);
        this.onChangePlayerStatus = this.onChangePlayerStatus.bind(this);
        this.onChangePlayerRole = this.onChangePlayerRole.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            player:{},
            credits:null,
            type:null,
            isPlaying:false
        }
    }
    componentDidMount() {
        console.log("edit player");
        PlayerService.get(this.props.match.params.id)
            .then(response => {
                console.log(response.data);
                this.setState({
                    player: response.data,
                    credits:response.data.credits,
                    type:response.data.type,
                    isPlaying:response.data.inPlaying11,
                });
            })
            .catch(e => {
                console.log(e);
            });

    }

    onChangePlayerCredits(e) {
        this.props.onChange(e.target.value);
        this.setState({
            credits:e.target.value
        });
    }

    onChangePlayerRole(e) {
        this.setState({
            type: e.target.value
        });
    }

    onChangePlayerStatus(e) {
        this.setState({
            isPlaying: e.target.value
        });
    }

    onSubmit =(e) => {
        e.preventDefault();
        const p = this.state.player;
        p.type = this.state.type
        p.credits = this.state.credits
        p.inPlaying11 = this.state.isPlaying
        PlayerService.update(this.state.player.id, p)
            .then(response => {
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });

    }

    render() {
        const { player } = this.state;
        const yesNo = [
            { key: true, text: 'Yes' },
            { key: false, text: 'No' },
        ]

        const roles = [
            { key: "BAT", text: 'BATSMAN' },
            { key: "ALL", text: 'ALLROUNDER' },
            { key: "WK", text: 'WICKETKEEPER' },
            { key: "BOW", text: 'BOWLER' },
        ]
        return (
            <div>
                <h3 align="center" style={{marginTop:20}}>Update Player</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={player.name}
                                disabled="disabled"
                        />
                    </div>
                    <div className="form-group">
                        <label>Role: </label>
                        <select name="select"  className="form-control" onChange={this.onChangePlayerRole}>
                            {roles.map(function(n) {
                                return (<option value={n.key} selected={player.type === n.key}>{n.text}</option>);
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Credits: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={player.credits}
                            onchange={this.onChangePlayerCredits}
                        />
                    </div>
                    <div className="form-group">
                        <label>InPlaying11: </label>
                        <select name="select"  className="form-control" onChange={this.onChangePlayerStatus}>
                            {yesNo.map(function(n) {
                                return (<option value={n.key} selected={player.inPlaying11 === n.key}>{n.text}</option>);
                            })}
                        </select>
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="submit" value="Update Player" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default EditPlayer;