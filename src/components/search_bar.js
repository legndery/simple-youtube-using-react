import React, { Component } from 'react';
import YTSearch from 'youtube-api-search'

export default class SearchBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand text-light" href="#">Simple YouTube</a>
                <input onInput={event => this.OnInputChange(event)} className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            </nav>
        );
    }
    OnInputChange(event) {
        this.props.OnSearchInputChange(event.target.value)
    }
}