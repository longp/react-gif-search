import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar'
import GifList from './GifList'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
     gifs: [
       {
         id: 1,
         url: 'http://fakeimg.pl/300/'
       },
       {
         id: 2,
         url: 'http://fakeimg.pl/300/'
       },
       {
         id: 3,
         url: 'http://fakeimg.pl/300/'
       }
     ]
    }
  }
  handleTermChange(term) {
    term += " / "
    console.log("2", term)
  }

  render() {
    return (
      <div>
        <SearchBar  onTermChange={this.handleTermChange}/>
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
