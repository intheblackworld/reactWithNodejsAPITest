import React from 'react'
import Animal from './Animal'

export default class Image extends React.Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>

    )
  }
}
