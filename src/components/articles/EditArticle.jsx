import React, { useState, useEffect } from "react";
import axios from "axios";

const EditArticle = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchArticle = async () => {
      const result = await axios(
        `http://localhost:5000/articles/${props.match.params.id}`
      );
      setId(result.data[0].id);
      setTitle(result.data[0].title);
      setContent(result.data[0].content);
      setIsLoading(false);
    };
    fetchArticle();
  }, []);

  const editArticle = async article => {
    axios.post(`http://localhost:5000/articles/${id}`, article);
  };

  const submitForm = e => {
    let data = {
      id: id,
      title: title,
      content: content
    };
    editArticle(data);
    props.history.push("/");
  };

  const deleteArticle = () => {
    axios
      .delete(`http://localhost:5000/articles/${id}`)
      .then(response => console.log(response.data));
    props.history.push("/");
  };

  return isLoading ? (
    <h2>Is loading ...</h2>
  ) : (
    <div className="container">
      <h2>Edit Article #{id}</h2>
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
          defaultValue={title}
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
        >
          {content}
        </textarea>
      </div>
      <div className="col-12">
        <button
          className="btn btn-primary"
          type="submit"
          onClick={e => submitForm(e)}
        >
          Edit Article
        </button>
      </div>
      <div className="text-right">
        <button className="btn btn-danger" onClick={deleteArticle}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default EditArticle;
