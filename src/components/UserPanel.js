import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class UserPanel extends Component {
  render() {
    return (
      <div>
        <h3><i>Панель пользователя:</i></h3>
        <div>
            <div>{JSON.parse(localStorage.getItem("userCurrent")).name}</div>
            <Link to="/create">Create</Link>
            <button onClick={this.handlerLogout}>Выйти</button>
        </div>
      </div>
    )
  }

  handlerLogout = (e) => {
    e.preventDefault();
    
    localStorage.removeItem("userCurrent");
    this.props.onAuthorizationChanged();
  }
  
  /*
  handlerCreate = (e) => {
    e.preventDefault();
    
    localStorage.removeItem("userCurrent");
    this.props.onAuthorizationChanged();
  }
  */
}