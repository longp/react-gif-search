import React, { Component } from 'react';
import GifItem from './GifItem.js';

class GifList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      gifItems: props.gifs.map((image) => {
        return <GifItem key={ image.id } gif={ image } />
      }),
    }

  }
  render () {
    return (
      <ul> {this.state.gifItems} </ul>
    )
  }

}


export default GifList
