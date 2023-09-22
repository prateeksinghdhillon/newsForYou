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
  }
  async getNews(page = 1) {
    if (this.pageNumber !== page) {
      this.pageNumber = page;
      console.log(this.pageNumber);
      let url = ``;
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      this.setState({
        articles: data.articles,
        totalPage: data.totalResults,
      });
    } else {
      console.log("same page");
    }
  }
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
          </ul>
        </nav>
      </div>
    );
  }
}
