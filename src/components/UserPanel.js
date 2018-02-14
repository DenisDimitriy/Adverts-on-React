import React, { Component } from 'react'

export default class UserPanel extends Component {
  render() {
    return (
      <div>
        <h3><i>Панель пользователя:</i></h3>
        <div>
            <div>{JSON.parse(localStorage.getItem("userCurrent")).name}</div>
            <button>Logout</button>
        </div>
      </div>
    )
  }

  handlerLoginSubmit = (e) => {
    e.preventDefault();
    console.log("submit clicked");
  }
}