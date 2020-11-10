import React, {useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Typography} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '60px 100px',
        [theme.breakpoints.down("md")] : {
            padding: '60px 60px'
        },
        [theme.breakpoints.down("xs")] : {
            padding: '60px 20px'
        },
        flexGrow: 1,
    },
    map: {
        margin: '0 auto',
        textAlign: 'center'
    },
    paper: {
        textAlign: 'center',
        height: '500px'
    },
    logo: {
        padding: '10px'
    },
    list: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '0 auto',
        [theme.breakpoints.down("lg")] : {
            width: '80%'
        },
        [theme.breakpoints.down("md")] : {
            width: '90%'
        },
    },
    info: {
        flexDirection: 'column',
        margin: '15px 0px',
        alignItems: 'flex-start',
        [theme.breakpoints.down("sm")] : {
            alignItems: 'center',
            textAlign: 'center'
        },
    },
    row: {
        [theme.breakpoints.down("sm")] : {
           width: '240px'
        },
    }
}))

function Contact () {
    const classes = useStyles()
    const mapRef = useRef()

    const handleScroll = () => {
        mapRef.current.scrollIntoView({ 
            behavior: "smooth", 
            block: "nearest"
         })
    }

    return (
        <div className={classes.root}>
        <Grid container spacing={6}>
            <Grid item container sm={12} md={6} justify='center'>
                <List className={classes.list} aria-label="contact-items" >
                    <ListItem button alignItems='center'>
                        <ListItemText className={classes.logo} primary={
                        <Typography variant='h5' align='center'>
                            Drone 
                            <span style={{color:'#DC143C', fontWeight: 500}}> Expert </span>
                            Jane Doe
                        </Typography>} />
                    </ListItem>
                    <ListItem button className={classes.row}>
                        <ListItemIcon>
                            <LocationOnIcon />
                        </ListItemIcon>
                        <ListItemText primary="221B, Baker Street, London" onClick={handleScroll}/>
                    </ListItem>
                    <ListItem button className={classes.row}>
                        <ListItemIcon>
                            <PhoneIcon />
                        </ListItemIcon>
                        <ListItemText primary="+44 7700 900077" />
                    </ListItem>
                    <ListItem button className={classes.row}>
                        <ListItemIcon>
                            <EmailIcon />
                        </ListItemIcon>
                        <ListItemText primary="drone@expert.com" />
                    </ListItem>
                    <ListItem button className={classes.info}>
                        <ListItemText primary={<Typography variant='subtitle2'>Opening hours: <br/> Mo-Fr 08:00-17:30</Typography>} />
                        <ListItemText primary={<Typography variant='subtitle2' >Free parking zone in front of the building. </Typography>} />
                        <ListItemText primary={<Typography variant='subtitle2' color='primary'>We accept card payments. </Typography>} />
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={12} sm={12} md={6} >
                <Paper className={classes.paper} ref={mapRef}>
                    <iframe title='map' className={classes.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.424670498446!2d-0.1607443842762619!3d51.52377031732719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761acf33628211%3A0x445d7677a88322e1!2s221B%20Baker%20St%2C%20Marylebone%2C%20London%20NW1%206XE%2C%20Wielka%20Brytania!5e0!3m2!1spl!2spl!4v1605001614590!5m2!1spl!2spl" width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden={false} tabIndex="0"></iframe>
                </Paper>
            </Grid>
        </Grid>
        </div>
    )
}

export default Contact