import Views from "../../assets/icons/views.svg";
import Likes from "../../assets/icons/likes.svg";
import "../VideoDetails/VideoDetails.scss";
import React from "react";

const TimeStamp = (timestamp) => {
    const timeStamp = new Date(timestamp);
    return timeStamp.toLocaleDateString();
};

class VideoDetails extends React.Component {

    render() {
        const { title, channel, views, likes, description, timestamp, id } = this.props.data;
    
        const timestampValue = TimeStamp(timestamp);

        return (
            <section key={id} className="container1__flexbox1">
                <h1 className="flexbox1__video-title">
                    {title}
                </h1>

                <div className="flexbox1__video-details">
                    <div className="video-details__container1">
                        <p className="container1__video-channel">
                            By {channel}
                        </p>

                        <div className="container1__video-timestamp">
                            {timestampValue}
                        </div>
                    </div>

                    <div className="video-details__container2">
                        <div className="container2__flexbox1">
                            <div className="flexbox1__icon-container">
                                <img
                                    className="flexbox1__views-icon"
                                    src={Views}
                                    alt="Views Icon"
                                />
                            </div>

                            <div className="flexbox1__video-views">
                                {views}
                            </div>
                        </div>

                        <div className="container2__flexbox2">
                            <div className="flexbox2__icon-container">
                                <img
                                    className="flexbox2__likes-icon"
                                    src={Likes}
                                    alt="Likes Icon"
                                />
                            </div>

                            <div className="flexbox2__video-likes">
                                {likes}
                            </div>
                        </div>
                    </div>
                </div>

                <p className="flexbox1__video-description">
                    {description}
                </p>
            </section>
        )
    }
}
export default VideoDetails