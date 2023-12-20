import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import ImageResults from "./ImageResults.js";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [imageResults, setImageResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
    console.log(response.data);
  }
  function handleImageResponse(response) {
    setImageResults(response.data);
  }
  function search(event) {
    event.preventDefault();

    let apiKey = "406035333ab93t5b036b8515eob03bf5";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let imageApiKey = "406035333ab93t5b036b8515eob03bf5";
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`;
    axios.get(imageApiUrl).then(handleImageResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="dictionary">
      <h1>Dictionary App</h1>
      <h5>Please enter a search term:</h5>
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
      <br />
      <hr />
      <Results results={results} />
      <ImageResults imageResults={imageResults} />
    </div>
  );
}
