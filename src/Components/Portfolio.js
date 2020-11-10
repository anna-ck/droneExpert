import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {GridList, GridListTile, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography, CircularProgress} from '@material-ui/core';
import withWidth, { isWidthUp }  from '@material-ui/core/withWidth';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      margin: '40px 60px',
      flexDirection: 'column',
      alignItems: 'center'
    },
    header: {
        width: '80%',
        margin: '40px auto 0px auto',
        fontStyle: 'italic',
    },
    gridList: {
      [theme.breakpoints.up("md")] : {
          width: '1220px'
      },
      [theme.breakpoints.down("md")] : {
          width: '915px'
      },
      [theme.breakpoints.down("sm")] : {
          width: '610px'
      },
      [theme.breakpoints.down("xs")] : {
          width: '305px'
      },
      height: "auto",
    },
    photo: {
       cursor: 'pointer'
    },
    loading: {
        margin: '0 auto',
    },
    img: {
        height: 'auto',
        [theme.breakpoints.up("sm")] : {
            width: '600px'
        },
        [theme.breakpoints.down("sm")] : {
            width: '470px'
        },
        [theme.breakpoints.down("xs")] : {
            width: '380px'
        },
    },
    actions: {
        justifyContent: 'space-between'
    }
  }));

function Portfolio (props) {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [loading, setLoading] = useState(true)
    const [counter, setCounter] = useState(0);

    const reqSvgs = require.context ( '../images/photos', false, /\.jpg$/ )
    const paths = reqSvgs.keys ()
    const svgs = paths.map( path => reqSvgs(path))

    const handleLoad = () => {
        setCounter(prevCounter => prevCounter + 1)
        if (counter === svgs.length-1) {
            setLoading(false)
        }
    }

    const getGridListCols = () => {
        if (isWidthUp('lg', props.width)) {
          return 4;
        }
        if (isWidthUp('md', props.width)) {
            return 3;
        }
        if (isWidthUp('sm', props.width)) {
          return 2;
        }
        if (isWidthUp('xs', props.width)) {
            return 1;
        }
        return 1;
    }

  
    const handleClickOpen = index => {
        setSelectedIndex(index);
    };
  
    const handleClose = () => {
        setSelectedIndex(null);
    };

    const openPreviousPhoto = () => {
        const newIndex = selectedIndex - 1
        if (newIndex >= 0) {
            handleClickOpen(newIndex)
        }
        else {
            setSelectedIndex(null)
        }
    };

    const openNextPhoto = () => {
        const newIndex = selectedIndex + 1
        if (newIndex <= svgs.length-1) {
            handleClickOpen(newIndex)
        }
        else {
            setSelectedIndex(null)
        }
    };


    return (
      <>
        <div className={classes.root}>
          <div className={classes.loading}>
            <CircularProgress style={{display: loading ? "block" : "none"}}/>
          </div>
          <GridList cols={getGridListCols(props)} cellHeight={210} className={classes.gridList} spacing={7} style={{visibility: loading ? "hidden" : "visible"}}>
            {paths.map((photo, index) => (
                <GridListTile key={index} className={classes.photo}>
                    <img key={index} src={svgs[index].default} alt='' onLoad={handleLoad} onClick={() => handleClickOpen(index)}/>
                </GridListTile>
            ))}
          </GridList>
          <Dialog open={selectedIndex !== null} onClose={handleClose}>
            {selectedIndex !== null && (
                <>
                <DialogTitle>
                    <Typography variant='body2'>
                        {selectedIndex + 1}/{svgs.length}
                    </Typography>
                </DialogTitle>
                <DialogContent style={{padding: 0}}>
                    <img src={svgs[selectedIndex].default} className={classes.img} alt={selectedIndex}/>
                </DialogContent>
                <DialogActions className={classes.actions}>
                    <IconButton color="primary" aria-label="previous photo" onClick={openPreviousPhoto}>
                        <NavigateBeforeIcon fontSize='large'/>
                    </IconButton>
                    <IconButton color="primary" aria-label="next photo" onClick={openNextPhoto}>
                        <NavigateNextIcon fontSize='large'/>
                    </IconButton>
                </DialogActions>
                </>
            )}
          </Dialog>
        </div>
      </>
    )
}

export default withWidth()(Portfolio)