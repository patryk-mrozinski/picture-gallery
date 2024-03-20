import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const GalleryPage = ({ data }) => {
  return (
    <div>
      <h1>Picture Gallery</h1>
      <div>
        {data.allFile.nodes.map((node) => (
          <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.name} key={node.id} />
        ))}
      </div>
    </div>
  );
};

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      nodes {
        id
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

export default GalleryPage;
