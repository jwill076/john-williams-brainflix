import "./App.scss";
import React from "react";
import VideoDetailsData from "./data/video-details.json";
import Videos from "./data/videos.json";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

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