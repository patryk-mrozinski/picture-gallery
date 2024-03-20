import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './gallery.module.css';

const IndexPage = ({ data }) => {
  return (
    <div>
      <h1>Picture Gallery</h1>

      <div className={styles.galleryContainer}>
        {data.allFile.nodes.map((node) => (
          <div className={styles.imageWrapper} key={node.id}>
            <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.name} />
          </div>
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

export default IndexPage;
