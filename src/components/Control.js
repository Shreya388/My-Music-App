import React from 'react'
import { FaAngleLeft, FaPlay, FaAngleRight } from "react-icons/fa";

function Control(props) {
  return (
    <div className='control'>
        <button className="SkipSong" onCilck= {() => props.skipSong(false)}>
            <FaAngleLeft />
        </button>
        <button className="PlaySong" onClick = {() => props.setIsPlaying(!props.isPlaying)}>
          <FaPlay />
        </button>
        <button className="SkipSong" onClick = {() => props.skipSong()}>
            <FaAngleRight />
        </button>
    </div>
  )
}

export default Control