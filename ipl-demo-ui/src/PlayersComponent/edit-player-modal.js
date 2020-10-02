import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import { browserHistory } from 'react-router';
import PlayerService from "../services/player.service";
import styles from './player.module.css';


class EditPlayerModal extends Component {
    constructor(props) {
        super(props);
        this.onChangePlayerCredits = this.onChangePlayerCredits.bind(this);
        this.onChangePlayerStatus = this.onChangePlayerStatus.bind(this);
        this.onChangePlayerRole = this.onChangePlayerRole.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            player:{},
            credits:'',
            type:null,
            isPlaying:false,
            modal: false,
            successMessage: ''
        }
    }
    componentDidMount() {
        console.log("edit player", this.props);
        PlayerService.get(this.props.Id)
            .then(response => {
                console.log('*(*(*(*(*((*(*((*(*(*(*(',response.data);
                this.setState({
                    player: response.data,
                    credits:response.data.credits,
                    type:response.data.type,
                    isPlaying:response.data.inPlaying11,
                    successMessage: response.data.message
                });
            })
            .catch(e => {
                console.log(e);
            });

    }

    onChangePlayerCredits(e) {
        console.log('iam value',e.target.value)
        // this.props.onChange(e.target.value);
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
                this.setState({
                    modal: false
                });
                this.props.onInputChanged(!this.state.modal, response.data.message);
            })
            .catch(e => {
                console.log(e);
            });

    }
    componentWillMount = () => {
        this.setState({
            modal: this.props.value
        })
    }
//   const [modal, setModal] = useState(props.value);

   toggle = () => {
       this.setState({
           modal: false
       })
    this.props.onInputChanged(!this.state.modal, this.state.successMessage);
  }
//   console.log('this is modal edit', props);

render(){
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
          {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={styles.modalBox}>
            <ModalHeader toggle={this.toggle}>Edit Player Info</ModalHeader>
            <ModalBody>
            <form>
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
                            defaultValue={player.credits}
                            className="form-control"
                            // value={this.state.credits}
                            // onChange={this.onChangePlayerCredits}
                            onChange={(e) => {this.onChangePlayerCredits(e)}}
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
                    {/* <br /> */}
                    {/* <div className="form-group">
                        <input type="submit" value="Update Player" className="btn btn-primary" />
                    </div> */}
                </form>            
                </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.onSubmit}>update</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
}
  

export default EditPlayerModal;