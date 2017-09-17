import React, { Component } from 'react';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoDetails from './components/video_details'
import VideoList from './components/video_list'

import logo from './logo.svg';
import './App.css';

const API_KEY = 'AIzaSyD8tvwKtAT0cczmlix01rO3kEDFPGAJKBk';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = { 'videos': null }
    this.searchVideo('');
  }
  getVideo(i){
    if(typeof this.state.videos === 'object' && this.state.videos.length >i){
      return this.state.videos[i]
    }

    return null;
  }
  searchVideo(term){
    YTSearch({key:API_KEY, term:term}, (data)=>{
      this.setState({videos: data})
      console.log(data);
    })
  }
  render() {
    if(!this.state.videos) {
      return <div className="App container" >
            <p>Loading</p>
            </div>
    }
    return (
      <div className="App container">
        <div className='row'>
          <div className='col-12'>
            <SearchBar OnSearchInputChange={term=>this.searchVideo(term)} />
            <hr/>
          </div>
        </div>
        <div className='row'>
          <div className='col-8'>
            <VideoDetails video={this.getVideo(0)}/>
          </div>
          <div className='col-4'>
              <VideoList videos={this.state.videos}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
