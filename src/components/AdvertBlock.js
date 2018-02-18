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
        </h3>
        <div>{text}</div>
        <div><i>{author}</i></div>
        <div><i>{dateString}</i></div>
        <div>
          <Link to={"/$" + id}>Просмотреть</Link> <br/>
          <Link to={"/edit/$" + id}>Редактировать</Link> <br/>
          <Link to={"/"} onClick={this.handlerDelete}>Удалить</Link> <br/>
        </div>
      </div>
    } else {
      adv = 
      <div>
        <h3>{title}</h3>
        <div>{text}</div>
        <div><i>{author}</i></div>
        <div><i>{dateString}</i></div>
        <div>
          <Link to={"/$" + id}>Просмотреть</Link>
        </div>
      </div>
    }
    return (adv)
  }

  handlerDelete = () => {
    var idDeleted = this.props.advert.id

    var adverts
    const advertsJSON = localStorage.getItem("adverts");

    if(advertsJSON == null) {
      return
    } else {
      adverts = JSON.parse(localStorage.getItem("adverts"))
    }
    
    for(var i=0; i<adverts.length; i++){
      if(adverts[i].id === +idDeleted || adverts[i].id === idDeleted){
        adverts.splice(i,1)
        break
      }
    }

    var advertsString = JSON.stringify(adverts);
    localStorage.setItem("adverts", advertsString);
    
  }
}