import React, { useState, useEffect } from "react";
import axios from "axios";

const AddArticle = props => {
  console.log(props);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createArticle = async article => {
    axios.post("http://localhost:5000/articles/", article);
  };

  const submitForm = e => {
    let article = { title: title, content: content };
    createArticle(article);
    props.history.push("/");
  };

  return (
    <div className="container">
      <h2>Add Article</h2>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title *
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          required
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Content *
        </label>
        <textarea
          className="form-control"
          id="content"
          rows="3"
          name="content"
          required
          onChange={e => setContent(e.target.value)}
        ></textarea>
      </div>
      <div className="col-12">
        <button
          className="btn btn-primary"
          type="submit"
          onClick={e => submitForm(e)}
        >
          Create Article
        </button>
      </div>
    </div>
  );
};

export default AddArticle;
