import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import WebChatView from './routes/webChatView';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={WebChatView} />
        </div>
      </Router>
    );
  }
}

export default App;