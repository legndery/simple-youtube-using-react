import React, { Component } from 'react';

export default class VideoDetails extends Component {

    
    constructor(props){
        super(props);
        
        console.log(props);
    }
    render() {
        const {video} = this.props;
       const url = `https://www.youtube.com/embed/${video.id.videoId}`;
        return (
            <div className='video-details'>
                <div className='row'>
                    <div className='col-12 embed-responsive embed-responsive-16by9'>
                    <iframe className='embed-responsive-item' title={video.snippet.title} src={url} frameBorder="0" allowFullScreen></iframe>
                </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        {video.snippet.title}
                </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        {video.snippet.description}
                </div>
                </div>
            </div>
        );
    }
}
// 990975335

// 0712410266
// 584407545

