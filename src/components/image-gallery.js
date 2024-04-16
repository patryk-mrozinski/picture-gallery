import * as React from "react"
import { PhotoProvider, PhotoView } from "react-photo-view"

import "react-photo-view/dist/react-photo-view.css"

const ImageGallery = props => {
  const images = props.images

  return (
    <PhotoProvider maskOpacity={0.5}>
      {images.map((item, index) => (
        <div className="flex flex-shrink-0 flex-grow-0 w-1/3 items-center justify-around my-10">
          <PhotoView key={index} src={item.secure_url}>
            <img
              className="w-5/6 cursor-pointer"
              src={item.secure_url}
              alt=""
            />
          </PhotoView>
        </div>
      ))}
    </PhotoProvider>
  )
}

export default ImageGallery
