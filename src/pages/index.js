import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const IndexPage = ({ data }) => {
  return (
    <div>
      <div className="flex justify-between h-10 my-6">
        <h1>
          <b>Picture Gallery</b>
        </h1>
        <div className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          <Link to="/images-page">More pictures</Link>
        </div>
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
