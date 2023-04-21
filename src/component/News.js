import React, { Component } from "react";
import Newsitem from "./Newsitem";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 9,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsMonkey`;
  }

  async updatenews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=23feef3d540d47208520e0d1fb1d01c0&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false
    });
  }

  async componentDidMount() {
    this.updatenews();
    //  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=23feef3d540d47208520e0d1fb1d01c0&page=1&pageSize=${this.props.pagesize}`
    //  let data = await fetch(url);
    //  let parseddata= await data.json();
    //  this.setState({articles: parseddata.articles ,totalResults:parseddata.totalResults})
  }

  handlenext = async () => {
    // if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)){

    // }
    // else{
    //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=23feef3d540d47208520e0d1fb1d01c0&page=${this.state.page+1}&pageSize=${this.props.pagesize}`
    //   let data = await fetch(url);
    //   let parseddata= await data.json();
    //   this.setState({
    //     page:this.state.page + 1,
    //     articles: parseddata.articles
    //   })
    // }
    this.setState({ page: this.state.page + 1 });
    this.updatenews();
  };
  handleprevious = async () => {
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=23feef3d540d47208520e0d1fb1d01c0&page=${this.state.page-1}&pageSize=${this.props.pagesize}`
    // let data = await fetch(url);
    // let parseddata= await data.json();
    // this.setState({s
    //   page:this.state.page - 1,
    //   articles: parseddata.articles
    // })
    this.setState({ page: this.state.page - 1 });
    this.updatenews();
  };


  fetchMoreData = async () => {
     this.setState({page: this.state.page+1})
     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    
     let data = await fetch(url);
     let parseddata = await data.json();
     this.setState({
       
       articles: this.state.articles.concat(parseddata.articles),
       totalResults: parseddata.totalResults,
     });
      
  };

  render() {
    return (
      <>
        <h2 className="text-center">
          NewsMonkey - Top Headlines from{" "}
          {this.capitalizeFirstLetter(this.props.category)} category
        </h2>
        { this.state.loading && <Spinner/>}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 45) : " "}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : " "
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
        
      </>
    );
  }
}

export default News;
