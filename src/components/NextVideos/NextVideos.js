import "../NextVideos/NextVideos.scss";
import React from "react";
import { NavLink, Link, Switch, Route } from "react-router-dom";

class NextVideos extends React.Component {
  render() {
    const { videos } = this.props;

    return (
      <>
        <h3 className="container2__title">NEXT VIDEOS</h3>

        {videos.map((video) => {
          return (
            <NavLink
              to={`/${video.id}`}
              key={video.id}
              className="container2__next-videos-nav-links"
            >
              <section className="container2__next-videos">
                <div className="next-videos__image-container">
                  <img className="next-videos__image" src={video.image} />
                </div>

                <section className="next-videos__info">
                  <h4 className="info__title">{video.title}</h4>

                  <p className="info__author">{video.channel}</p>
                </section>
              </section>
            </NavLink>
          );
        })}
      </>
    );
  }
}

export default NextVideos;
