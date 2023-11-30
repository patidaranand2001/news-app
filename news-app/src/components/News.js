import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
articles =[
  {

     
    "source": {
        "id": null,
        "name": "Zacjohnson.com"
    },
    "author": "Zac Johnson",
    "title": "Dana Perino Net Worth – How Much is Perino Worth?",
    "description": "Dana Perino, the former White House Press Secretary, has amassed a significant net worth throughout her career. Known for her role as a co anchor on FOX News Channel’s morning news program, America’s Newsroom, Perino has established herself as a prominent fig…",
    "url": "https://zacjohnson.com/dana perino net worth/",
    "urlToImage": "https://zacjohnson.com/wp content/uploads/2023/11/dana perino net worth.jpg",
    "publishedAt": "2023 11 29T06:32:18Z",
    "content": "Dana Perino, the former White House Press Secretary, has amassed a significant net worth throughout her career. Known for her role as a co anchor on FOX News Channel’s morning news program, America’s… [+19743 chars]"

},
 
{

     
    "source": {
        "id": null,
        "name": "Investing.com"
    },
    "author": "Investing.com",
    "title": "Pro Research: Wall Street digs into SolarEdge's future",
    "description": "Pro Research: Wall Street digs into SolarEdge's future",
    "url": "https://www.investing.com/news/stock market news/pro research wall street digs into solaredges future 93CH 3245294",
    "urlToImage": "https://i invdn com.investing.com/news/WallStreet_800x533_L_1611376827.jpg",
    "publishedAt": "2023 11 29T06:17:16Z",
    "content": "Explore Wall Street's expert insights with this ProResearch article, which will exclusively be available to InvestingPro subscribers soon. Enhance your investment strategy with ProPicks, our newest p… [+10449 chars]"

},
 
{

     
    "source": {
        "id": null,
        "name": "Biztoc.com"
    },
    "author": "reuters.com",
    "title": "Taiwanese Tesla supplier Hota retools supply chain with first US factory",
    "description": "[1/7] Hota's CEO Holly Sheng poses for a photo in their factory in Taichung, Taiwan November 13, 2023. REUTERS/Ann Wang Acquire Licensing Rights TAICHUNG, Taiwan, Nov 29 (Reuters)   For years, Hota Industrial Mfg. Co has made gears, shafts and other auto part…",
    "url": "https://biztoc.com/x/5e83256afd9c4aef",
    "urlToImage": "https://c.biztoc.com/p/5e83256afd9c4aef/s.webp",
    "publishedAt": "2023 11 29T06:14:09Z",
    "content": "[1/7] Hota's CEO Holly Sheng poses for a photo in their factory in Taichung, Taiwan November 13, 2023. REUTERS/Ann Wang Acquire Licensing RightsTAICHUNG, Taiwan, Nov 29 (Reuters)   For years, Hota In… [+292 chars]"

}
]
constructor(){
  super();
  console.log("hello i am aconstructor from  news component");
  this.state={
    articles:this.articles,
    loading:false
  }
}
// async componentDidMount(){
// let url="https://newsapi.org/v2/top headlines?country=in&apiKey=6fd58bc66dea433582af83bbf68f3ef7";
// let data=await fetch(url);
// let parsedData=data.json()
// console.log(parsedData)
// this.setState({articles:parsedData.articles})
// }

  render() {
    return(
     
      <div className='container '>
        <h2>NewsMonkey  Top headlines</h2>
        <div className='row'>
        {this.state.articles.map((element)=>{
          return <div   className='col-md-3 mx-3' key={element.url}>
            
             <NewsItem  title={element.title.slice(0,50)} desc={element.description.slice(0,80)} imgurl={element.urlToImage} newsUrl={element.url}/>
            
            </div>
        })}
        </div>

      </div>
    )
  }
}
