import React from 'react';
import './App.css';
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51ItWL3FsljR1JBuoBjwzyQHxPKsYWuYb4gwt9UpT7oPCWwNnPyOs1omRSRlmbshqsCZGE5KHR3f6trjFayWgSBzI00ZtZmYGLt')



const CheckoutForm = () => {

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })

    if (!error){
      console.log(paymentMethod)
    }
  }


  return( 
  <form onSubmit={handleSubmit} >
    <CardElement/>
    <img src="https://thumb.pccomponentes.com/w-530-530/articles/22/229918/a27.jpg" width="200px"/>
    <button>
      pay
    </button>
  </form>
  )
}


function App() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm/>
    </Elements>
  );
}

export default App;
