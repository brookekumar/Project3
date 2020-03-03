import React from "react";

function PCDetail(props) {
  return (
    <div className="text-center">
      <h1>Podcast Name: {props.podcastName}</h1>
      <img
        alt={props.podcast}
        className="img-fluid"
        src={props.podcast}
        style={{ margin: "0 auto" }}
      />
      <h3>Publisher: {props.podcasts}</h3>
      <h3>Genre: {props.podcasts}</h3>
      <h3>Go to Podcast: {props.podcast}</h3>
    </div>
  );
}

export default PCDetail;
