import React, {Component, useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import TeamsList from './TeamsComponent/teams-list.component'
import Team from './TeamsComponent/team.component'
import './App.css';

// function App () {
//   const [message, setMessage] = useState("");
//
//   useEffect(() => {
//     fetch('/api/teams')
//         .then(response => response.text())
//         .then(message => {
//           setMessage(message);
//         });
//   },[])
//   return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo"/>
//           <h1 className="App-title">{message}</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//   )
// }

class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <a href="/teamsList" className="navbar-brand">
                       DreamTeam
                    </a>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/teamsList"} className="nav-link">
                                Teams
                            </Link>
                        </li>
                    </div>
                </nav>

                <div className="container mt-3">
                    <Switch>
                        <Route exact path={["/", "/teamsList"]} component={TeamsList} />
                        {/*<Route exact path="/add" component={AddTutorial} />*/}
                        {<Route path="/players/:id" component={Team} />}
                    </Switch>
                </div>
            </div>
        );
    }
}
// function App() {
//     return (
//         <div className="App">
//         <Router>
//             <div className="container">
//                 <nav className="btn btn-warning navbar navbar-expand-lg navheader">
//                     <div className="collapse navbar-collapse" >
//                         <ul className="navbar-nav mr-auto">
//                             <li className="nav-item">
//                                 <Link to={'/TeamsList'} className="nav-link">Team List</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </nav> <br />
//                 <Switch>
//                     <Route path='/TeamsList' component={TeamsList} />
//                 </Switch>
//             </div>
//         </Router>
//     </div>
// );
// }
export default App;