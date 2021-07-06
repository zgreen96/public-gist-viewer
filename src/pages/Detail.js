import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    title: {
        fontSize: 14,
        color: 'gray'
    },
});

export default function Detail (props) {
    const gistId = props.gistId;
    const details = props.details;
    const username = props.username;
    const classes = useStyles();

    const onShowGists = () => {
        props.onShowGists(username);
    }

    return (
        <div className='details-div'>
            <Card className={classes.root}>
                <CardContent>
                    <Button 
                        className='detail-back-button'
                        onClick={onShowGists}
                    >
                       Back
                    </Button>
                    <p className={classes.title}>
                        Gist Id: {gistId}
                    </p>
                    <p className='files-label'>
                        <b>Gist Files:</b>
                    </p>
                    {details.map((detail) => (
                        <p className='file'>
                            Filename: {detail.filename}
                        </p>
                    ))}

                </CardContent>
            </Card>
        </div>
    )
}