import React, {Component} from 'react';
import VideoListItem from './video_listitem'
export default class VideoList extends Component{

    render(){
        const videoItems = this.props.videos.map((item, i)=>{
            return <VideoListItem index={i} itemClickHandler={this.props.itemClickHandler} video={item} key={item.snippet.title}/>
        });
        return (
            <ul className='video-list list-group'>
                {videoItems}
            </ul>
        );
    }
}