import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import FoodstuffstoreService from './services/foodstuff-service';
import { FoodstuffstoreServiceProvider } from './components/foodstuff-service-context';

import store from './store';

const foodstuffstoreService = new FoodstuffstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <FoodstuffstoreServiceProvider value={foodstuffstoreService}>
          <App />
      </FoodstuffstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);