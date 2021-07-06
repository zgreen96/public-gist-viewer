import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default function Home (props) {
    const [userName, setUserName] = useState('');

    const updateUserName = (event) => {
        setUserName(event.target.value);
    }

    const searchGists = (event) => {
        event.preventDefault();
        props.onShowGists(userName);
    }

    //show search field and button
    return (
        <div className='home-content-div'>
            <form className='form' noValidate autoComplete='off'>
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