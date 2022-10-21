import React from "react";
import "../Styles/counter.css";

class Counter extends React.Component {
  render() {
    return <div className="counter">{this.props.numClicks}</div>;
  }
}
export default Counter;
