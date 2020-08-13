import React, { Component } from "react";
import { render } from "react-dom";
import 'mongoose';
import 'dotenv';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import HomePage from "./src/pages/HomePage";
import AboutPage from "./src/pages/AboutPage";
import ArticlePage from "./src/pages/ArticlePage";
import NavBar from "./src/NavBar";
import NotFoundPage from './src/pages/NotFoundPage'
import ArticlesListPage from "./src/pages/ArticlesListPage";
import BlogCreatePost from "./src/pages/BlogCreatePost";
import components from './src/components';
import "./style.css";
import "./index.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" >
          <NavBar />
          <div id="page-body">
           <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/articles-list" component={ArticlesListPage} />
            <Route path="/article/:all" component={ArticlePage} />
            <Route path="/create-post" component={BlogCreatePost} />
            <Route  component={NotFoundPage} />
          </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
