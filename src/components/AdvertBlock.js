import React, { Component } from 'react'

export default class AdvertBlock extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.advert.title}</h2>
        <div>{this.props.advert.text}</div>
      </div>
    )
  }
}