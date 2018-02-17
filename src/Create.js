import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Create extends Component {

  author = JSON.parse(localStorage.getItem("userCurrent")).name
  id = Math.floor(Math.random() * 1000)

  render() {
    //Если никто не авторизован, выдавать форму авторизации
    return (
      <div>
        <h2>Создать статью</h2>
        <hr/>
        <div>Автор:</div>
        <div><i>{JSON.parse(localStorage.getItem("userCurrent")).name}</i></div>
        
        <form onSubmit={ (e) => e.preventDefault() }>
            <label>
                Заголовок: <br/>
                <input type="text" ref = { (titleInput) => this.titleInput = titleInput} />
            </label><br/>
            <label>
                Описание: <br/>
                <textarea ref = { (textInput) => this.textInput = textInput}/>
            </label> <br/>
            
            <Link to={"/$" + this.id} onClick={this.handlerCreate}>Создать</Link> <br/>
        </form>
        
      </div>
    )
  }

  handlerCreate = (e) => {
    var adverts
    const advertsJSON = localStorage.getItem("adverts");

    if(advertsJSON == null) {
      adverts = []
    } else {
      adverts = JSON.parse(localStorage.getItem("adverts"))
    }

    var title = this.titleInput.value
    var text = this.textInput.value

    var dateNow = new Date();
    var dateNowISO = dateNow.toISOString()

    var advertNew = {
      "id": this.id,
      "author": this.author,
      "date": dateNowISO,
      "title": title,
      "text": text
    }

    adverts.push(advertNew)
    
    var advertsString = JSON.stringify(adverts);
    localStorage.setItem("adverts", advertsString);
  }
}