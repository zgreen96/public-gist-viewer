import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { getUserGists, getAllFavorites, toggleFavoriteAPI, getDetailAPI } from './serverUtilities';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import GistTable from './pages/GistTable';
import Detail from './pages/Detail';


function App() {

  //toggle view variables
  const [showHome, setShowHome] = useState(true);
  const [showGistTable, setShowGistTable] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [isFavoritesTable, setIsFavoritesTable] = useState(false);

  //state variables passed throughout pages
  const [username, setUsername] = useState('');
  const [gists, setGists] = useState([]);
  const [gistId, setGistId] = useState(0);
  const [details, setDetails] = useState([]);

  //functions for navigating to pages from navbar click
  const onHomeClick = () => {
    setShowHome(true);
    setShowGistTable(false);
    setShowDetail(false);
  }

  const onFavoritesClick = () => {
    setIsFavoritesTable(true);
    onShowGists('favorites');
  }

  //If favorites table, call favorites api, then display favorites using gistTable
  //else, call api to get gists based on username, set gists, then display gistTable
  const onShowGists = async (username) => {
    setUsername(username);
    if(username === 'favorites'){
      setIsFavoritesTable(true);
      var favoritedGists = await getAllFavorites();
      setGists(favoritedGists);
    }
    else{
      setIsFavoritesTable(false);
      var userGists = await getUserGists(username);
      setGists(userGists);
    }
    setShowHome(false);
    setShowGistTable(true);
    setShowDetail(false);
  }

  //Show detail based on gist Id
  const onShowDetail = async (gistId) => {
    setGistId(gistId);
    var newDetails = await getDetailAPI(gistId);
    setDetails(newDetails);
    setShowHome(false);
    setShowGistTable(false);
    setShowDetail(true);
  }

  //toggle favorite in gistTable
  const toggleFavorite = async (gist) => {
    var newGist = gist;
    newGist.favorite = !(gist.favorite);
    await toggleFavoriteAPI(gist);
    onShowGists(username);                                    //to re-render gistTable, likely another way, but rushing
  }


  //toggle views based on the toggleVariables
  return (
    <div className="App">
      <Navbar
        onFavoritesClick={onFavoritesClick}
        onHomeClick={onHomeClick}
      />
      {
        showGistTable ? (
          <GistTable gists={gists} toggleFavorite={toggleFavorite} isFavoritesTable={isFavoritesTable} onShowDetail={onShowDetail}/> 
        ) : 
        showDetail ? (
          <Detail details={details} onShowGists={onShowGists} gistId={gistId} username={username} /> 
        ) :
        <Home onShowGists={onShowGists} />
      }

    </div>
  );
}

export default App;
