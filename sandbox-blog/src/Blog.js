import React from 'react';
import { Link, Route } from 'react-router-dom';
import Landing from './Landing';

const Blog = () => {
  return (
    <div>
      <Link to={`./landing`}>
        <Route component={Landing} />
      </Link>
    </div>
  )
}

export default Blog;