import React, { Component } from "react";
import './NewItem.css'
export default class NewsItem extends Component {
  render() {
    let { title, description, imagePath, newsUrl } = this.props;
    return (
      <div>
        <div className="card my-3" style={{ width: "18rem" }}>
          <img
            style={{ height: "170px" }}
            src={!imagePath ? "../../public/defaultNewsjpg.jpg" : imagePath}
            className="card-img-top"
            alt="..."
          />
          <div
            className="card-body" id="style-14"
            style={{ height: "220px", overflow: "hidden",overflowY:'scroll' }}
          >
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} className="btn btn-outline-secondary btn-sm">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
