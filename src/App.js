import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <ul>
            <li><Link to='/about'>about</Link></li>
            <li><Link to='/article'>article</Link></li>
            <li><Link to='/form'>form</Link></li>
            <li><Link to='/confirm'>認證頁</Link></li>
            <li><Link to='/image'>圖片</Link></li>
            <li><Link to='/image/animal'>圖片</Link></li>
          </ul>

        { this.props.children }
      </div>
    );
  }
}

export default App;
