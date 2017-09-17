import React, {Component} from 'react';
import YTSearch from 'youtube-api-search'


export default class SearchBar extends Component{

    render(){
        return (
            <input onInput={event=> this.OnInputChange(event)}/>
        );
    }
    OnInputChange(event){
        this.props.OnSearchInputChange(event.target.value)
    }
}