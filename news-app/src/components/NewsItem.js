import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,desc,imgurl,newsUrl}=this.props;
    return (
      <div className='my-3 '>
   <div  className="card " style={{width: "18rem"}}>
  <img src={imgurl}  className="card-img-top" alt="..."/>
  <div  className="card-body">
    <h5  className="card-title">{title}..</h5>
    <p  className="card-text">{desc}..</p>
    <a href= {newsUrl} target='
    _blank' className="btn btn-sm btn-primary" >Read more</a>
  </div>
</div>

      </div>
    )
  }
}


// https://newsapi.org/v2/top-headlines?country=us&apiKey=6fd58bc66dea433582af83bbf68f3ef7