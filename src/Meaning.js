import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms.js";
import Antonyms from "./Antonyms.js";

export default function Meaning(props) {
  return (
    <div className="results">
      <br />
      <div className="speech">{props.meaning.partOfSpeech}</div>
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
