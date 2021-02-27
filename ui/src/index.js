import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import jobReducer from './reducers/jobReducer';

// Create a store for the application
const store = createStore(jobReducer);

// Attach the store to the application
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));