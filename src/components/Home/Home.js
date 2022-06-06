import React from "react";
import "./Home.scss";
import axios from "axios";
import VideoDisplay from "../VideoDisplay/VideoDisplay";
import VideoDetails from "../VideoDetails/VideoDetails";
import JoinTheConversation from "../JoinTheConversation/JoinTheConversation";
import NextVideos from "../NextVideos/NextVideos";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            details: {},
            videos: [],
            filteredVideosArray: [],
            loaded: false,
        };
    }

    componentDidMount() {
        let firstVideoId;
        axios
            .get(`https://project-2-api.herokuapp.com/videos/?api_key=6eb81f40-ff68-4c0b-aa13-b2b7e9a62bf1`)
            .then((response) => {
                firstVideoId = response.data[0].id;  
                const filteredVideosArray = response.data.filter((video) => firstVideoId !== video.id);
        
                this.setState({
                    videos: response.data,
                    filteredVideosArray: filteredVideosArray,
                });

                axios
                    .get(`https://project-2-api.herokuapp.com/videos/${firstVideoId}?api_key=6eb81f40-ff68-4c0b-aa13-b2b7e9a62bf1`)
                    .then((responseTwo) => {

                        this.setState({
                            details: responseTwo.data,
                            loaded: true,
                        });
                    })
                    .catch((error) => {console.error(error.responseTwo);});
            })
            .catch((error) => {console.error(error.responseTwo);});
    
        this.setState({
            loaded: false,
        });
    }

    componentDidUpdate(prevProps) {

        if (prevProps.match.params.id !== this.props.match.params.id) {
       
            let VideoId;
            axios
                .get(`https://project-2-api.herokuapp.com/videos/?api_key=6eb81f40-ff68-4c0b-aa13-b2b7e9a62bf1`)
                .then((response) => {
                    VideoId = this.props.match.params.id;
                    const filteredVideosArray = response.data.filter((video) => VideoId !== video.id);
            
                    this.setState({
                        videos: response.data,
                        filteredVideosArray: filteredVideosArray,
                    });

                    axios
                        .get(`https://project-2-api.herokuapp.com/videos/${VideoId}/?api_key=6eb81f40-ff68-4c0b-aa13-b2b7e9a62bf1`)
                        .then((responseTwo) => {
                        
                            this.setState({
                                details: responseTwo.data,
                                loaded: true,
                            });
                        })
                        .catch((error) => { console.error(error.responseTwo); });
                })
                .catch((error) => { console.error(error.responseTwo); });
        }
    }

    render() {
        if (this.state.loaded) {
            return (
                <main className="home">
                    <VideoDisplay data={this.state.details} />

                    <article className="home__flexbox">
                    <article className="flexbox__container1">
                        <VideoDetails data={this.state.details} />

                        <JoinTheConversation data={this.state.details} />
                    </article>

                    <article className="flexbox__container2">
                        <NextVideos videos={this.state.filteredVideosArray} />
                    </article>
                    </article>
                </main>
            );
        }   return <h1>Loading...</h1>;
    }
}

export default Home;