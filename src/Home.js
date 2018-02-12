import React, { Component } from 'react'
import Authorization from './components/Authorization'
import AdvertList from './components/AdvertList'

export default class Home extends Component {

  render() {
    return (
      <div>
        <h2>Главная страница</h2>
        <hr/>
        <Authorization />
        <hr/>
        <AdvertList />
      </div>
    )
  }
}