import React, { Component, useEffect } from "react"
import LightGallery from "lightgallery/react"

import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-zoom.css"
import "lightgallery/css/lg-thumbnail.css"

// Import plugins if needed
import lgZoom from "lightgallery/plugins/zoom"
import lgThumbnail from "lightgallery/plugins/thumbnail"

import "react-photo-view/dist/react-photo-view.css"

const ImageGallery = props => {
  const images = props.images

  return (
    <LightGallery plugins={[lgZoom, lgThumbnail]} speed={500} thumbnail={true}>
      {images.map((image, index) => (
        <a href={image.secure_url} key={index} className="image-preview-link">
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
