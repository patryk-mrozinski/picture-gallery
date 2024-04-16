import React from "react"
import { graphql, Link } from "gatsby"
import ImageGallery from "../components/image-gallery"

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
        <ImageGallery images={claudinaryImages} />
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
