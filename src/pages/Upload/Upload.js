import "./Upload.scss";
import PublishVideoIcon from "../../assets/icons/publish.svg";
import { NavLink } from 'react-router-dom';
import React from "react";
import axios from "axios";

class Upload extends React.Component {
    alert = () => {
        window.alert("Thank you for uploading your video!");
    }

    handlePublishVideo = (event) => {
        event.preventDefault();

        function postVideo() {
    
            const headers = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
    
            let newUploadVideo = [
                {
                    title: event.target.title.value,
                    description: event.target.description.value,
                    image: "http://localhost:8080/images/brainstation.png"
                }
            ]

            event.target.reset();

            axios
                .post('http://localhost:8080/videos', JSON.stringify(newUploadVideo), headers)
                .then(() => {
                    axios
                        .get('http://localhost:8080/videos')
                        .then(
                            window.alert("Thank you for uploading your video!")
                        )
                        .catch((error) => { console.error(error.response); });
                })
                .catch((error) => { console.error(error.response); });
        }
    
        postVideo();
    }

    render() {
        return (
            <main className="upload">
                <h1 className="upload__title">Upload Video</h1>

                <form className="upload__form"
                      action="http://localhost:8080/videos"
                      method="POST"
                      onSubmit={this.handlePublishVideo}
                >
                    <article className="upload__flexbox1">
                        <section className="flexbox1__video-container">
                            <h2 className="video-container__title">
                                VIDEO THUMBNAIL
                            </h2>

                            <div className="video-container__thumbnail">
                                <video className="thumbnail__video" src="#" type="video/mp4" poster={"http://localhost:8080/images/Upload-video-preview.jpg"}></video>
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
                </form>
            </main>
        )
    }
}

export default Upload