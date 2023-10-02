import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { apiData } from "../zsample";
import Skeleton from "./Skeleton";
import "./News.css";
import { environmentVariable } from "../environments/environment";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: apiData.articles.slice(0, 6),
      loading: false,
      pageNumbersArry: [1],
    };
    this.getNews(1);
  }
  totalPage = 1;
  pageNumber;
  async getNews(page) {
    console.log("okokokokokokok", page);
    console.log("pageNum,ber currwent", this.pageNumber);
    if (this.pageNumber !== page) {
      this.pageNumber = page;
      console.log("pagenum");
      console.log(this.pageNumber);
      console.log("this");
      this.setState({ loading: true });
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }
      &category=${this.props.category}&apiKey=${environmentVariable.apiKeyAj}
      &page=${this.pageNumber ? this.pageNumber : 1}&pageSize=${
        this.props.pageSize
      }`;
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      this.totalPage = Math.ceil(data.totalResults / 6);
      console.log("tottal pages", this.totalPage);
      console.log("total pages array-", this.getPageNumberArray());
      this.setState({
        articles: data.articles,
        loading: false,
        pageNumbersArry: this.getPageNumberArray(),
      });

      console.log(Math.ceil(data.totalResults / 6));
    } else {
      console.log("same page");
    }
  }

  getPageNumberArray() {
    console.log("get array ccoledd");
    let pagesArray = [];
    if (this.pageNumber === 1) {
      pagesArray = [this.pageNumber, this.pageNumber + 1, this.pageNumber + 2];
    } else if (this.pageNumber === this.totalPage) {
      pagesArray = [this.pageNumber - 2, this.pageNumber - 1, this.pageNumber];
    } else {
      pagesArray = [this.pageNumber - 1, this.pageNumber, this.pageNumber + 1];
    }

    console.log(pagesArray);
    return pagesArray;
  }
  render() {
    // const getData = (nem) => {
    //     console.log(nem);
    //     console.log("egeugeigeiu");
    // };
    return (
      <div
        className="container"
        style={{ textAlign: "center", marginTop: "30px" }}
      >
        {this.state.loading && <Skeleton />}

        {!this.state.loading && (
          <div className="row">
            {this.state.articles.map((e) => {
              return (
                <div key={e.url} className="col-md-4">
                  <NewsItem
                    title={e.title}
                    description={e.description}
                    imagePath={e.urlToImage}
                    newsUrl={e.url}
                  />
                </div>
              );
            })}
          </div>
        )}
        <nav style={{ marginTop: "1rem" }} aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <div
                className="page-link"
                onClick={() => {
                  return this.pageNumber !== 1
                    ? this.getNews(
                        this.pageNumber - 1 !== 0 ? this.pageNumber - 1 : 1
                      )
                    : undefined;
                }}
              >
                Previous
              </div>
            </li>
            {this.state.pageNumbersArry.map((p) => {
              console.log("p--->", p);
              return (
                <li className="page-item" style={{ marginLeft: "8px" }}>
                  <div
                    className="page-link"
                    style={
                      this.pageNumber === p
                        ? { backgroundColor: "#212529", color: "#fff" }
                        : {}
                    }
                    onClick={() => this.getNews(p)}
                  >
                    {p}
                  </div>
                </li>
              );
            })}

            {/* <li className="page-item" style={{ marginLeft: "8px" }}>
              <div className="page-link" onClick={() => this.getNews(1)}>
                1
              </div>
            </li>
            <li className="page-item" style={{ marginLeft: "8px" }}>
              <div className="page-link" onClick={() => this.getNews(2)}>
                2
              </div>
            </li>
            <li className="page-item" style={{ marginLeft: "8px" }}>
              <div className="page-link" onClick={() => this.getNews(3)}>
                3
              </div>
            </li> */}
            <li className="page-item" style={{ marginLeft: "8px" }}>
              <div
                className="page-link"
                onClick={() =>
                  this.getNews(
                    this.pageNumber + 1 <= this.totalPage
                      ? this.pageNumber + 1
                      : this.totalPage
                  )
                }
              >
                Next
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
