// import react from 'react';
import React, { Component }  from 'react';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import { ArrowBack, AssignmentInd,Home, Apps, ContactMail } from '@material-ui/icons';
import TemporaryDrawer from './TemporaryDrawer';
import { withRouter } from "react-router-dom";

const Navbar = (props) => {
    return(
        <Box component="nav">
            <AppBar>
                <Toolbar>
                    {
                        props.history.location.pathname !== '/' ?
                        <a onClick={() => props.history.goBack()}>
                            <ArrowBack />
                        </a>
                        :''
                    }
                    <CardContent style={{ display: 'flex', flexDirection: 'row'}} >
                        <Typography variant="h5" component="h2">
                            Dream11 generator
                        </Typography>
                        <Typography onClick={() => props.history.push('/upcomingMatches')} style={{ marginLeft: 50, cursor: 'pointer'}}variant="h5" component="h2">
                          Upcoming Matches
                        </Typography>
                    </CardContent>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default withRouter(Navbar);