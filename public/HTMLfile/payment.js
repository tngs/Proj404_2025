import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const serviceApplyId = 0, serviceName = "", price = 0;
  const navigate = useNavigate();

  useEffect(() => {
    // 1. 동적으로 iamport 스크립트 로드
    const script = document.createElement('script');
    script.src = 'https://cdn.iamport.kr/v1/iamport.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // 2. 초기화 (발급받은 가맹점 식별코드)
      window.IMP.init('imp25405264');
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const requestPay = () => {
    const IMP = window.IMP;
    IMP.request_pay(
      {
        pg: 'html5_inicis.INIpayTest',
        pay_method: 'card',
        merchant_uid: serviceApplyId,  // 주문 번호
        name: serviceName,             // 상품 이름
        amount: price,                 // 상품 가격
        buyer_email: 'buyer@gmail.com',
        buyer_name: 'buyer',
        buyer_tel: '010-1234-5678',
        buyer_addr: 'buyerAddress',
        buyer_postcode: '123-456',
      },
      async (rsp) => {
        if (rsp.success) {
          try {
            // 3. 서버로 콜백 데이터 전송
            const res = await fetch('/payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                payment_uid: rsp.imp_uid,
                apply_uid: rsp.merchant_uid,
              }),
            });
            const data = await res.json();
            console.log('Server Response:', data);
            alert('/success-payment');
          } catch (err) {
            console.error('Callback Error:', err);
            alert('결제 완료 후 서버 요청 중 오류가 발생했습니다.');
          }
        } else {
          // alert('결제 실패: ' + rsp.error_msg);
          alert('/fail-payment',rsp.error_msg);
        }
      }
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>결제 페이지</h1>
      <p><strong>서비스:</strong> {serviceName}</p>
      <p><strong>금액:</strong> {price}원</p>
      <button onClick={requestPay}>
        결제하기
      </button>
    </div>
  );
};

export default PaymentPage;
