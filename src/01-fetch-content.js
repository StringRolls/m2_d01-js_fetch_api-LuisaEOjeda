"use strict";

fetch("https://api.spacexdata.com/v4/launches")
  .catch((err) => console.log("API error", err))
  .then((response) => {
    console.log("RAW response: ", response); // THis is not usable in the code directly, so we parse to json
    return response.json();
  })
  .catch((err) => console.log("JSON error", err))
  .then((data) => {
    console.log("Parsed response", data);
  })
  .catch((err) => console.log("Catch-all line", err));
3