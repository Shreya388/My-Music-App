import { useEffect, useState } from "react";
import Player from "./components/Player";
import "./index.css"

function App() {

  const [songs] = useState([
    {
      title: "Jehda Nasha",
      artist: "Tanishk | Amar | Yohani",
      img_src: "./images/jehda-nasha.jpg",
      src: "./songs/Jehda Nasha.mp3"
    },

    {
      title: "Panghat",
      artist: "Asees Kaur",
      img_src: "./images/panghat.jpg",
      src: "./songs/Panghat.mp3"
    },

    {
      title: "Nadiyon Paar",
      artist: "Rashmeet | Shamur | IP Singh",
      img_src: "./images/nadiyon-paar.jpg",
      src: "./songs/Nadiyon Paar.mp3"
    },

    {
      title: "Laila",
      artist: "Tony Kakkar",
      img_src: "./images/Laila.jpg",
      src: "./songs/Laila.mp3"
    },

    {
      title: "Naach Meri Rani",
      artist: "Tanishk Bagchi | Nikhita Gandhi | Bhushan Kumar",
      img_src: "./images/naach-meri-rani.jpg",
      src: "./songs/Naach Meri Rani.mp3"
    }
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if(currentSongIndex + 1 > songs.length - 1) {
        return 0
      } else {
        return currentSongIndex + 1
      }
    })
  }, [currentSongIndex, songs.length])
  
  return (
    <div className="App">
      <Player 
        currentSongIndex = {currentSongIndex}
        setCurrentSongIndex = {setCurrentSongIndex}
        nextSongIndex = {nextSongIndex}
        songs = {songs}
      />
    </div>
  );
}

export default App;
