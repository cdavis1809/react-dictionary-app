import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="results">
      <br />
      <p>
        <strong>Part of Speech: </strong>
        {props.meaning.partOfSpeech}
      </p>
      <p>
        <strong>Definition: </strong> {props.meaning.definition}
      </p>
      <Synonyms synonyms={props.meaning.synonyms} />
      <p>
        <strong>Antonyms: </strong> {props.meaning.antonyms}
      </p>
      <br />
      <hr />
    </div>
  );
}
