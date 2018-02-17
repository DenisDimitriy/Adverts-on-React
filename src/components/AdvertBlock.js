import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class AdvertBlock extends Component {
  render() {
    var title = this.props.advert.title
    var author = this.props.advert.author
    var id = this.props.advert.id

    var date = new Date(Date.parse(this.props.advert.date))
    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    var dateString = date.toLocaleString("ru", options)

    var text = this.props.advert.text

    var adv
    if(this.props.advert.author === this.props.userAuthorized) {
      adv = 
      <div>
        <h3>
          {title}
          <button>Kill</button>
          <Link to={"/$" + id}>Просмотреть</Link> <br/>
        </h3>
        <div><i>{author}</i></div>
        <div><i>{dateString}</i></div>
        <div>{text}</div>
      </div>
    } else {
      adv = 
      <div>
        <h3>{title}</h3>
        <div><i>{author}</i></div>
        <div><i>{dateString}</i></div>
        <div>{text}</div>
      </div>
    }
    return (adv)
  }
}