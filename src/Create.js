import React, { Component } from 'react'

export default class Create extends Component {
  render() {
    return (
      <div>
        <h2>Создать статью</h2>
        <hr/>
        <div>Автор:</div>
        <div><i>{JSON.parse(localStorage.getItem("userCurrent")).name}</i></div>
        
        <form>
            <label>
                Заголовок: <br/>
                <input type="text" ref = { (titleInput) => this.titleInput = titleInput} />
            </label><br/>
            <label>
                Описание: <br/>
                <textarea ref = { (textInput) => this.textInput = textInput}/>
            </label> <br/>
            <input type="submit" onClick={this.handlerCreate} value="Создать" />
        </form>
        
      </div>
    )
  }

  handlerCreate = (e) => {
    e.preventDefault();
    var title = this.titleInput.value
    var text = this.textInput.value
    var dateNow = new Date();
    var dateNowISO = dateNow.toISOString()
    var author = JSON.parse(localStorage.getItem("userCurrent")).name
    var id = "1357"

    var advertNew = {
      "id": id,
      "author": author,
      "date": dateNowISO,
      "title": title,
      "text": text
    }

    var adverts
    const advertsJSON = localStorage.getItem("adverts");

    if(advertsJSON == null) {
      adverts = []
    } else {
      adverts = JSON.parse(localStorage.getItem("adverts"))
    }

    adverts.push(advertNew)
    
    var advertsString = JSON.stringify(adverts);
    localStorage.setItem("adverts", advertsString);
    //var date = new Date(dateNowISO)
  }
}