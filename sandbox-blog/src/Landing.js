// @ts-check
import React from 'react';
// import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
const Landing = ({ data: { loading, blogPosts } }) => {
 if (!loading) {
  return (
   <div className="wrapper">
    {blogPosts.map(post => (
     <article className="content" key={post._id}>
      <h2>{post.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: post.description }} />
     </article>
    ))}
   </div>
  );
 }
 return <h2>Loading Posts...</h2>
};
const blogPosts = gql`
 query {
  blogPosts {
   _id,
   title,
   description
  }
}
`;
export default graphql(blogPosts)(Landing);
