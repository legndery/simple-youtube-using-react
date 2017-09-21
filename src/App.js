import React, { Component } from 'react';
import YTSearch from './modules/youtube-search'
import _ from 'underscore'
import SearchBar from './components/search_bar'
import VideoDetails from './components/video_details'
import VideoList from './components/video_list'

import logo from './logo.svg';
import './App.css';

const API_KEY = 'AIzaSyD8tvwKtAT0cczmlix01rO3kEDFPGAJKBk';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 'videos': null, 'current_video': 0 }
    this.searchVideo('');
  }

  getVideo(i) {
    if (typeof this.state.videos === 'object' && this.state.videos.length > i) {
      return this.state.videos[i]
    }

    return null;
  }

  searchVideo(term) {
    YTSearch({ key: API_KEY, term: term }, (data) => {
      this.setState({ videos: data , 'current_video': 0 })
      console.log(data);
    })
  }
  changeCurrentVideo(index){
    this.setState({'current_video': index})
  }
  render() {
    if (!this.state.videos) {
      return (<div className="App container" >
        <p>Loading</p>
      </div>);
    }
    let videosearch = _.debounce(t=> this.searchVideo(t), 300);
    return (
      <div className="App">
            <SearchBar OnSearchInputChange={videosearch} />
      <div className='container'>
        <div className='row'>
          <div className='col-8'>
            <VideoDetails video={this.getVideo(this.state.current_video)} />
          </div>
          <div className='col-4'>
            <VideoList videos={this.state.videos} itemClickHandler={i => this.changeCurrentVideo(i)}/>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
