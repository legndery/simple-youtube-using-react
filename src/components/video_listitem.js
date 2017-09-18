import React, { Component } from 'react';


export default class VideoListItem extends Component {
    onClickItem(event){
        this.props.itemClickHandler(this.props.index);
    }
    render() {
        return (
            <a className='list-group-item list-group-item-action' href='#' onClick={e=>this.onClickItem(e)}>
                <div>
                    <img src={this.props.video.snippet.thumbnails.default.url} className='float-left img-thumbnail' alt={this.props.video.snippet.title} />
                    <div>
                        {this.props.video.snippet.title}
                    </div>
                </div>
            </a>
        )
    }
}