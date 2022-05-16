import "../NextVideos/NextVideos.scss";
import React from "react";

class NextVideos extends React.Component {
    render() {
        return (
            <>
                <h3 className="container2__title">
                    NEXT VIDEOS
                </h3>

                {this.props.videos.map((video) => {
                    return(
                        <section key = {video.id} onClick = {() => {this.props.updateState(video)}} className="container2__next-videos">
                            <div className="next-videos__image-container">
                                <img className="next-videos__image" src={video.image} />
                            </div>

                            <section className="next-videos__info">
                                <h4 className="info__title">
                                    {video.title}
                                </h4>

                                <p className="info__author">
                                    {video.channel}
                                </p>
                            </section>
                        </section>
                    )
                })}
            </>
        )
    }
}

export default NextVideos