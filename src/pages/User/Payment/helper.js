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
    IMP.init("imp25405264"); // *Replace with your own imp key

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
      (rsp) => {
        if (rsp.success) {
          /*
          {//?/payment: paymentUid, applyUid
          * "success": true,
          * "imp_uid": "imp_291827799149",//?paymentUid
          * "pay_method": "point",
          * "merchant_uid": "704d47db-9eef-46ef-9877-1f5db20535d8",//?applyUid
          * "name": "TransportServiceNo1",
          * "paid_amount": 100,
          * "currency": "KRW",
          * "pg_provider": "html5_inicis",
          * "pg_type": "payment",
          * "pg_tid": "StdpayCARDINIpayTest20250616171814084928",
          * "apply_num": "",
          * "buyer_name": "buyer",
          * "buyer_email": "buyer@gmail.com",
          * "buyer_tel": "010-1234-5678",
          * "buyer_addr": "buyerAddress",
          * "buyer_postcode": "123-456",
          * "custom_data": null,
          * "status": "paid",
          * "paid_at": 1750061894,
          * "receipt_url": "https://iniweb.inicis.com/DefaultWebApp/mall/cr/cm/mCmReceipt_head.jsp?noTid=StdpayCARDINIpayTest20250616171814084928&noMethod=1",
          * "card_name": null,
          * "bank_name": null,
          * "card_quota": 0,
          * "card_number": "*********"
        }
    */
          console.log(rsp);
          axios
            .post("/payment-service/payment", {
              // imp_uid: rsp.imp_uid,
              // ...rsp,
              payment_uid: rsp.imp_uid,
              apply_uid: rsp.merchant_uid,
            })
            .then((obj) => {
              console.log(obj);
            })
            .catch((err) => console.error(err));
        } else {
          console.error(rsp);
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
