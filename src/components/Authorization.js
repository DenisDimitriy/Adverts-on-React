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
      console.log ("no users")
      users = []
      users.push(user)
      
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("userCurrent", JSON.stringify(userCurrent));
      this.props.onAuthorizationChanged();
      return

    } else {
      console.log ("yes users")
      users = JSON.parse(usersJSON)
    }
    
    for(var i=0; i<users.length; i++){
      console.log (users[i].name + "; " + userName)
      if(users[i].name === userName || users[i].name === +userName){
        console.log ("found inputUser in users")
        if(users[i].password === userPassword || users[i].password === +userPassword) {
          console.log ("password correct")
          localStorage.setItem("userCurrent", JSON.stringify(userCurrent));
          this.props.onAuthorizationChanged();
          return
        } else {
          console.log ("Wrong password")
          alert("Password is wrong!")
          return
        }
      }
    }

    console.log(users)
    users.push(user)

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("userCurrent", JSON.stringify(userCurrent));
    this.props.onAuthorizationChanged();

    /**1 Проверка пользователя
     * если есть такой пользователь, проверить пароль
     * -если совпадает, то авторизовать
     * -если не совпадает, сообщение "пользователь уже есть, не верный пароль"
     * если нет  такого пользователя, зарегестрировать и авторизовать
     * 2 Вызов рендера Home
     * 
     * Авторизация - занесение в localstorage userCurrent имени текущего пользователя
     * Регистрация - занесение в localstorage usersList обїекта с данными {пользователь, пароль}
     */
  }
}