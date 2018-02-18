import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class UserPanel extends Component {
  render() {
    return (
      <div>
        <h3><i>Панель пользователя:</i></h3>
        <div>
            <div>{JSON.parse(localStorage.getItem("userCurrent")).name}</div>
            <Link className="btn btn-success" to="/create">Создать</Link> <br/>
            <Link className="btn btn-danger" to="/" onClick={this.handlerLogout}>Выйти</Link>
        </div>
      </div>
    )
  }

  handlerLogout = (e) => {    
    localStorage.removeItem("userCurrent");
    this.props.onAuthorizationChanged();
  }
}