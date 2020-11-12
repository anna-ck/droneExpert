import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from './Home';
import Offer from './Offer';
import Contact from './Contact';
import Portfolio from './Portfolio';
import withWidth, { isWidthUp }  from '@material-ui/core/withWidth';
import { makeStyles } from '@material-ui/core/styles';
import {CssBaseline, Paper, Tabs, Tab, Typography} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
  },
  nav: {
    flexGrow: 1,
  },
  header: {
    padding: '50px 0px 30px 0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    minHeight: '130px',
    cursor: 'pointer'
  },
  content: {
    minHeight: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  footer: {
    padding: '5px',
    marginTop: '40px',
    backgroundColor: theme.palette.primary.light,
    color: '#ffffff'
  }
}));

function App(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const getResponsiveHeader = () => {
    if (isWidthUp('sm', props.width)) {
      return 'h2';
    }
    return 'h3';
  }

  const handleChange = (event, newValue = 3) => {
    setValue(newValue);
  };

  const resetValue = () => {
    setValue(0);
  }

  return (
    <Router>
      <CssBaseline/>
      <div className={classes.root}>
          <Paper className={classes.nav}>
            <Route render={({history}) => (
              <div className={classes.header} value={0} onClick={() => { history.push('/'); resetValue()}}>
                  <Typography variant={getResponsiveHeader(props)} align='center'>Drone <span style={{color:'	#DC143C', fontWeight: 500}}>Expert</span></Typography>
              </div>
            )} />
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              centered ={true}
            >
                  <Tab label="Home" component = {Link} to="/" />
                  <Tab label="Offer" component = {Link} to="/offer"/>
                  <Tab label="Portfolio" component = {Link} to="/portfolio"/>
                  <Tab label="Contact" component = {Link} to="/contact"/>
            </Tabs>
          </Paper>
        <Redirect to='/' />
        <div className={classes.content}>
          <Switch>
            <Route path="/offer">
              <Offer />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home onClick={handleChange}/>
            </Route>
          </Switch>
        </div>
        <div className={classes.footer}>
                  <Typography variant='body2' align='left'> &#xA9; Copyright by ACK 2020</Typography>
        </div>
      </div>
    </Router>
  );
}

export default withWidth()(App);
