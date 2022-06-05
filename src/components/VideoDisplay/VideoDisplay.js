import PlayButtonIcon from "../../assets/icons/play.svg";
import FullScreenIcon from "../../assets/icons/fullscreen.svg";
import VolumeUpIcon from "../../assets/icons/volume_up.svg";
import "../VideoDisplay/VideoDisplay.scss";
import React from "react";

class VideoDisplay extends React.Component {

    render() {
        const { image, duration } = this.props.data;

        return (
            <article className="main__hero-display-background">
                <article className="main__hero-display">
                    
                    <video className="hero-display__video" src="#" type="video/mp4" poster={image}>

                    </video>

                    <article className="hero-display__controls">
                        <div className="controls__pb-icon-container">
                            <img
                                className="controls__pb-icon"
                                src={PlayButtonIcon}
                                alt="Play Button Icon"
                            />
                        </div>

                        <div className="controls__flexbox1">
                            <div className="flexbox1__video-line-container">
                                <div className="flexbox1__video-line">

                                </div>
                            </div>

                            <div className="flexbox1__video-time-container">
                                <div className="flexbox1__video-time">
                                    0:00 / {duration}
                                </div>
                            </div>
                        </div>

                        <div className="controls__flexbox2">
                            <div className="flexbox2__fs-icon-container">
                                <img
                                    className="flexbox2__fs-icon"
                                    src={FullScreenIcon}
                                    alt="FullScreen Icon"
                                />
                            </div>

                            <div className="flexbox2__vu-icon-container">
                                <img
                                    className="flexbox2__vu-icon"
                                    src={VolumeUpIcon}
                                    alt="Volume Up Icon"
                                />
                            </div>
                        </div>
                    </article>
                </article>
            </article>
        )
    }
}

export default VideoDisplay