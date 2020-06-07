import React from "react";
import "./Common.css";

class ThumbNail extends React.Component {
  render() {
    return <img src={this.props.image} alt="thumb" className="thumbnail" />;
  }
}

export default ThumbNail;
