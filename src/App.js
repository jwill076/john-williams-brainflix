import "./App.scss";
import React from "react";
import VideoDetailsData from "./data/video-details.json";
import Videos from "./data/videos.json";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      details: VideoDetailsData[0],
      videos: Videos.filter(video => video.id !== VideoDetailsData[0].id)
    }
  }

  render() {
    return (
      <>
        <Header />

        <Main dataObject={this.state.details} videosArray={this.state.videos} updateState={this.handleVideoClick}/>
      </>
    );
  }
}

export default App;