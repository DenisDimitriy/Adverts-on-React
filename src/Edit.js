import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Create extends Component {
  idEdit = this.props.match.params.id
  //user = JSON.parse(localStorage.getItem("userCurrent")).name

  render() {
    
    var userCurrent = localStorage.getItem("userCurrent")
    if (userCurrent == null) {
      return (
        <div className="container">
          <div>
            <Link to={"/"}>На главную</Link> <br/>
          </div>
          Пользователь не авторизован. Пожалуйста, авторизуйтесь.
        </div>
      )
    }
    this.user = JSON.parse(userCurrent).name

    var adverts
    const advertsJSON = localStorage.getItem("adverts");

    if(advertsJSON == null) {
      return "No adverts to edit"
    } else {
      adverts = JSON.parse(advertsJSON)
    }
    
    var advert
    for(var i=0; i<adverts.length; i++){
      if(adverts[i].id === +this.idEdit || adverts[i].id === this.idEdit){
        advert = adverts[i]
        break
      }
    }

    return (
      <div className="container">
        <h2>Редактировать статью</h2>
        <hr/>
        <div>Автор:</div>
        <div><i>{this.user}</i></div>
        
        <form onSubmit={ (e) => e.preventDefault() }>
            <label>
                Заголовок: <br/>
                <input type="text"
                  defaultValue = {advert.title}
                  ref = { (titleInput) => this.titleInput = titleInput}
                />
            </label><br/>
            <label>
                Описание: <br/>
                <textarea
                  defaultValue = {advert.text}
                  ref = { (textInput) => this.textInput = textInput}
                />
            </label> <br/>
            
        </form>
        <Link className="btn btn-primary" to={"/$" + this.idEdit} onClick={this.handlerSave}>Сохранить</Link> <br/>
        <Link className="btn btn-danger" to={"/"}>Отмена</Link> <br/>
      </div>
    )
  }

  handlerSave = (e) => {

    var title = this.titleInput.value
    var text = this.textInput.value
    
    if (title === "" || text === ""){
      e.preventDefault()
      alert ("Fields must be filled")
      return
    }

    var adverts
    const advertsJSON = localStorage.getItem("adverts");

    if(advertsJSON == null) {
      adverts = []
    } else {
      adverts = JSON.parse(advertsJSON)
    }

    var dateNow = new Date();
    var dateNowISO = dateNow.toISOString()

    console.log(this.idEdit)
    var advertNew = {
      "id": this.idEdit,
      "author": this.user,
      "date": dateNowISO,
      "title": title,
      "text": text
    }

    
    for(var i=0; i<adverts.length; i++){
      if(adverts[i].id === +this.idEdit || adverts[i].id === this.idEdit){
        adverts.splice(i,1)
        adverts.push(advertNew)
        break
      }
    }
   
    var advertsString = JSON.stringify(adverts);
    localStorage.setItem("adverts", advertsString);
  }
}