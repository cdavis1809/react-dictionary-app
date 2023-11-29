import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="results">
      <br />
      <h5>
        <strong>Part of Speech: </strong>
        {props.meaning.partOfSpeech}
      </h5>
      <p>
        <strong>Definition: </strong> {props.meaning.definition}
      </p>
      <p>
        <strong>Synonyms: </strong> {props.meaning.synonyms}
      </p>
      <p>
        <strong>Antonyms: </strong> {props.meaning.antonyms}
      </p>
      <br />
      <hr />
    </div>
  );
}
