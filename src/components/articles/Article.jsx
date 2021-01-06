import React from "react";
import { Link } from "react-router-dom";

const Article = ({ article }) => {
  return (
    <div className="col-4 my-1">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            #{article.id} - {article.title}
          </h5>
          <p className="card-text">{article.content}</p>
          <div className="text-center">
            <a href={"show/" + article.id} className="btn btn-primary m-1">
              See
            </a>
            <a href={"edit/" + article.id} className="btn btn-primary m-1">
              Edit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
