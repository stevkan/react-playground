import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
const Post = ({ data: { loading, post } }) => {
 if (!loading) {
  return (
   <article className="wrapper">
    <div className="post">
     <h1>{post.title}</h1>
      <img src={post.image.url} alt="Dogs" />
      <p dangerouslySetInnerHTML={{ __html: post.description }} />
    </div>
   </article>
  );
 }
 return <h2>Loading article...</h2>
};
const singlePost = gql`
 query singlePost($_id: String!) {
  post: Post(id: $_id) {
    _id
    title
    description
   }
 }
`;
export default graphql(singlePost, {
 options: ({ match }) => ({
  variables: {
   _id: match.params.id
  }
 })
})(Post);