import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/uui/Navbar";
import Articles from "./components/articles/Articles";
import AddArticle from "./components/articles/AddArticle";
import EditArticle from "./components/articles/EditArticle";
import ShowArticle from "./components/articles/ShowArticle";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Articles} />
          <Route path="/add" component={AddArticle} />
          <Route path="/edit/:id" component={EditArticle} />
          <Route path="/show/:id" component={ShowArticle} />
        </Switch>
      </Router>

      <div className="container"></div>
    </div>
  );
};

export default App;
