import '../styles/globals.css'
import '../styles/style.css'

import React from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
