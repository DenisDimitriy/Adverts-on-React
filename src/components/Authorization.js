import React, { Component } from 'react'

export default class Authorization extends Component {
  render() {
    return (
      <div>
        <h3>Авторизация</h3>
        <form action="/">
            <label>
                Логин: <br/>
                <input type="text" ref = { (userNameInput) => this.userNameInput = userNameInput} />
            </label><br/>
            <label>
                Пароль: <br/>
                <input type="text" ref = { (passwordInput) => this.passwordInput = passwordInput} />
            </label> <br/>
            <input type="submit" onClick={this.handlerSubmit} value="Войти"/>
        </form>
      </div>
    )
  }

  
  handlerSubmit = (e) => {
    var userName = this.userNameInput.value;
    var userPassword = this.passwordInput.value;
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
    var user = {
      name: userName,
      password: userPassword
    }

    localStorage.setItem("userCurrent", JSON.stringify(user));
    this.props.onAuthorizationChanged();
  }
}