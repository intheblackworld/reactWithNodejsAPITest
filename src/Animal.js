import React from 'react'
import image from '../image/1.jpg'

export default class Animal extends React.Component {
  render () {
    return (
      <img src={image} />
    )
  }
}
