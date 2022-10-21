import "./App.css";
import React from "react";
import Button from "./components/Button";
import Counter from "./components/Counter";
import reactLogo from "./img/react-logo.png";

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      numClicks: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }
  handleClick(){
    this.setState(({ numClicks }) => ({ numClicks: numClicks + 1 }));
  }
  resetCounter(){
    this.setState({ numClicks: 0 })
  }
  render(){
    return (
      <div className="App">
        <div className="react-logo-contain">
          <img className="react-logo" src={reactLogo} alt="Logo de React" />
        </div>
        <div className="counter-main">
          <Counter numClicks={this.state.numClicks} />
          <Button text="Click" isButtonClick={true} handleClick={this.handleClick} />
          <Button text="Reset" isButtonClick={false} handleClick={this.resetCounter} />
        </div>
      </div>
    );
  }
}
export default App;