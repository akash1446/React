import { useState, useRef, useEffect } from "react"
import React from 'react'
import './Player.css'

const Player = ({song}) => {
    const audioRef=useRef(null)
    const[currentTime, setCurrentTime] = useState(0);
    const[duration, setDuration] = useState(0)
    const[isPlaying, setIsPlaying] = useState(false);
    
    useEffect(() =>{
      if(!song) return;

       const audio =  audioRef.current;
        audio.src = song.src;
        audio.load();

        audio 
          .play()
          .then(()=> setIsPlaying(true))
          .catch(() => {});
      
    },[song])

    useEffect(()=>{
      const audio = audioRef.current;
      if(!audio) return;

      const updateTime = () => setCurrentTime(audio.currentTime);
      const setMeta = () => setDuration(audio.duration);
    

      audio.addEventListener("timeupdate", updateTime);
      audio.addEventListener("loadedmetadata", setMeta);

      return () => {
        audio.removeEventListener("timeupdate", updateTime);
        audio.removeEventListener("loadedmetadata",setMeta);
      };
    }, []);

    const playSong = () => {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true)
    }
        const pauseSong = () => {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    


  return (
   <div className="Player">
      <audio ref={audioRef} />
      
     {song && (
        <div className="player-left">
          <img
            src={song.cover}
            alt={song.name}
            className="player-img"
          />

        <div>
           <div className="player-song">{song.name}</div>
           <div className="player-artist">{song.artist}</div>
        </div>
    </div>

     )}
      <div className="player-center">
         
        <div className="controls">
          {!isPlaying ? (
          <button onClick={playSong}>▶</button>
          ) : (
          <button onClick={pauseSong}>⏸</button>
          )}
        </div>
      </div>
        <input type="range"   min="0" max={duration || 0}
            value={currentTime} onChange={(e) => {
              audioRef.current.currentTime = e.target.value;
              setCurrentTime(e.target.value);
            }}
        />
     
     
    </div>
  );
};

export default Player