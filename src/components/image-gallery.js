import React, { useContext } from "react"
import LightGallery from "lightgallery/react"
import { LanguageContext } from "../context/LanguageContext"

import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-thumbnail.css"

import lgThumbnail from "lightgallery/plugins/thumbnail"

const ImageGallery = props => {
  const images = props.images
  const markdownData = props.markdown.edges
  const { value: languageValue } = useContext(LanguageContext)

  if (!markdownData) {
    return <div>Loading...</div>
  }

  const filterMarkdownLanguage = markdownData.find(
    data => data.node.frontmatter.language === languageValue
  )

  return (
    <LightGallery
      selector=".image-preview-link"
      plugins={[lgThumbnail]}
      speed={500}
      thumbnail={true}
      download={false}
    >
      {images.map((image, index) => {
        const imageTitle = image.secure_url.match(/\/([^\/?]+)\?/)[1]
        if (!filterMarkdownLanguage) {
          return <div>Loading...</div>
        }
        const translatedData =
          filterMarkdownLanguage.node.frontmatter.items.find(
            data => data.imageTitle === imageTitle
          )

        return (
          <div key={index} className="image-preview-wrapper">
            <a
              href={image.secure_url}
              className="image-preview-link"
              data-src={image.secure_url}
              data-sub-html={`${translatedData?.title}: ${translatedData?.description}`}
            >
              <img
                className="object-cover w-full h-full cursor-pointer"
                src={image.secure_url}
                alt={translatedData?.title || ""}
              />
            </a>
            <p>{translatedData?.title || ""}</p>
          </div>
        )
      })}
    </LightGallery>
  )
}

export default ImageGallery
