import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import { Image, Toast } from 'react-bootstrap';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PlayerService from "../services/player.service";
import { Link } from 'react-router-dom';
import styles from './player.module.css';
import EditPlayerModal from "./edit-player-modal";

export default class PlayersList extends Component {
    constructor(props) {
        super(props);
        this.refreshList = this.refreshList.bind(this);
        this.retrievePlayers = this.retrievePlayers.bind(this);
        this.setActivePlayer = this.setActivePlayer.bind(this);

        this.state = {
            players:[],
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

    MyLink = (player) =>{
        this.props.history.push(`${"/player/"+player.id}`);
    }
    retrievePlayers() {
        PlayerService.getAll(this.props.match.params.id)
            .then(response => {
                console.log('Get upc',response.data);
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
        const {players, toastFlag} = this.state;
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
                    {players &&
                        players.map((player, index) => {
                            return(
                            <div className={player.inPlaying11 ? styles.cardBoxActive : styles.cardBox} key={index}>
                                <Card  raised={player.inPlaying11} className={styles.root} key={index}>
                                {/* onClick={() => this.MyLink(player)} */}
                                    <CardActionArea>
                                        <div className={styles.imageContainer}>
                                            <Image src={require('../images/user.png')} className={styles.media} alt="img" />
                                        </div>
                                        <CardContent className={styles.cardContent}>
                                            <Typography variant="h5" component="h2">
                                                {player.name}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <Button onClick={() => this.Modal(player)}>
                                        Edit
                                    </Button>
                                </Card>
                            </div>
                            )
                        })
                    }
                </div>
                {
                this.state.showModal && <EditPlayerModal onInputChanged={this.onInputChanged} Id={this.state.id} toggle={this.state.showModal} value={true} />
                }
            </div>
        )
    }
}
