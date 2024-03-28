import React from "react"
import { graphql, Link } from "gatsby"
import ImageTail from "../components/image-tail"

const ImagesPage = props => {
  const claudinaryImages = props.data.allCloudinaryMedia.nodes
  console.log({ claudinaryImages })

  return (
    <div>
      <div className="flex flex-wrap my-32">
        {claudinaryImages.map((media, index) => (
          <ImageTail key={index} media={media} />
        ))}
      </div>
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
`

export default ImagesPage
