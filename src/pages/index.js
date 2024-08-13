import React, { useContext } from "react"
import { graphql, Link } from "gatsby"
import ImageGallery from "../components/image-gallery"
import { LanguageContext } from "../context/LanguageContext"
import LanguageContextButton from "../components/language-context-button"

const IndexPage = ({ data }) => {
  const markdown = data.allMarkdownRemark
  const claudinaryImages = data.allCloudinaryMedia.nodes
  const selectedLanguage = useContext(LanguageContext).value

  return (
    <div>
      <div className="flex justify-between h-10 my-6">
        <h1>
          <b>
            {selectedLanguage === "eng" ? "Picture Gallery" : "Galeria zdjec"}
          </b>
        </h1>
        <LanguageContextButton />
        <div className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          <Link to="/images-page">More pictures</Link>
        </div>
      </div>
      <div className="flex flex-col items-start">
        <ImageGallery images={claudinaryImages} markdown={markdown} />
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            language
            items {
              imageTitle
              title
              description
            }
          }
        }
      }
    }
    allCloudinaryMedia {
      nodes {
        secure_url
      }
    }
  }
`

export default IndexPage
