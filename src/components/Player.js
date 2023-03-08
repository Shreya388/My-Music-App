import React, { useEffect, useRef, useState } from 'react'
import "../index.css";
import Control from './Control'
import Details from './Details'

function Player(props) {

    const audioEl = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        if(isPlaying) {
            audioEl.current.play()
        }else{
            audioEl.current.pause()
        }
    })

    const skipSong = (forwards = true) => {
        if(forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if(temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        }else{
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if(temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    };


  return (
    <div className='player'>
        
        <Details 
            song = {props.songs[props.currentSongIndex]}
        />
        <br /><center><p className="nextSong">
            Next Up: <span>
                {props.songs[props.nextSongIndex].title } by { " "}
                {props.songs[props.nextSongIndex].artist}
            </span>
        </p></center>
        <Control 
            isPlaying = {isPlaying}
            setIsPlaying = {setIsPlaying}
            skipSong = {skipSong}
        />
        
        <audio
         className="player__audio"
         src={props.songs[props.currentSongIndex].src}
         ref = {audioEl}
         controls>

        </audio>
        

    </div>
  )
}

export default Player