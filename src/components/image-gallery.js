import * as React from "react"
import LightGallery from "lightgallery/react"

import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-thumbnail.css"

import lgThumbnail from "lightgallery/plugins/thumbnail"

const ImageGallery = props => {
  const images = props.images

  return (
    <LightGallery
      plugins={[lgThumbnail]}
      speed={500}
      thumbnail={true}
      download={false}
    >
      {images.map((image, index) => (
        <a
          href={image.secure_url}
          key={index}
          className="image-preview-link"
          data-sub-html={`fsafsfas ${index}`}
        >
          <img
            className="object-cover w-full h-full cursor-pointer"
            src={image.secure_url}
          />
        </a>
      ))}
    </LightGallery>
  )
}

export default ImageGallery
