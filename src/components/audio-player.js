import React from "react"
import mp3_file from "./mp3/female_Item2_Audio.mp3"

const AudioPlayer = function(props) {
  return (
    <audio src={mp3_file} controls/>
  )
}
export default AudioPlayer