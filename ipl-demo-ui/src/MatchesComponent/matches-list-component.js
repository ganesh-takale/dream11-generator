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
import styles from './match.module.css';
import EditPlayerModal from "../PlayersComponent/edit-player-modal";

export default class MatchesList extends Component {
    constructor(props) {
        super(props);
        // this.refreshList = this.refreshList.bind(this);
        // this.retrievePlayers = this.retrievePlayers.bind(this);
        // this.setActivePlayer = this.setActivePlayer.bind(this);
        this.state = {
            matches:[],
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

    MyLink = (singleMatch) =>{
        console.log(singleMatch)
        this.props.history.push({
            pathname: '/singleMatch',
            state: { singleMatch: singleMatch }
          })
        // this.props.history.push(`${"/player/"+player.id}`);
    }
    retrievePlayers() {
        PlayerService.getUpcomingMatches()
            .then(response => {
                this.setState({
                    matches: response.data
                });
                console.log(this.state.matches);
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
    Modal = (player, modal) => {
        console.log('modal value',modal)
        console.log(this.props);
            this.setState({
                showModal: true,
                id: player.id
            })
    }
    onInputChanged = (modal, message) => {
        console.log('This is the changed text: PARENT!!!!!!!!!!!!!!!!!!!!', message);
        this.setState({
            showModal: false,
            toastFlag: true,
            showSuccess: message
        });
        setTimeout(() => {
            this.setState({
                showSuccess: null
            })
        }, 2500);
        this.retrievePlayers();
    }
    toggleShowA =() =>{
        this.setState({
            toastFlag: !this.state.toastFlag
        })
    }

    render() {
        const {matches, toastFlag} = this.state;
        return (
            <div>
                {
                    toastFlag ? 
                    <div>
                        <div className="card-block">
                        {this.state.showSuccess != null && <div className="alert alert-success" > {this.state.showSuccess}</div> }
                        </div>
                    </div>: ''
                }
                <div className={styles.cardContainer}>
                    {matches &&
                        matches.map((match, index) => {
                            return(
                            <div className={styles.cardBox} key={index}>
                                <Card onClick={() => this.MyLink(match)}  className={styles.root} key={index}>
                                {/* onClick={() => this.MyLink(player)} */}
                                    <CardActionArea style={{textAlign: 'center'}}>
                                        <CardContent className={styles.cardContent}>
                                            <Typography variant="h6" component="h2">
                                               Venue: {match.location}
                                            </Typography>
                                            <Typography variant="h6" component="h2">
                                                {/* {match.dateTime} */}
                                               Date: {moment(match.dateTime).format('ll')}
                                            </Typography>
                                            <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center', marginTop: 40}}>
                                            <Typography variant="h5" component="h2">
                                                {match.team1.name}
                                            </Typography>
                                            <Typography variant="h6" component="h2">
                                                VS
                                            </Typography>
                                            <Typography variant="h5" component="h2">
                                                {match.team2.name}
                                            </Typography>
                                            </div>
                                          
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
            // <div>
            //     <h1>i am ajay</h1>
            // </div>
        )
    }
}
