import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowArticle = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState("");

  useEffect(() => {
    const fetchArticle = async () => {
      const result = await axios(
        `http://localhost:5000/articles/${props.match.params.id}`
      );
      console.log(result.data[0]);
      setArticle(result.data[0]);
      setIsLoading(false);
    };
    fetchArticle();
  }, []);

  return (
    <div className="container">
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default ShowArticle;
