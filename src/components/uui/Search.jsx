import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = q => {
    setText(q);
    getQuery(q);
  };

  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="text"
        placeholder="Search"
        aria-label="Search"
        autoFocus
        value={text}
        onChange={e => onChange(e.target.value)}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
