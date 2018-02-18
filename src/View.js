import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Create extends Component {
  id = this.props.match.params.id

  render() {
    var adverts
    const advertsJSON = localStorage.getItem("adverts");

    if(advertsJSON == null) {
      return (
        <div>
          <div>
            <Link to={"/"}>На главную</Link> <br/>
          </div>
          "No adverts to view"
        </div>
      )
    } else {
      adverts = JSON.parse(advertsJSON)
    }
    
    var userCurrent
    const userCurrentJSON = localStorage.getItem("userCurrent");

    if(userCurrentJSON == null) {
      userCurrent = null
    } else {
      userCurrent = JSON.parse(userCurrentJSON)
    }



    var advert

    for(var i=0; i<adverts.length; i++){
      
      if(adverts[i].id === this.id || adverts[i].id === +this.id){
        if(userCurrent && adverts[i].author === userCurrent.name){

          var date = new Date(Date.parse(adverts[i].date))
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

          advert = 
            <div>
              <div>
                <Link to={"/"}>На главную</Link> <br/>
              </div>
              <h3>{adverts[i].title}</h3>
              <div>{adverts[i].text}</div>
              <div><i>{adverts[i].author}</i></div>
              <div><i>{dateString}</i></div>
              <Link to={"/edit/$" + this.id}>Редактировать</Link> <br/>
              <div><Link to={"/"} onClick={this.handlerDelete}>Удалить</Link> <br/></div>
            </div>
          break
        } else {

          date = new Date(Date.parse(adverts[i].date))
          options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            timezone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
          };
          dateString = date.toLocaleString("ru", options)

          advert = 
            <div>
              <div>
                <Link to={"/"}>На главную</Link> <br/>
              </div>
              <h3>{adverts[i].title}</h3>
              <div>{adverts[i].text}</div>
              <div><i>{adverts[i].author}</i></div>
              <div><i>{dateString}</i></div>
            </div>
          break
        }
      }
    }

    return (
      <div>
        <h2>Просмотр статьи</h2>
        <hr/>
        {advert}
      </div>
    )
  }
  
  handlerDelete = () => {
    var idDeleted = this.id

    var adverts
    const advertsJSON = localStorage.getItem("adverts");

    if(advertsJSON == null) {
      return
    } else {
      adverts = JSON.parse(advertsJSON)
    }
    
    for(var i=0; i<adverts.length; i++){
      if(adverts[i].id === +idDeleted){
        adverts.splice(i,1)
        break
      }
    }

    var advertsString = JSON.stringify(adverts);
    localStorage.setItem("adverts", advertsString);
    
  }
}