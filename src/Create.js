import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Create extends Component {
  idEdit = this.props.match.params.id

  author = JSON.parse(localStorage.getItem("userCurrent")).name
  id = Math.floor(Math.random() * 1000)

  render() {
    console.log (this.idEdit)
    //Если никто не авторизован, выдавать форму авторизации
    return (
      <div className="container">
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
        </form>
        <Link className="btn btn-success" to={"/$" + this.id} onClick={this.handlerCreate}>Создать</Link> <br/>
        <Link className="btn btn-danger" to={"/"}>Отмена</Link> <br/>
      </div>
    )
  }

  handlerCreate = (e) => {
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
      adverts = JSON.parse(localStorage.getItem("adverts"))
    }

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