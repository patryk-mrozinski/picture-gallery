import React, { useContext } from "react"
import { graphql, Link } from "gatsby"

import { LanguageContext } from "../context/LanguageContext"
import LanguageContextButton from "../components/language-context-button"

const About = ({ data }) => {
  const { selectedLanguage, isSelectedLanguageEnglish } =
    useContext(LanguageContext)

  const aboutText = data.allMarkdownRemark.edges.find(
    data => data.node.frontmatter.language === selectedLanguage
  )

  return (
    <div>
      <Link
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        to="/"
      >
        {isSelectedLanguageEnglish ? "Go back to gallery" : "Wroc do galerii"}
      </Link>
      <LanguageContextButton />
      <div className="flex flex-wrap my-10">
        <p>{aboutText.node.frontmatter.about}</p>
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
            about
          }
        }
      }
    }
  }
`

export default About
