import React from 'react';
import { Link } from 'react-router-dom';
import Landing from './Landing';

const Home = () => {
  return (
    <div>
      <Link to={`./blog`}>Blog</Link>
    </div>
  )
}

export default Home;