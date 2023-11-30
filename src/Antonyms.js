import React from "react";

export default function Antonyms(props) {
  if (props.antonyms) {
    return (
      <div>
        <strong>Antonyms:</strong>
        <ul className="Antonyms">
          {props.antonyms.map(function (antonym, index) {
            return <span key={index}>{antonym}</span>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
