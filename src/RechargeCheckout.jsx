import React, {useEffect} from 'react';

import { Apis } from './apis'
import axios from 'axios';

function RechargeCheckout() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }
    const token = localStorage.getItem('accessToken');
    const result = await axios.post(Apis.pg_create_order,
        {
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

    if (!result) {
      alert('Server error. Are you online?');
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: 'rzp_test_qS1W2gf2gyLz1p', // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: 'MyFans',
      description: 'Test Transaction',
      image:'https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png',
      order_id: order_id,
      handler: async function (response) {
        alert(response.razorpay_payment_id);
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post(Apis.pg_verify_payment,
            data,
            {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            } );

        alert(result.data.msg);
      },
      prefill: {
        name: '<YOUR NAME>',
        email: 'example@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Example Corporate Office',
      },
      theme: {
        color: '#61dafb',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <p>Buy React now!</p>
        <button className='App-link' onClick={displayRazorpay}>
          Pay ₹500
        </button>
      </header>
    </div>
  );
}

export default RechargeCheckout;