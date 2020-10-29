import React from "react";

export default function Player(props) {
  console.log(props.episodeData);
  return(
    <div id="player" dangerouslySetInnerHTML={{ __html: props.episodeData.embed_code}}/>
  )
}