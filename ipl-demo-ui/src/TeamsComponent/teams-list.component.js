import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import { Image } from 'react-bootstrap';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TeamService from "../services/team.service";
import PlayerService from "../services/player.service";
import styles from './Teams.module.css'; // Import css modules stylesheet as styles


const imagesList =[
    require('../images/mumbai.jpg'),
    require('../images/chennai.jpg'),
    require('../images/mumbai.jpg'),
    require('../images/chennai.jpg'),
    require('../images/mumbai.jpg'),
    require('../images/mumbai.jpg'),
    require('../images/mumbai.jpg'),
    require('../images/mumbai.jpg'),
]

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
            TEAMS_SET: [],
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
                    TEAMS_SET: response.data
                });
                let sampleTopics = [];
                this.state.TEAMS_SET.forEach(function (entry, index) {
                      sampleTopics.push({
                        code: entry.code,
                        id: entry.id,
                        name: entry.name,
                        image: imagesList[index]
                      });
                  });
                this.setState({
                    teams: sampleTopics
                });
                console.log('this is teams array++++',this.state.teams[0].image);
                // console.log(response.data);
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
                    {/* <ul className="list-group">
                        {teams &&
                        teams.map((team, index) => (
                            <div>
                            <li key={index}
                                className={
                                    "list-group-item " +
                                    (index === currentIndex ? "active" : "")
                                }
                                onClick={() => this.setActiveTeam(team, index)}
                            >
                                {team.name}
                            </li>
                            </div>
                        ))}
                    </ul> */}
                    <div className={styles.cardContainer}>
                        {teams &&
                            teams.map((team, index) => {
                                return(
                                    <div className={styles.cardBox}>
                                    <Card className={styles.root} key={index} onClick={() => this.setActiveTeam(team, index)}>
                                        <CardActionArea>
                                            <div className={styles.imageContainer}>
                                                <Image src={team.image} className={styles.media} alt="img" />
                                            </div>
                                            <CardContent className={styles.cardContent}>
                                                <Typography variant="h5" component="h2">
                                                    {team.name}
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

        );
    }
}
