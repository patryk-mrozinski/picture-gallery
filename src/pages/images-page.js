import React from "react"
import { graphql } from "gatsby"
import ImageTail from '../components/image-tail';
import * as styles from './tails.module.css';

const ImagesPage = (props) => {
  
  const claudinaryImages = props.data.allCloudinaryMedia.nodes
  console.log({claudinaryImages})

  return (
    <div className={styles.tailContainer}>
      {claudinaryImages.map((media, index) => <ImageTail key={index} media={media} />)}
    </div>
  )
}

export const query = graphql`
  query {
    allCloudinaryMedia {
      nodes {
        secure_url
      }
    }
  }
`;

export default ImagesPage;
