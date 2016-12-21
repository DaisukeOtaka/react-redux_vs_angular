"use strict";

import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import FizzBuzzContainer from './containers/fizz-buzz';
import configureStore from './store/store';

const store = configureStore();
const rootElement = document.getElementById('app');

render(
  <Provider store={store}>
    <FizzBuzzContainer />
  </Provider>,
  rootElement
)
