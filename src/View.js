import React, { Component } from 'react'

export default class Create extends Component {
  id = this.props.match.params.id

  render() {
    var adverts
    const advertsJSON = localStorage.getItem("adverts");

    if(advertsJSON == null) {
      return "No adverts to view"
    } else {
      adverts = JSON.parse(localStorage.getItem("adverts"))
    }

    var advert

    for(var i=0; i<adverts.length; i++){
      if(adverts[i].id === +this.id){
        advert = 
          <div>
            <h3>{adverts[i].title}</h3>
            <div><i>{adverts[i].author}</i></div>
            <div><i>{adverts[i].date}</i></div>
            <div>{adverts[i].text}</div>
          </div>
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
}