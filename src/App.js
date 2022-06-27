import "./App.scss";
import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Home from "../src/components/Home/Home";
import Upload from "../src/components/Upload/Upload";
import NotFound from "../src/components/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Switch>
        <Redirect from="/home" to="/" />
        <Route path="/" exact component={Home} />
        <Route path="/upload" component={Upload} />
        <Route path="/:id" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;