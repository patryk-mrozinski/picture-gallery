import React, { useContext } from "react"
import { graphql, Link } from "gatsby"

import { LanguageContext } from "../context/LanguageContext"
import LanguageContextButton from "../components/language-context-button"
import { StaticImage } from "gatsby-plugin-image"

const About = ({ data }) => {
  const { selectedLanguage, isSelectedLanguageEnglish } =
    useContext(LanguageContext)

  const aboutText = data.allMarkdownRemark.edges.find(
    data => data.node.frontmatter.language === selectedLanguage
  )

  if (!aboutText) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="grid grid-cols-10 navigation-bar-wrapper">
        <Link
          className="col-start-1 col-span-3 lg:col-span-1 border-2 border-green-800 text-gray-900 py-2 px-4 rounded text-[#ffd700]"
          to="/"
        >
          {isSelectedLanguageEnglish ? "Back to gallery" : "Wroc do galerii"}
        </Link>
        <div className="col-start-6 lg:col-start-10">
          <LanguageContextButton />
        </div>
      </div>

      <div className="relative h-screen mx-2 my-4">
        <StaticImage
          src="../markdown/images/DSC06526.JPG"
          alt="Background"
          layout="fullWidth"
          className="absolute inset-0 w-full h-screen object-cover rounded-lg"
        />

        <div className="absolute inset-0 overflow-y-scroll content-center">
          <div className="w-full p-4 text-white flex items-center justify-center">
            <p className="">{aboutText.node.frontmatter.about}</p>
          </div>
        </div>
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
