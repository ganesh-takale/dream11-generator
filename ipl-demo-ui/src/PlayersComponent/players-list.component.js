import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import { Image } from 'react-bootstrap';
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

    MyLink = (player) =>{
        this.props.history.push(`${"/player/"+player.id}`);
        // return(<Link to={"/player/"+player.id} />)
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
                <div className={styles.cardContainer}>
                    {players &&
                        players.map((player, index) => {
                            return(
                            <div className={player.inPlaying11 ? styles.cardBoxActive : styles.cardBox} key={index}>
                                <Card onClick={() => this.MyLink(player)} raised={player.inPlaying11} className={styles.root} key={index}>
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
                                </Card>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
