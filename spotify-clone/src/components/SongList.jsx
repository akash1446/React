import React from 'react'
import './SongList.css';

const SongList = ({songs, setSong} ) => {
     
    
  return (
    <div className='song-list'>
      {songs.map((song) => (
        <div 
          key={song.id} 
          className="song" 
          onClick={() => setSong(song)}
    >
       <img 
         src={song.img} 
         alt={song.name}
        className='song-img'
      />
      <div className="song-details">
        <div className='song-name'>{song.name}</div>
        <div className='song-artist'>{song.artist}</div>
      </div>
    </div>
  ))}
    </div>
  )
}

export default SongList