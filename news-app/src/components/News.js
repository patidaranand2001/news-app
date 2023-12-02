import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader'
import PropTypes from 'prop-types'
export default class News extends Component {

  static defaultProps = {
    country: 'in',
    pagesize: 6,
    category: 'science'
  }
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string

  }
  constructor() {

    super();
    console.log("hello i am aconstructor from  news component");
    this.state = {
      articles: [],
      page: 1,
      loading: false

    }
  }
  // async componentDidMount(){
  // let url="https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=6fd58bc66dea433582af83bbf68f3ef7";
  // let data=await fetch(url);
  // if (!data.ok) {
  //   throw new Error(`HTTP error! Status: ${data.status}`);
  // }

  // let parsedData = await data.json();
  // // let parsedData=data.json();
  // console.log(parsedData.articles,"***")
  // await this.setState({
  //   articles: parsedData.articles, // Access the 'articles' property
  //   loading: false
  // });
  // console.log(this.articles,"&&&")


  // }
  async componentDidMount() {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6fd58bc66dea433582af83bbf68f3ef7&page=1&pagesize=${this.props.pagesize}`;
      let data = await fetch(url);

      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }

      let parsedData = await data.json();

      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
      }, () => {
        console.log("Updated state:", this.state.articles, "***");
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error state or notify the user
    }
  }
  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6fd58bc66dea433582af83bbf68f3ef7&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    let data = await fetch(url);
    this.setState({ loading: true })
    if (!data.ok) {
      throw new Error(`HTTP error! Status: ${data.status}`);
    }

    let parsedData = await data.json();
    this.setState({

      articles: parsedData.articles,
      loading: false
    })
  }

  clicktonext = async () => {
    console.log("next ")


    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6fd58bc66dea433582af83bbf68f3ef7&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
    //   let data = await fetch(url);
    //   this.setState({loading:true})
    //   if (!data.ok) {
    //     throw new Error(`HTTP error! Status: ${data.status}`);
    //   }

    //   let parsedData = await data.json();

    //   this.setState({
    //     page:this.state.page+1,
    //     articles: parsedData.articles,
    //     loading: false
    //   }, () => {
    //     console.log("Updated state:", this.state.articles,"***");
    //   });
    this.setState(
      { page: this.state.page + 1 }
    )
    this.updateNews()
  }
  clicktoprev = async () => {
    console.log("prev")

    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6fd58bc66dea433582af83bbf68f3ef7&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
    //   let data = await fetch(url);
    //   this.setState({loading:true})
    //   if (!data.ok) {
    //     throw new Error(`HTTP error! Status: ${data.status}`);
    //   }

    //   let parsedData = await data.json();

    //   this.setState({
    //     page:this.state.page-1,
    //     articles: parsedData.articles,
    //     loading: false
    //   }, () => {
    //     console.log("Updated state:", this.state.articles,"***");
    //   });
    this.setState({
      page: this.state.page - 1
    })
    this.updateNews()
  }

  render() {

    // const { articles } = this.state;
    return (


      <div className='container '>
        <h2 className='text-center ' style={{ margin: '35px 0px' }}>NewsMonkey  Top headlines</h2>

        {this.state.loading && <Loader />}



        <div className='row'>
          {!this.state.loading && this.state.articles.map((element) => {

            return element.url === "https://removed.com" ? " " : <div className='col-md-4 ' key={element.url}>


              <NewsItem title={element.title} desc={element.description} imgurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

            </div>
          })}

        </div>

        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} type="button" className="btn btn-info" onClick={this.clicktoprev}> &larr;previous</button>
          <button disabled={Math.ceil(this.state.totalResults / this.props.pagesize) < this.state.page + 1} type="button" className="btn btn-info" onClick={this.clicktonext}>next &rarr;</button>


        </div>

      </div>

    )
  }
}

