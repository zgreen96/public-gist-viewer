import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles ((theme) => ({
    root: {
        margin: theme.spacing(1),
        width: '25ch',
    }
}))

export default function Home (props) {
    const classes = useStyles();
    const [userName, setUserName] = useState('');

    const updateUserName = (event) => {
        setUserName(event.target.value);
    }

    const searchGists = (event) => {
        event.preventDefault();
        props.onShowGists(userName);
    }

    return (
        <div className='home-content-div'>
            <form className={classes.root} noValidate autoComplete='off'>
                <TextField id='outlined-basic' label='username' onChange={updateUserName}/>
                <Button
                    className='search-gists-button'
                    onClick={searchGists}
                    type='submit'
                >
                    Search Gists
                </Button>
            </form>
        </div>
    )

}