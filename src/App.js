import "./App.scss";
import React from "react";
import axios from 'axios';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Upload from "./components/Upload/Upload";
import NotFound from "./components/NotFound/NotFound";

function App() {
    return (
      <>
        <BrowserRouter>
          <Header />
          
          <Switch>
            {/* <Redirect from="/home" to="/" /> */}
            <Route path="/" exact component={Home} />
            <Route path="/:id" componment={Home} />
            <Route path="/upload" component={Upload} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }

export default App;