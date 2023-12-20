import React from "react";
import "./ImageResults.css";

export default function ImageResults(props) {
  if (props.imageResults) {
    console.log(props.imageResults);
    return (
      <div className="row">
        {props.imageResults.map(function (photo, index) {
          return (
            <div className="col-6 mb-4">
              <a href={photo.src.original} target="_blank" rel="nonreferrer">
                <img
                  src={photo.src.landscape}
                  key={index}
                  className="img-fluid"
                />
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
