import React, { Component } from "react";
import "./ShowContent.css";

class ShowContent extends Component {
  state = {
    isCounter: false,
  };
  showContent = (item) => {
    this.setState({
      isCounter: item,
    });
  };
  render() {
    return (
      <div className="showcontent-container">
        <div className="btn-wrapper">
          <button
            className="btn btn-show"
            onClick={() => this.showContent(true)}
          >
            Show
          </button>
          <button
            className="btn btn-hide"
            onClick={() => this.showContent(false)}
          >
            Hide
          </button>
        </div>
        <div
          className={
            "showcontent-box " + (!this.state.isCounter ? "active" : "active2")
          }
        >
          <div className="showcontent-header">ShowContent Title</div>
          <div className="showcontent-body">
            <h1>CONTENT</h1>
          </div>
          <div className="showcontent-footer">
            <a href="#">More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowContent;
