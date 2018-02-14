import React, { Component } from 'react'
import Authorization from './components/Authorization'
import UserPanel from './components/UserPanel'
import AdvertList from './components/AdvertList'

export default class Home extends Component {
 /*
  state = {
    userAuthorized: false
  }
 */
  constructor (props) {
    super(props)
    this.state = {
      userAuthorized: false
    }
}

  handlerAuthorization = () => {
    var userCurrent = JSON.parse(localStorage.getItem("userCurrent"));
    this.setState ({
      userAuthorized: userCurrent.name
    })
  }

  render() {
    var userBlock = this.state.userAuthorized ?
      <UserPanel /> : 
      <Authorization 
        onAuthorizationChange = {this.handlerAuthorization.bind(this)}
      />

    var advertListBlock = <AdvertList />

    return (
      <div>
        <h2>Главная страница</h2>
        <hr/>
        {userBlock}
        <hr/>
        {advertListBlock}
      </div>
    )
  }
}