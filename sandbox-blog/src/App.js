import React  from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Blog from './Blog';
import Post from './Post';
import './App.css';
const App = () => (
<BrowserRouter>
 <main>
  <Header />
  <Switch>
   <Route exact path="/" component={Home} />
   <Route path="/blog" component={Blog} />
   <Route path="/post/:_id" component={Post} />
  </Switch>
 </main>
</BrowserRouter>
);
export default App;