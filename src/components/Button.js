import React from "react";
import "../Styles/button.css";

class Button extends React.Component{
  render(){
  return (
    <button
      className={this.props.isButtonClick ? "button-click" : "button-reset"}
      onClick={this.props.handleClick}
    >
      {this.props.text}
    </button>
  );
  }
}

export default Button;
