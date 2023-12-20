import React from "react";
import "./ImageResults.css";

export default function ImageResults(props) {
  if (props.imageResults) {
    console.log(props.imageResults.photos);
    return (
      <div className="row">
        {props.imageResults.photos.map(function (photo, index) {
          return (
            <div className="col-6 mb-4" key={index}>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img src={photo.src.landscape} className="img-fluid" />
              </a>
            </div>
          );
        })}
        <br />
        <hr />
      </div>
    );
  } else {
    return null;
  }
}
