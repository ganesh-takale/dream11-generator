import React, {Component, useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import TeamsList from './TeamsComponent/teams-list.component'
import './App.css';
import PlayersList from "./PlayersComponent/players-list.component";
import EditPlayer from "./PlayersComponent/edit-player.component";

class App extends Component {
    render() {
        return (
            <Router>
            <div className="container" >
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <a href="#" className="navbar-brand">
                        <img src={logo} width="30" height="30" alt="Logo" />
                    </a>
                    <Link to="/" className="navbar-brand">Dream11 Team Generator</Link>
                    <div className="collpase navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/" className="nav-link">Teams</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/create" className="nav-link">Matches</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Route exact path={["/", "/teamsList"]} component={TeamsList} />
                {/*<Route exact path="/add" component={AddTutorial} />*/}
                <Route path="/players/:id" component={PlayersList} />
                <Route path="/player/:id" component={EditPlayer} />
            </div>
            </Router>
        );
    }
}

export default App;