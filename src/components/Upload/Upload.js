import "./Upload.scss";
import ThumbnailVideo from "../../assets/images/Upload-video-preview.jpg";
import PublishVideoIcon from "../../assets/icons/publish.svg";
import { NavLink } from 'react-router-dom';
import React from "react";

class Upload extends React.Component {
    alert = () => {
        window.alert("Thank you for uploading your video!");
    }

    render() {
        return (
            <main className="upload">
                <h1 className="upload__title">Upload Video</h1>

                <article className="upload__flexbox1">
                    <section className="flexbox1__video-container">
                        <h2 className="video-container__title">
                            VIDEO THUMBNAIL
                        </h2>

                        <div className="video-container__thumbnail">
                            <video className="thumbnail__video" src="#" type="video/mp4" poster={ThumbnailVideo}></video>
                        </div>
                    </section>

                    <section className="flexbox1__input-container">
                        <h2 className="input-container__video-title">
                            TITLE YOUR VIDEO
                        </h2>

                        <input
                            className="input-container__input-field"
                            type="text"
                            name="input-container__input-field"
                            id="input-container__input-field"
                            placeholder="Add a title to your video"
                        ></input>

                        <h2 className="input-container__description-title">
                            ADD A VIDEO DESCRIPTION
                        </h2>

                        <input
                            className="input-container__description"
                            type="text"
                            name="input-container__description"
                            id="input-container__description"
                            placeholder="Add a description to your video"
                        ></input>
                    </section>
                </article>

                <article className="upload__flexbox2">
                    <section className="flexbox2__publish-button">
                        <div className="publish-button__icon-container">
                            <img
                                className="publish-button__icon"
                                src={PublishVideoIcon}
                                alt="Publish Icon"
                            />
                        </div>

                        <div className="publish-button__container">
                            <NavLink to="/home" className="publish-button__link" onClick={this.alert}>
                                <button
                                    className="publish-button"
                                    type="submit"
                                    id="publish__button">
                                        PUBLISH
                                </button>
                            </NavLink>
                        </div>
                    </section>

                    <section className="flexbox2__cancel-button">
                        <NavLink to="/home" className="cancel-button__link">
                            <button
                                className="cancel-button"
                                type="submit"
                                id="cancel__button">
                                    CANCEL
                            </button>
                        </NavLink>
                    </section>
                </article>
            </main>
        )
    }
}

export default Upload