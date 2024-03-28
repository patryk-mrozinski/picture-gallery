import * as React from "react"

const ImageTail = props => {
  const src = props.media.secure_url

  return (
    <div className="flex flex-shrink-0 flex-grow-0 w-1/3 items-center justify-around">
      <img className="w-5/6" src={src} />
    </div>
  )
}

export default ImageTail
