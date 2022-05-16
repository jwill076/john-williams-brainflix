import CommentForm from "../CommentForm/CommentForm";
import "../JoinTheConversation/JoinTheConversation.scss";
import React from "react";

const TimeStamp = (timestamp) => {
    const timeStamp = new Date(timestamp);
    return timeStamp.toLocaleDateString();
};

class JoinTheConversation extends React.Component {

    render() {
        const timestampValue = TimeStamp(this.props.data.timestamp);
        
        return (
            <section className="container1__flexbox2">
                <h2 className="flexbox2__comments-header">
                    3 Comments
                </h2>

                <CommentForm />

                <section className="flexbox2__display-comments">
                    
                    {this.props.data.comments.map((comment) => {
                        return(
                            <div key={comment.timestamp} className="display-comments__flexbox">
                                <div className="flexbox__avatar-container">
                                    <div className="flexbox__avatar">
                                        
                                    </div>
                                </div>

                                <div className="flexbox__comment-container">
                                    <div className="flexbox__info">
                                        <p className="info__name">
                                            {comment.name}
                                        </p>
                                                
                                        <div className="info__timestamp">
                                            {timestampValue}
                                        </div>
                                    </div>

                                    <p className="flexbox__comment">
                                        {comment.comment}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </section>
            </section>
        )
    }
}


export default JoinTheConversation