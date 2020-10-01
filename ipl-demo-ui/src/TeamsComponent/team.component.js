import React, { Component } from "react";
import TeamService from "../services/team.service";

export default class Team extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.getTeam = this.getTeam.bind(this);
        this.updatePublished = this.updatePublished.bind(this);
        this.updateTeam = this.updateTeam.bind(this);

        this.state = {
            currentTeam: {
                id: null,
                title: "",
                description: "",
                published: false
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getTeam(this.props.match.params.id);
    }

    onChangeTitle(e) {
        const title = e.target.value;

        this.setState(function(prevState) {
            return {
                currentTeam: {
                    ...prevState.currentTeam,
                    title: title
                }
            };
        });
    }

    onChangeDescription(e) {
        const description = e.target.value;

        this.setState(prevState => ({
            currentTeam: {
                ...prevState.currentTeam,
                description: description
            }
        }));
    }

    getTeam(id) {
        TeamService.get(id)
            .then(response => {
                this.setState({
                    currentTeam: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    updatePublished(status) {
        var data = {
            id: this.state.currentTeam.id,
            title: this.state.currentTeam.title,
            description: this.state.currentTeam.description,
            published: status
        };

        TeamService.update(this.state.currentTeam.id, data)
            .then(response => {
                this.setState(prevState => ({
                    currentTeam: {
                        ...prevState.currentTeam,
                        published: status
                    }
                }));
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    updateTeam() {
        TeamService.update(
            this.state.currentTeam.id,
            this.state.currentTeam
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "The tutorial was updated successfully!"
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { currentTeam } = this.state;

        return (
            <div style={{marginLeft: 20, marginRight: 20}}>
                {currentTeam ? (
                    <div className="edit-form">
                        <h4>Team</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    value={currentTeam.title}
                                    onChange={this.onChangeTitle}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    value={currentTeam.description}
                                    onChange={this.onChangeDescription}
                                />
                            </div>

                        </form>

                        <button
                            type="submit"
                            className="badge badge-success"
                            onClick={this.updateTeam} >
                            Update
                        </button>
                        <p>{this.state.message}</p>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Please click on a Team...</p>
                    </div>
                )}
            </div>
        );
    }
}