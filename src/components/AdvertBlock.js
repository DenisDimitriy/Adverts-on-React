import React, { Component } from 'react'

export default class AdvertBlock extends Component {
  render() {
    var adv
    if(this.props.advert.author === this.props.userAuthorized) {
      adv = 
      <div>
        <h3>{this.props.advert.title}<button>Kill</button></h3>
        <div><i>{this.props.advert.author}</i></div>
        <div><i>{this.props.advert.date}</i></div>
        <div>{this.props.advert.text}</div>
      </div>
    } else {
      adv = 
      <div>
        <h3>{this.props.advert.title}</h3>
        <div><i>{this.props.advert.author}</i></div>
        <div><i>{this.props.advert.date}</i></div>
        <div>{this.props.advert.text}</div>
      </div>
    }
    return (
      adv
    )
  }
}