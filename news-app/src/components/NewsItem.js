import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, desc, imgurl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3 '>
        <div className="card " >
          <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>
            {source}
            <span class="visually-hidden">unread messages</span>
          </span>

          <img src={imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}..</p>
            <p className="card-text"><small className="text-body-secondary">{author ? author : "unknown"} by {date}</small></p>


            <a rel="rorferror" href={newsUrl} target='
    _blank' className="btn btn-sm btn-info" >Read more</a>
          </div>
        </div>

      </div>
    )
  }
}


// https://newsapi.org/v2/top-headlines?country=us&apiKey=6fd58bc66dea433582af83bbf68f3ef7