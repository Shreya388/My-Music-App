import React from 'react'

function Details(props) {
  return (
    <div className='details'>
        <div className='details__img'>
            <img src= {props.song.img_src} alt= "" />
        </div>

        <h3 className= "details__title">{props.song.title}</h3>
        <h3 className='details__artist'>{props.song.artist}</h3>
    </div>
  )
}

export default Details