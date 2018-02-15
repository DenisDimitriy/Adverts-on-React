import React, { Component } from 'react'

export default class UserPanel extends Component {
  render() {
    return (
      <div>
        <h3><i>Панель пользователя:</i></h3>
        <div>
            <div>{JSON.parse(localStorage.getItem("userCurrent")).name}</div>
            <button onClick={this.handlerOnLogout}>Выйти</button>
        </div>
      </div>
    )
  }

  handlerOnLogout = (e) => {
    e.preventDefault();
    
    localStorage.removeItem("userCurrent");
    this.props.onAuthorizationChanged();
  }
}