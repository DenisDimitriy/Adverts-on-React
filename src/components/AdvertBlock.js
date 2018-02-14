import React, { Component } from 'react'

export default class AdvertBlock extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.advert.title}</h3>
        <div><i>{this.props.advert.author}</i></div>
        <div><i>{this.props.advert.date}</i></div>
        <div>{this.props.advert.text}</div>
      </div>
    )
  }
}