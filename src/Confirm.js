import React from 'react'
import 'whatwg-fetch'

export default class Confirm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  sendConfirmPost () {

    fetch('http://nodejs-express-practice2.herokuapp.com/newapi/members/confirm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.props.location.query.email,
        password: this.props.location.query.password
      })
    })
  }

  render () {
    return (
      <div>
        <h1>歡迎光臨</h1>
        <h1>你的email: {this.props.location.query.email}</h1>
        <h1>你的密碼: {this.props.location.query.password}</h1>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.sendConfirmPost}>確認</button>
      </div>

    )
  }
}
