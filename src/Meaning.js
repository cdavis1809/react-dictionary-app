import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms.js";
import Antonyms from "./Antonyms.js";

export default function Meaning(props) {
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
      <Antonyms antonyms={props.meaning.antonyms} />

      <br />
      <hr />
    </div>
  );
}
