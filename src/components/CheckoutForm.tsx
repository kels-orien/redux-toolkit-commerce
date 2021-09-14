import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import {lightRed} from '../utils/colors'
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useHistory } from "react-router-dom";

const Button = styled.button`
    background-color: ${lightRed};
    border-color: transparent;
    border-radius: .125rem;
    border-width: 1px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    line-height: 1.5rem;
    padding: 0.75rem 2rem;
    box-shadow: 0 0 transparent, 0 0 transparent, 0 1px 2px 0 rgba(0,0,0,0.05);
    text-align: center;
    color: rgb(241 243 245);
    text-transform: uppercase;
    transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;

    &: hover {
            background-color: rgb(248 249 250);
            border-width: 1px;
            color: rgb(0 0 0);
            border: 1px solid rgb(0 0 0);
    }
    
`

const Form = styled.form`
    padding-top: 2rem;
`

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const history = useHistory()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    history.push('/products/confirmation')
    
  };

  return (
    <Form onSubmit={handleSubmit}>
      <CardElement />
      <Button type="submit" disabled={!stripe}>
        Pay
      </Button>
    </Form>
  );
};

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK_TEST);

const App = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

ReactDOM.render(<App />, document.getElementById('root'));

export default App