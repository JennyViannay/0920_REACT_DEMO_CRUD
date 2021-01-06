import React, { useState, useEffect } from "react";
import axios from "axios";

import Article from "./Article";
import Spinner from "../uui/Spinner";

const Articles = props => {
  console.log(props);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const result = await axios(`http://localhost:5000/articles/`);
      setArticles(result.data);
      setIsLoading(false);
    };
    fetchArticles();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="container">
      <div className="row mt-5">
        {articles.map(article => (
          <Article key={article.id} article={article}></Article>
        ))}
      </div>
    </div>
  );
};

export default Articles;
