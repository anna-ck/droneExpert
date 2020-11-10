import React from 'react';
import {Route} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import {List, ListItem, ListItemIcon, ListItemText, Typography, Card, CardMedia} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

import droneImg from '../images/drone.jpg'

const useStyles = makeStyles(theme => ({
    root: {
    },
    card: {
      height: '100%',
      margin: '60px 60px 20px 60px'
  },
    list: {
      display: 'flex',
      flexDirection: 'row',
      padding: 0,
      textAlign: 'center',
      margin: '20px 40px',
      [theme.breakpoints.down("sm")] : {
        flexDirection: 'column'
      }
  },
    media: {
      height: '68vh',
      backgroundPosition: '0% 36%',
      [theme.breakpoints.down("sm")] : {
          height: '330px',
          backgroundPosition: '53% 36%' 
      }
  },
    item: {
      flexDirection: 'column'
  },
    icon: {
    '& svg': {
        width: '100%'
    },
    color: theme.palette.secondary.main
  },
  alt: {
      textAlign: 'center',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      height: '100%',
  },
typo: {
    color: '#ffffff',
    fontSize: '35px',
    paddingTop: '30px',
    [theme.breakpoints.down("sm")] : {
        fontSize: '25px'
    }
}
  }));

function Home ({onClick}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={droneImg}>
                <div className={classes.alt}>
                    <Typography variant='h2' className={classes.typo}>Drone photography with Passion.</Typography>
                </div>
            </CardMedia>
        </Card>
        <List className={classes.list} aria-label="contact" >
            <Route render={({history}) => (
                <ListItem button className={classes.item} onClick={() => { onClick(); history.push('/contact')}}>
                    <ListItemIcon className={classes.icon}>
                        <LocationOnIcon/>
                    </ListItemIcon >
                    <ListItemText style={{textAlign: 'center'}} primary="221B, Baker Street, London" />
                </ListItem>
            )} />
            <Route render={({history}) => (
                <ListItem button className={classes.item} onClick={() => { onClick(); history.push('/contact')}}>
                    <ListItemIcon className={classes.icon}>
                        <PhoneIcon/>
                    </ListItemIcon >
                    <ListItemText style={{textAlign: 'center'}} primary="+44 7700 900077" />
                </ListItem>
            )} />
            <Route render={({history}) => (
                <ListItem button className={classes.item} onClick={() => { onClick(); history.push('/contact')}}>
                    <ListItemIcon className={classes.icon}>
                        <EmailIcon/>
                    </ListItemIcon >
                    <ListItemText style={{textAlign: 'center'}} primary="drone@expert.com" />
                </ListItem>
            )} />
        </List>
    </div>
    )
}

export default Home