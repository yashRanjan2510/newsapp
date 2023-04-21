import React, { Component } from 'react'
import image from './8282529.jpg'

export class Newsitem extends Component {
 
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source}= this.props;
    return (
      <div className='my-3'> 
        <div   className="card" >
          <div>
          <span style={{display:'flex',justifyContent:'flex-end', position:'absolute',right:'0'}}  className="   badge rounded-pill bg-danger">
       {source}</span>
          </div>
       
        <img src={!imageUrl?image:imageUrl}  className="card-img-top" alt="..."/>
        <div   className="card-body">
         <h5   className="card-title">{title}...</h5>
        <p   className="card-text">{description}...</p>
        <p className="card-text"><small className="text-body-secondary">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
      <a rel="noreferrer" href={newsUrl} target='_blank'   className="btn btn-sm btn-dark">read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem