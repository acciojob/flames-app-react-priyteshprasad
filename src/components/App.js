import React, { Component, useState } from "react";
import "../styles/App.css";

function countNonCommonChars(str1, str2) {
  // Create an object to keep track of character counts
  let charCount = {};

  // Iterate over the first string and count each character
  for (let char of str1) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Iterate over the second string and count each character
  for (let char of str2) {
    if (charCount[char]) {
      charCount[char]--;
    } else {
      charCount[char] = -1;
    }
  }

  // Count characters that are not common
  let nonCommonCount = 0;
  for (let char in charCount) {
    if (charCount[char] !== 0) {
      nonCommonCount += Math.abs(charCount[char]);
    }
  }

  return nonCommonCount;
}
const results = [
  "Siblings",
  "Friends",
  "Love",
  "Affection",
  "Marriage",
  "Enemy",
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { relation: "", input1: "", input2: "" };
  }
  calculateRelation = () => {
    let name1 = this.state.input1;
    let name2 = this.state.input2;
    if (name1.length === 0 || name2.length === 0) {
      return "Please Enter valid input";
    }
    let uncommonCount = countNonCommonChars(name1, name2) % 6;
    return results[uncommonCount];
  };
  handleSubmit = () => {
    this.setState({ relation: this.calculateRelation() });
    // console.log(this.state);
  };
  handleChange1 = (e) => {
    this.setState({ input1: e.target.value });
  };
  handleChange2 = (e) => {
    this.setState({ input2: e.target.value });
  };
  handleClear = () => {
    this.setState({ input1: "", input2: "" });
  };

  render() {
    return (
      <div id="main">
        <input
          id="input1"
          name="name1"
          onChange={this.handleChange1}
          value={this.state.input1}
        />
        <input
          id="input2"
          name="name2"
          onChange={this.handleChange2}
          value={this.state.input2}
        />
        <button id="calculate_relationship" onClick={this.handleSubmit}>
          Calculate
        </button>
        <button id="clear" onClick={this.handleClear}>
          Clear
        </button>
        <h3 id="answer">{this.state.relation}</h3>
        {/* Do not remove the main div */}
      </div>
    );
  }
}

export default App;
