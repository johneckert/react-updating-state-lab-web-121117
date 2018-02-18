// Code DigitalClicker Component Here
import React from "react";

export default class DigitalClicker extends React.Component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    };
  }

  clickButton = () => {
    this.setState({ timesClicked: ++this.state.timesClicked }, () => {
      this.render();
    });
  };

  render() {
    return (
      <button onClick={this.clickButton}>{this.state.timesClicked}</button>
    );
  }
}
