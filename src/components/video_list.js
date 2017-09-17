import React, {Component} from 'react';
import VideoListItem from './video_listitem'
export default class VideoList extends Component{

    render(){
        const videoItems = this.props.videos.map(function(item){
            return <VideoListItem video={item} key={item.snippet.title}/>
        });
        return (
            <ul className='video-list'>
                {videoItems}
            </ul>
        );
    }
}