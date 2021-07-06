import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { getUserGists } from './serverUtilities';
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
    setShowHome(true);
    setShowGistTable(false);
    setShowDetail(false);
  }

  const onShowGists = async (username) => {
    setUsername(username);
    var userGists = await getUserGists(username);
    setGists(userGists);
    console.log(userGists);                         //delete later
    setShowHome(false);
    setShowGistTable(true);
    setShowDetail(false);
  }

  return (
    <div className="App">
      <Navbar
        onFavoritesClick={onFavoritesClick}
        onHomeClick={onHomeClick}
      />
      {
        showGistTable ? <GistTable /> : <Home onShowGists={onShowGists} />
      }
      
    </div>
  );
}

export default App;
