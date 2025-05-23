import React from "react";
import { Component } from "react";

class Simple extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <iframe
          src="/HTMLfile/payment.html"
          style={{ width: "100%", height: "100%", border: "none" }}
          title="Foo Page"
        />
      </div>
    );
  }
}

export default Simple;
