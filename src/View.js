import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Create extends Component {
  id = this.props.match.params.id

  render() {
    var adverts
    const advertsJSON = localStorage.getItem("adverts");

    if(advertsJSON == null) {
      return "No adverts to view"
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
      if(adverts[i].id === +this.id){
        if(userCurrent && adverts[i].author === userCurrent.name){
          advert = 
            <div>
              <h3>{adverts[i].title}</h3>
              <div><i>{adverts[i].author}</i></div>
              <div><i>{adverts[i].date}</i></div>
              <div>{adverts[i].text}</div>
              <div><Link to={"/"} onClick={this.handlerDelete}>Kill</Link> <br/></div>
            </div>
          break
        } else {
          advert = 
            <div>
              <h3>{adverts[i].title}</h3>
              <div><i>{adverts[i].author}</i></div>
              <div><i>{adverts[i].date}</i></div>
              <div>{adverts[i].text}</div>
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