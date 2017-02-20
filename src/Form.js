import React, { Component } from 'react'
import 'whatwg-fetch'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  signUp = (event) => {
    event.preventDefault()
    fetch('https://nodejs-express-practice2.herokuapp.com/newapi/members/members', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
  }

  render() {
    return (
      <div className="bd-example">
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" value={this.state.value} onChange={this.handleEmailChange} placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" value={this.state.value} onChange={this.handlePasswordChange} placeholder="Password" />
          </div>
            <button type="submit" className="btn btn-primary" onClick={this.signUp}>Submit</button>
        </form>
      </div>
    )
  }
}
