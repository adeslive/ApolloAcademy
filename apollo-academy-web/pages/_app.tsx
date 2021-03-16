import { ChakraProvider } from '@chakra-ui/react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';

const stripePromise = loadStripe('pk_test_51IVNrmI4W0jH35I34bFB1mnE6umwoNkV9N8aXe1JRtYQEoW7sVuoupoXnJ7UV5wMV4sNBpMGdIMzkvRlHnvIbRsv00t9r0HlG1');

function MyApp({ Component, pageProps }) {

  return (
    <Elements stripe={stripePromise}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Elements>
  )
}

export default MyApp
