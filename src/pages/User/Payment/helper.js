import axios from "../../../axios";

const loadIamportScript = () => {
  return new Promise((resolve, reject) => {
    if (window.IMP) {
      return resolve(); // Already loaded
    }
    const script = document.createElement("script");
    script.src = "https://cdn.iamport.kr/v1/iamport.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Iamport script."));
    document.body.appendChild(script);
  });
};

const requestPay = async ({
  serviceApplyId,
  serviceName,
  price,
  buyerEmail = "buyer@gmail.com",
  buyerName = "buyer",
  buyerTel = "010-1234-5678",
  buyerAddr = "buyerAddress",
  buyerPostcode = "123-456",
}) => {
  try {
    await loadIamportScript();

    const IMP = window.IMP;
    IMP.init("imp25405264"); // Replace with your own imp key

    IMP.request_pay(
      {
        pg: "html5_inicis.INIpayTest",
        pay_method: "card",
        merchant_uid: serviceApplyId,
        name: serviceName,
        amount: price,
        buyer_email: buyerEmail,
        buyer_name: buyerName,
        buyer_tel: buyerTel,
        buyer_addr: buyerAddr,
        buyer_postcode: buyerPostcode,
      },
      function (rsp) {
        if (rsp.success) {
          alert("call back!!: " + JSON.stringify(rsp));
          axios
            .post("/payment", {
              payment_uid: rsp.imp_uid,
              apply_uid: rsp.merchant_uid,
            })
            .then((obj) => {
              console.log(obj);
            });
        } else {
          console.error("Payment failed:", rsp);
          alert("Payment failed: " + JSON.stringify(rsp));
        }
      }
    );
  } catch (error) {
    console.error("Iamport script load failed:", error);
    alert("Payment system failed to load.");
  }
};

export default requestPay;
