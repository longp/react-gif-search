import React, { Component } from 'react';

class GifItem extends Component {

  constructor (props) {
    super(props)
    console.log('props',props)
  }
  render () {
    return (
      <li>
        <img alt="" src={ this.props.gif.url } />
      </li>
    )
  }
}

export default GifItem
