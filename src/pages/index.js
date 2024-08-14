import React, { useContext } from "react"
import { graphql } from "gatsby"

import ImageGallery from "../components/image-gallery"
import { LanguageContext } from "../context/LanguageContext"
import LanguageContextButton from "../components/language-context-button"
import Dropdown from "../components/dropdown"

const IndexPage = ({ data }) => {
  const markdown = data.allMarkdownRemark
  const claudinaryImages = data.allCloudinaryMedia.nodes
  const { isSelectedLanguageEnglish } = useContext(LanguageContext)

  return (
    <div>
      <div className="flex justify-between h-10 my-6">
        <h1>
          <b>
            {isSelectedLanguageEnglish ? "Picture Gallery" : "Galeria zdjec"}
          </b>
        </h1>
        <LanguageContextButton />
        <Dropdown />
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
