import React, { Component } from 'react'
import homeimage from './homeimage.png'
export class Ho extends Component {
  render() {
    return (
      <div>
        <img src={homeimage} alt="" style={{width:"100vw", height:"90vh"}} />
      </div>
    )
  }
}

export default Ho