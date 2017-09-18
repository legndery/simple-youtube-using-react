import React, { Component } from 'react';
import axios from 'axios';
import Constants from '../utilclasses/constants'

export default class VideoDetails extends Component {


    constructor(props) {
        super(props);
        this.state = {'data':''};
        this.getVideoDetails(this.props.video.id.videoId);
        console.log('called');
    }
    getVideoDetails(id){
        let ROOT_URL = 'https://www.googleapis.com/youtube/v3/videos';
        // console.log('key',Constants.API_)
        axios.get(ROOT_URL, {params: {id,'part': 'snippet', 'key':Constants.getKey()}})
        .then(({data}) => this.setState({data}));
    }
    render() {
        // this.getVideoDetails(this.props.video.id.videoId);
        const { video } = this.props;
        const url = `https://www.youtube.com/embed/${video.id.videoId}`;
        const videoDesc = this.state.data === '' ?video.snippet.description:this.state.data.items["0"].snippet.description;
        return (
            <div className='video-details'>
                <div className='row'>
                    <div className='col-12 embed-responsive embed-responsive-16by9 youtube-iframe'>
                        <iframe className='embed-responsive-item' title={video.snippet.title} src={url} frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <h2>{video.snippet.title}</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <p>{videoDesc}</p>
                    </div>
                </div>
            </div>
        );
    }
}
// 990975335

// 0712410266
// 584407545

