import React, { Component } from 'react'
import Authorization from './components/Authorization'
import UserPanel from './components/UserPanel'
import AdvertList from './components/AdvertList'

export default class Home extends Component {
  constructor (props) {
    super(props)
    var userCurrent = JSON.parse(localStorage.getItem("userCurrent"));
    this.state = {
      userAuthorized: userCurrent ? userCurrent.name : false
    }
}

  handlerAuthorizationChanged = () => {
    var userCurrent = JSON.parse(localStorage.getItem("userCurrent"));
    this.setState ({
      userAuthorized: userCurrent ? userCurrent.name : false
    })
  }

  render() {
    var userBlock = this.state.userAuthorized ?
      <UserPanel 
        onAuthorizationChanged = {this.handlerAuthorizationChanged.bind(this)}
      /> : 
      <Authorization 
        onAuthorizationChanged = {this.handlerAuthorizationChanged.bind(this)}
      />

    return (
      <div>
        <h2>Главная страница</h2>
        <hr/>
        {userBlock}
        <hr/>
        <AdvertList userAuthorized={this.state.userAuthorized} />
      </div>
    )
  }
}