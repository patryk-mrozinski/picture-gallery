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
      <div className="grid grid-cols-10 gap-4">
        <div className="col-start-1">
          <b>
            {isSelectedLanguageEnglish ? "Picture Gallery" : "Galeria zdjec"}
          </b>
        </div>
        <div className="col-start-4 lg:col-start-9">
          <LanguageContextButton />
        </div>
        <div className="col-start-8 lg:col-start-10">
          <Dropdown />
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
