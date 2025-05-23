import React from "react";
import { Component } from "react";
import NavButton from "../../components/Button/NavButton";

class Simple extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <NavButton></NavButton>
    );
  }
}

export default Simple;
