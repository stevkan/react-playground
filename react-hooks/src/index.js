import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from './store/StoreContext';
import App from './app';
import './css/index.css';
import * as serviceWorker from './serviceWorker'

const Index = () => {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));

serviceWorker.unregister();