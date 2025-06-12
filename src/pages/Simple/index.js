import React, { Component } from "react";

class Simple extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://cdn.iamport.kr/v1/iamport.js";
    script.async = true;
    script.onload = () => {
      // Init IMP once the script is loaded
      if (window.IMP) {
        window.IMP.init("imp25405264"); // Replace with your imp key
      }
    };
    document.body.appendChild(script);
  }

  requestPay = () => {
    const IMP = window.IMP;
    if (!IMP) {
      alert("Payment SDK not loaded yet.");
      return;
    }

    IMP.request_pay(
      {
        pg: "html5_inicis.INIpayTest",
        pay_method: "card",
        merchant_uid: "order_123456",
        name: "React Product",
        amount: 1000,
        buyer_email: "buyer@example.com",
        buyer_name: "홍길동",
        buyer_tel: "01012345678",
        buyer_addr: "서울시 강남구",
        buyer_postcode: "123-456",
      },
      (rsp) => {
        if (rsp.success) {
          alert("Payment successful!");
          console.log(rsp);
        } else {
          alert("Payment failed: " + rsp.error_msg);
        }
      }
    );
  };

  render() {
    return (
      <div>
        <h1>Payment Page</h1>
        <button onClick={this.requestPay}>Pay Now</button>
      </div>
    );
  }
}

export default Simple;
