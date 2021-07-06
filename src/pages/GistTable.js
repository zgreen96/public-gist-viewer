import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import Button from '@material-ui/core/Button';
import moment from 'moment';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        maxWidth: 1400
    }
})

export default function GistTable(props) {
    const classes = useStyles();
    const gists = props.gists;
    const isFavoritesTable = props.isFavoritesTable;

    const toggleFavorite = (gist) => {
        props.toggleFavorite(gist);
    }

    const onShowDetail = (gistId) => {
        props.onShowDetail(gistId);         
    }
    
    //maps gists to rows. Also toggle favorite icons
    if (gists) {
        return (
            <div className='gist-table-div'>
                {isFavoritesTable ? (
                        <div className="title">
                            <h2>Favorite Gists</h2>
                        </div>
                    ): null}
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="table">
                        <TableHead>
                            <TableRow>
                                <TableCell><b>Description</b></TableCell>
                                <TableCell align="right"><b>Date</b></TableCell>
                                <TableCell align="right"><b>Favorite</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {gists.map((gist) => (
                                <TableRow key={gist.description} >     
                                    <TableCell component='th' scope="row">
                                        <Button
                                            className='showGistId'
                                            color='inherit'
                                            onClick={() => {
                                                onShowDetail(gist.id)
                                            }}
                                        >
                                            {gist.description}
                                        </Button>
                                    </TableCell>
                                    <TableCell align="right">{moment(gist.dateCreated).format("DD MMM YYYY")}</TableCell>
                                    {gist.favorite ? (
                                        <TableCell align='right'>
                                            <Button
                                                className='favorite-button'
                                                color="inherit"
                                                onClick={() => {
                                                    toggleFavorite(gist)
                                                }}
                                            >
                                                <FontAwesomeIcon icon={solidStar} />
                                            </Button>
                                        </TableCell>) : (
                                        <TableCell align='right'>
                                            <Button
                                                className='favorite-button'
                                                color="inherit"
                                                onClick={() => {
                                                    toggleFavorite(gist)
                                                }}
                                            >
                                                <FontAwesomeIcon icon={faStar} />
                                            </Button>
                                        </TableCell>
                                    )}
                                    <Table align="right">{gist.favorite}</Table>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    } 
    else {
        return (
            <div>No gists yet</div>
        )
    }

}