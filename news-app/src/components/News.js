import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

constructor(){
  super();
  console.log("hello i am aconstructor from  news component");
  this.state={
    articles:this.articles,
    loading:false
  }
}
async componentDidMount(){
let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=6fd58bc66dea433582af83bbf68f3ef7";
let data=await fetch(url);
let parsedData=data.json()
console.log(parsedData)
this.setState({articles:parsedData.articles})
}

  render() {
    return (
     <div className='container my-4 '>
      <h2>NewsMonkey - Top headlines</h2>
       <div className='row'>
        {
          this.state.articles.map((element)=>{
             return <div className='col-md-4' key={element.url}>
             <NewsItem title={element.title} desc={element.description} imgurl={element.urlToImage}/>
                  </div>
          })
        }
       </div>
     </div>
    )
  }
}
