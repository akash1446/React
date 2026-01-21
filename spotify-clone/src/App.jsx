import React from 'react'
import Header from './components/Header';
import Sidebar from './components/Sidebar.jsx';
import SongList from './components/SongList';
import Player from './components/Player';
import './App.css';
import { useState } from 'react';


  const songs = [
        {id: 1,name: "Premalo", src:"/songs/song1.mp3", img:"/Images/court.jpg",artist: "Anurag Kulakarni"},
        {id: 2,name: "Nuvvuntay Chaley",src:"/songs/song2.mp3",img:"/Images/4.jpg",artist: "Anirudh Ravichand"},
        {id:3, name: "Mallika Gandha",src:"/songs/song3.mp3",  img:"/Images/rakaradhe.jpg",artist:"Sid Sriram"}
    ];
  

const App = () => {
    const[song, setSong] = useState(null);
   

  return (
    <div className='app'>
      <Sidebar />

      <div className='main-content'>
        <Header />
        <SongList  songs={songs} setSong={setSong} />
    </div>

     <Player song={song} />
   </div>
  
  );
};

export default App