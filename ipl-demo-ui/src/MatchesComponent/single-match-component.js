import React, { Component } from "react";
import moment from 'moment';
import Card from '@material-ui/core/Card';
import { Image, Toast } from 'react-bootstrap';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PlayerService from "../services/team.service";
import { Link } from 'react-router-dom';
import styles from './singlematch.module.css';
import EditPlayerModal from "../PlayersComponent/edit-player-modal";

export default class SingleMatchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team1:[],
            team2: [],
            currentPlayer: null,
            showModal: false,
            id: null,
            toastFlag: false,
            showSuccess: null
        };
    }

    componentDidMount() {
        this.retrievePlayers();
    }

    MyLink = (match) =>{
        // console.log(match)
        // this.props.history.push(`${"/player/"+player.id}`);
    }
    retrievePlayers = async() => {
        console.log('this is single match', this.props.location.state.singleMatch.team1.id)
        console.log('this is single match', this.props.location.state.singleMatch.team2.id)


        await PlayerService.getplaying11(this.props.location.state.singleMatch.team1.id)
            .then(response => {
                this.setState({
                    team1: response.data
                });
            })
            .catch(e => {
                console.log(e);
            });
        await PlayerService.getplaying11(this.props.location.state.singleMatch.team2.id)
            .then(response => {
                this.setState({
                    team2: response.data
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

    render() {
        const {team2, team1} = this.state;
        console.log('team1', team1);
        console.log('team2', team2);

        return (
            <div>
                <h4>Please Select atleast 1 Weeket-Keeper, atleast 3 Batsman, atleast 1 All-Rounder, alleast 3 Bowlers in order to algorithm to work.</h4>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                {/* Team 1 */}
                <div className={styles.cardContainer}>
                    <div>
                        <h2>{team1.length > 0? `Team: ${team1[0].team}`: 'Not Found'}</h2>
                        <h2>{team1.length > 0 ? `Players: ${team1.length}`: 'Not Found'}</h2>
                    </div>
                    <Card className={styles.root}>
                        <h1>Wicket Keeper</h1>
                    {team1 &&
                        team1.map((team1, index) => {
                            return(
                                team1.role == 'WK' ?
                            <div className={styles.cardBox} key={index}>
                                <CardActionArea>
                                    <CardContent className={styles.cardContent}>
                                        <Typography variant="h6" component="h2">
                                        name: {team1.name}
                                        </Typography>
                                        <Typography variant="h6" component="h2">
                                        Credits: {team1.credits}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </div>
                            : ''
                            )
                        })
                    }
                    <h1>Batsman</h1>
                    {team1 &&
                        team1.map((team1, index) => {
                            return(
                                team1.role == 'BAT' ?
                            <div className={styles.cardBox} key={index}>
                                <CardActionArea>
                                    <CardContent className={styles.cardContent}>
                                        <Typography variant="h6" component="h2">
                                        name: {team1.name}
                                        </Typography>
                                        <Typography variant="h6" component="h2">
                                        Credits: {team1.credits}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </div>
                            : ''
                            )
                        })
                    }
                    <h1>Bowler</h1>
                    {team1 &&
                        team1.map((team1, index) => {
                            return(
                                team1.role == 'BOW' ?
                            <div className={styles.cardBox} key={index}>
                                <CardActionArea>
                                    <CardContent className={styles.cardContent}>
                                        <Typography variant="h6" component="h2">
                                        name: {team1.name}
                                        </Typography>
                                        <Typography variant="h6" component="h2">
                                        Credits: {team1.credits}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </div>
                            : ''
                            )
                        })
                    }
                    <h1>All-Rounder</h1>
                    {team1 &&
                        team1.map((team1, index) => {
                            return(
                                team1.role == 'ALL' ?
                                <div className={styles.cardBox} key={index}>
                                    <CardActionArea>
                                        <CardContent className={styles.cardContent}>
                                            <Typography variant="h6" component="h2">
                                            name: {team1.name}
                                            </Typography>
                                            <Typography variant="h6" component="h2">
                                            Credits: {team1.credits}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </div>
                                : ''
                            )
                        })
                    }
                    </Card>
                </div>


                {/* team  2 */}
                <div className={styles.cardContainer}>
                    <div>
                        <h2>{team2.length > 0? `Team: ${team2[0].team}`: 'Not Found'}</h2>
                        <h2>{team2.length > 0 ? `Players: ${team2.length}`: 'Not Found'}</h2>
                    </div>
                    <Card className={styles.root}>
                        <h1>Wicket Keeper</h1>
                    {team2 &&
                        team2.map((team2, index) => {
                            return(
                                team2.role == 'WK' ?
                            <div className={styles.cardBox} key={index}>
                                <CardActionArea>
                                    <CardContent className={styles.cardContent}>
                                        <Typography variant="h6" component="h2">
                                        name: {team2.name}
                                        </Typography>
                                        <Typography variant="h6" component="h2">
                                        Credits: {team2.credits}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </div>
                            : ''
                            )
                        })
                    }
                    <h1>Batsman</h1>
                    {team2 &&
                        team2.map((team2, index) => {
                            return(
                                team2.role == 'BAT' ?
                            <div className={styles.cardBox} key={index}>
                                <CardActionArea>
                                    <CardContent className={styles.cardContent}>
                                        <Typography variant="h6" component="h2">
                                        name: {team2.name}
                                        </Typography>
                                        <Typography variant="h6" component="h2">
                                        Credits: {team2.credits}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </div>
                            : ''
                            )
                        })
                    }
                    <h1>Bowler</h1>
                    {team2 &&
                        team2.map((team2, index) => {
                            return(
                                team2.role == 'BOW' ?
                            <div className={styles.cardBox} key={index}>
                                <CardActionArea>
                                    <CardContent className={styles.cardContent}>
                                        <Typography variant="h6" component="h2">
                                        name: {team2.name}
                                        </Typography>
                                        <Typography variant="h6" component="h2">
                                        Credits: {team2.credits}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </div>
                            : ''
                            )
                        })
                    }
                    <h1>All-Rounder</h1>
                    {team2 &&
                        team2.map((team2, index) => {
                            return(
                                team2.role == 'ALL' ?
                                <div className={styles.cardBox} key={index}>
                                    <CardActionArea>
                                        <CardContent className={styles.cardContent}>
                                            <Typography variant="h6" component="h2">
                                            name: {team2.name}
                                            </Typography>
                                            <Typography variant="h6" component="h2">
                                            Credits: {team2.credits}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </div>
                                : ''
                            )
                        })
                    }
                    </Card>
                </div>
            </div>
            </div>
        )
    }
}
