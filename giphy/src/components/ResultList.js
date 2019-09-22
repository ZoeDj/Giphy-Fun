import React from "react";
import "../App.css";

function ResultList(props) {
  return (
    <ul className="giphy-list">
      {props.results.map(result => (
        <li className="giphy-item" key={result.id}>
          <img
            alt={result.title}
            className="giphy-img"
            src={result.images.original.url}
          />
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
