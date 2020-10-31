import React, { Fragment } from "react";

export default function Player(props) {

  return (
    <Fragment>
      {/* {console.log(props.embedCode)}
      <div id="player" dangerouslySetInnerHTML={{ __html: props.embedCode}}/>  
      {console.log(props)} */}
      { (props.embedCode && props.embedCode.includes("mixcloud")) ? 
        <div id="mixcloud-player" dangerouslySetInnerHTML={{ __html: props.embedCode}}/> : 
        <div id="spotify-player" dangerouslySetInnerHTML={{ __html: props.embedCode}}/>
      }
    </Fragment>
  )
}