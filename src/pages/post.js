import React from 'react';
import Layout from '../components/Layout';
import postBackground from '../images/post-bg.jpg';

export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div>
        <h1>Amazing Pandas Eating Things</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>{node.frontmatter.title} </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          excerpt
        }
      }
    }
  }
`;
