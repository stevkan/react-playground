import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './routes/home';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
};

export default App;