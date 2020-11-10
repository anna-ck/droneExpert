import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, AppBar, Tabs, Tab, List, ListItem, ListItemIcon, ListItemText, Typography, Accordion, AccordionSummary, AccordionDetails, Table, Paper, TableContainer, TableBody, TableRow, TableCell} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '60px 150px',
        [theme.breakpoints.down("md")] : {
            padding: '60px 100px'
        },
        [theme.breakpoints.down("sm")] : {
            padding: '60px 60px'
        },
        [theme.breakpoints.down("xs")] : {
            padding: '60px 20px'
        },
        flexGrow: 1,
    },
    header: {
        width: '80%',
        margin: '0px auto 40px auto',
        fontStyle: 'italic',
        fontSize: '17px',
    },
    bar: {
        backgroundColor: theme.palette.primary.main,
    },
    table: {
        maxWidth: '1000px',
        margin: '0 auto'
    },
    additionalInfo: {
        width: '60%',
        margin: '60px auto 40px auto',
        background: theme.palette.secondary.main,
        color: '#ffffff',
        padding: '5px',
        borderRadius: '4px'
    }
}))

function Offer () {
    const classes = useStyles()
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    function createData(name, price) {
        return { name, price };
      }
      
    const rows = [
        createData('lorem ipsum', '£140.00'),
        createData('dolor sit amet', '£160.00'),
        createData('consectetur adipiscing elit', '£210.00'),
        createData('sed do eiusmod', '£250.00'),
        createData('tempor incididunt ut labore', '£90.00'),
        createData('et dolore magna aliqua', '£75.00'),
    ];

    return (
        <div className={classes.root}>
            <Grid item xs={12} >
                <Typography variant='subtitle1' align='center' className={classes.header}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
            </Grid>
            <AppBar position="static" className={classes.bar}>
                <Tabs value={value} onChange={handleChange} aria-label="offer" variant="fullWidth">
                    <Tab label="Our services" />
                    <Tab label="Price list" />
                </Tabs>
            </AppBar>
            <div value={value} index={0} hidden={value !== 0}>
                <List className={classes.list} aria-label="contact" >
                    <ListItem alignItems='center'>
                        <ListItemIcon>
                            <ChevronRightIcon />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='subtitle1' >Excepteur sint occaecat cupidatat non proident </Typography>} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ChevronRightIcon/>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='subtitle1'>Sunt in culpa qui officia deserunt mollit anim id est laborum</Typography>}/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ChevronRightIcon />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='subtitle1' >Sed ut perspiciatis unde omnis</Typography>}/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ChevronRightIcon />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='subtitle1' >Iste natus error sit voluptatem accusantium doloremque laudantium</Typography>}/>
                    </ListItem>
                    <ListItem >
                        <ListItemIcon>
                            <ChevronRightIcon />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='subtitle1' >Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</Typography>}/>
                    </ListItem>
                    <ListItem >
                        <ListItemIcon>
                            <ChevronRightIcon />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='subtitle1' >Et quasi architecto beatae vitae dicta sunt explicabo</Typography>}/> 
                    </ListItem>
                    <ListItem >
                        <ListItemIcon>
                            <ChevronRightIcon />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant='subtitle1' >Nemo enim ipsam voluptatem quia voluptas</Typography>}/> 
                    </ListItem>
                </List>
            </div>
            <div value={value} index={1} hidden={value !== 1}>
                <div className={classes.pricelist}>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography >Excepteur sint occaecat cupidatat non proident</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="pricelist">
                                    <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.price}</TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        className={classes.accordion}
                        >
                        <Typography >Sed ut perspiciatis unde omnis</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="pricelist">
                                    <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.price}</TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        >
                        <Typography >Nemo enim ipsam voluptatem quia voluptas</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label='pricelist'>
                                    <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.price}</TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                        >
                        <Typography >Sunt in culpa</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="pricelist">
                                    <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.price}</TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            <Grid item xs={12} >
                <Typography variant='subtitle1' align='center' className={classes.additionalInfo}>
                    Lorem ipsum dolor sit amet? Consectetur adipiscing elit, sed do eiusmod tempor! 
                </Typography>
            </Grid>
        </div>
    )
}

export default Offer