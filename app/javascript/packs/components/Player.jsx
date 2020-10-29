import React from "react";

export default function Player(props) {
  return(
    <div id="player" dangerouslySetInnerHTML={{ __html: props.embedCode}}/>
  )
}