import React from "react";
import "../Main/Main.scss";
import VideoDisplay from "../VideoDisplay/VideoDisplay";
import VideoDetails from "../VideoDetails/VideoDetails";
import JoinTheConversation from "../JoinTheConversation/JoinTheConversation";
import NextVideos from "../NextVideos/NextVideos";

class Main extends React.Component {
    render() {
        return(
            <main className="main">
                <VideoDisplay data={this.props.dataObject}/>

                <article className="main__flexbox">
                    <article className="flexbox__container1">

                        <VideoDetails data={this.props.dataObject}/>

                        <JoinTheConversation data={this.props.dataObject}/>
                    </article>

                    <article className="flexbox__container2">
                        <NextVideos videos={this.props.videosArray} updateState={this.props.updateState}/>
                    </article>
                </article>
            </main>
        )
    }
}

export default Main