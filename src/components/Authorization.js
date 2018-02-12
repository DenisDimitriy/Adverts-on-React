import React, { Component } from 'react'

export default class Authorization extends Component {
  render() {
    return (
      <div>
        <h3>Авторизация</h3>
        <form>
            <label>
                User name: <br/>
                <input type="text" />
            </label><br/>
            <label>
                Password: <br/>
                <input type="text" />
            </label> <br/>
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}