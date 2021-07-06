import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    }
}))

export default function Navbar (props)  {
    const classes = useStyles();
    
    const onFavoritesClick = () => {
        props.onFavoritesClick();
    }

    const onHomeClick = () => {
        props.onHomeClick();
    }

    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Button 
                        className={'home-button'} 
                        color="inherit"
                        onClick={onHomeClick}
                    >
                            Home
                    </Button>
                    <Button 
                        className={"favorites-button"} 
                        onClick={onFavoritesClick} 
                        color="inherit">
                            Favorites
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )

}