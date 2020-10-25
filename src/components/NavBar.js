import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import CartWidget from './CartWidget'
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 0,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    cartWidget: {
        backgroundColor: red
    }
}));

const sections = [
    {
        title: 'Relojes'
    },
    {
        title: 'Instrumentos musicales'
    },
    {
        title: 'Calculadoras'
    }
]

function NavBar({ children }) {
    const classes = useStyles();

    return (
        <header className="App-header">
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <img className={classes.toolbarTitle} src="casio-logo.svg" />
                    {/* <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                    Casio
                </Typography> */}
                    <nav>
                        {sections.map((section) => (
                            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                                {section.title}
                            </Link>
                        ))}
                    </nav>
                    {/* <Button href="#" color="primary" variant="outlined" className={classes.link}>
                    Login
                </Button> */}
                    <CartWidget style={{ backgroundColor:"red",marginLeft:"auto" }} itemCount="1" />
                </Toolbar>
            </AppBar>
        </header>
    );
}

export default NavBar;