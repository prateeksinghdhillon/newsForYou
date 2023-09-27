import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { apiData } from "../zsample";

export default class News extends Component {
  pageNumber = 1;
  constructor() {
    super();
    this.state = {
      articles: apiData.articles.slice(0, 4),
      totalPage: 1,
    };
    this.getNews();
    this.pageNumber = 1;
  }
  async getNews(page) {
    console.log("okokokokokokok", page);
    if (this.pageNumber !== page) {
      this.pageNumber = page;
      console.log("pagenum");
      console.log(this.pageNumber);
      console.log("thsui");
      let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=81c9f763fd1a47ca882cc0832ef7949b&page=${
        this.pageNumber ? this.pageNumber : 1
      }&pageSize=6`;
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      this.setState({
        articles: data.articles,
        totalPage: Math.ceil(data.totalResults / 6),
      });
    } else {
      console.log("same page");
    }
  }
  apc = () => {};
  render() {
    // const getData = (nem) => {
    //     console.log(nem);
    //     console.log("egeugeigeiu");
    // };
    return (
      <div className="container">
        <h1>News Today</h1>
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
        <nav
          style={{ "margin-top": "1rem", "margin-left": "52rem" }}
          aria-label="Page navigation example"
        >
          <ul className="pagination">
            <li className="page-item">
              <div
                className="page-link"
                onClick={() =>
                  this.getNews(
                    this.pageNumber - 1 !== 0 ? this.pageNumber - 1 : 1
                  )
                }
              >
                Previous
              </div>
            </li>
            <li className="page-item">
              <div className="page-link" onClick={() => this.getNews(1)}>
                1
              </div>
            </li>
            <li className="page-item">
              <div className="page-link" onClick={() => this.getNews(2)}>
                2
              </div>
            </li>
            <li className="page-item">
              <div className="page-link" onClick={() => this.getNews(3)}>
                3
              </div>
            </li>
            <li className="page-item">
              <div
                className="page-link"
                onClick={() =>
                  this.getNews(
                    this.pageNumber + 1 <= this.state.totalPage
                      ? this.pageNumber + 1
                      : this.state.totalPage
                  )
                }
              >
                Next
              </div>
            </li>
            <l1>
              <input
                type="number"
                onChange={(e) =>
                  this.getNews(
                    Number(e.target.value) !== 0 &&
                      Number(e.target.value) !== this.state.totalPage
                      ? e.target.value
                      : Number(e.target.value) === this.state.totalPage
                      ? this.pageNumber
                      : 1
                  )
                }
              ></input>
            </l1>
          </ul>
        </nav>
      </div>
    );
  }
}
