import React from "react";
import "../App.css";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">What Gifs would you like to see?</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Gif"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
