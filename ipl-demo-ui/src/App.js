import React, {Component, useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline' 
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import TeamsList from './TeamsComponent/teams-list.component'
import styles from './Apps.module.css'; // Import css modules stylesheet as styles

import PlayersList from "./PlayersComponent/players-list.component";
import EditPlayer from "./PlayersComponent/edit-player.component";
import MatchesList from './MatchesComponent/matches-list-component';
import SingleMatchComponent from './MatchesComponent/single-match-component';
import Navbar from './components/Navbar';

class App extends Component {
    render() {
        return (
            <Router>
            <div className={styles.container} >
                <CssBaseline />
                <Navbar />
                <div className={styles.pageContainer}>
                    <Route exact path={["/", "/teamsList"]} component={TeamsList} />
                    <Route path="/teams/:id" component={PlayersList} />
                    <Route path="/upcomingMatches" component={MatchesList} />
                    <Route path="/singleMatch" component={SingleMatchComponent} />
                </div>
            </div>
            </Router>
        );
    }
}

export default App;