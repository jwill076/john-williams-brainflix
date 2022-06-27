import AddCommentIcon from "../../assets/icons/add_comment.svg";
import "../CommentForm/CommentForm.scss";
import React from "react";

function CommentForm() {
    return (
        <section className="flexbox2__jtc-comment-form">
            <h3 className="jtc-comment-form__title">
                JOIN THE CONVERSATION
            </h3>

            <div className="jtc-comment-form__imagebox">
                <div className="imagebox__avatar-container">
                    <img
                        className="imagebox__avatar"
                        src={"http://localhost:8080/images/Mohan-muruge.jpg"}
                        alt="Mohan-muruge Avatar"
                    />
                </div>

                <div className="imagebox__input-field">
                    <input
                        className="imagebox__input"
                        type="text"
                        name="comment-form__name"
                        id="comment-form__name"
                        placeholder="Add a new comment"
                    ></input>
                </div>
            </div>

            <div className="jtc-comment-form__add-comment">
                <div className="add-comment__image-container">
                    <img
                        className="add-comment__image"
                        src={AddCommentIcon}
                        alt="Add Comment Icon"
                    />
                </div>

                <div className="add-comment__button-container">
                    <button
                        className="add-comment__button"
                        type="submit"
                        id="add-comment__button">
                            COMMENT
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CommentForm