import React, { Component } from 'react'

export default class Authorization extends Component {
  render() {
    return (
      <div>
        <h3><i>Авторизация</i></h3>
        <form>
            <label>
                Логин: <br/>
                <input className="input-login" type="text" ref = { (userNameInput) => this.userNameInput = userNameInput} />
            </label><br/>
            <label>
                Пароль: <br/>
                <input className="input-login" type="text" ref = { (passwordInput) => this.passwordInput = passwordInput} />
            </label> <br/>
            <input className="btn btn-info" type="submit" onClick={this.handlerSubmit} value="Войти"/>
        </form>
      </div>
    )
  }
  
  handlerSubmit = (e) => {
    e.preventDefault()
    var userName = this.userNameInput.value;
    var userPassword = this.passwordInput.value;
    if (userName === "" || userPassword === ""){
      alert ("Login and password fields must be filled")
      return
    }
   
    var user = {
      name: userName,
      password: userPassword
    }

    var userCurrent = {
      name: userName
    }
   
    var users
    const usersJSON = localStorage.getItem("users");

    if(usersJSON == null) {
      users = []
      users.push(user)
      
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("userCurrent", JSON.stringify(userCurrent));
      this.props.onAuthorizationChanged();
      return

    } else {
      users = JSON.parse(usersJSON)
    }
    
    for(var i=0; i<users.length; i++){
      if(users[i].name === userName || users[i].name === +userName){
        if(users[i].password === userPassword || users[i].password === +userPassword) {
          localStorage.setItem("userCurrent", JSON.stringify(userCurrent));
          this.props.onAuthorizationChanged();
          return
        } else {
          alert("Password is wrong!")
          return
        }
      }
    }

    users.push(user)

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("userCurrent", JSON.stringify(userCurrent));
    this.props.onAuthorizationChanged();

  }
}