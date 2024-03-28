import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
// import * as styles from "../styles/gallery.module.css"

const IndexPage = ({ data }) => {
  return (
    <div>
      <h1>Picture Gallery</h1>
      <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link to="/images-page">More pictures</Link>
      </div>
      <div className="flex flex-col items-start">
        {data.allFile.nodes.map(node => (
          <div className="image-wrapper" key={node.id}>
            <GatsbyImage
              className="object-cover w-full h-full"
              image={node.childImageSharp.gatsbyImageData}
              alt={node.name}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

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
`

export default IndexPage
