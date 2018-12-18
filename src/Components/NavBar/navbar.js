import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {NavLink} from 'react-router-dom';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'white',
        padding:'0px',
    },
    button: {
        margin: theme.spacing.unit,
        color: 'black',
        padding: '10px',
        "&:active,&:hover,&:focus": {
            color: "orange",
            outline: 'none',
            backgroundColor: 'transparent',
        }
    },
    link:{
        '&:hover': {
        textDecoration :'none',
        }
    },
    search: {
        float: 'right',
        margin:'3px'
    }
})

function NavBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
        <NavLink to='/' exact className={classes.link} >
            <Button className={classes.button} >
                Home
                </Button>
                </NavLink>
                <NavLink to='/mangalist' exact className={classes.link}>
            <Button className={classes.button} >
                MangaList
                </Button>
                </NavLink>
                <NavLink to='/contact' exact className={classes.link}>
            <Button className={classes.button} >
                Contact
                </Button>
                </NavLink>
                <NavLink to='/login' exact className={classes.link}>
            <Button className={classes.button}>
                Login
                </Button>
                </NavLink>
                <NavLink to='/signup' exact className={classes.link}>
            <Button className={classes.button}>
                SignUp
                </Button>
                </NavLink>
            <IconButton aria-label="Delete" className={classes.search}>
                    <SearchIcon />
            </IconButton>
        </div>
    )
}
NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);