import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import shoppingCartReducer from './store/reducers/ShoppingCart';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(shoppingCartReducer, applyMiddleware(thunk));
 
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
