import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,desc,imgurl}=this.props;
    return (
      <div>
   <div  className="card my-3" style={{width: "18rem"}}>
  <img src={imgurl}  className="card-img-top" alt="..."/>
  <div  className="card-body">
    <h5  className="card-title">{title}</h5>
    <p  className="card-text">{desc}</p>
    <a href="#"  className="btn btn-sm btn-primary">Go somewhere</a>
  </div>
</div>

      </div>
    )
  }
}


// https://newsapi.org/v2/top-headlines?country=us&apiKey=6fd58bc66dea433582af83bbf68f3ef7