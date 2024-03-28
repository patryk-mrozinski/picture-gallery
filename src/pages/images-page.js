import React from "react"
import { graphql, Link } from "gatsby"
import ImageTail from "../components/image-tail"

const ImagesPage = props => {
  const claudinaryImages = props.data.allCloudinaryMedia.nodes

  return (
    <div>
      <Link
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        to="/"
      >
        Go back to main page
      </Link>
      <div className="flex flex-wrap my-10">
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
