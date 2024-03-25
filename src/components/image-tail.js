import * as React from "react"
import * as styles from '../pages/tails.module.css';

const ImageTail = (props) => {
  const src = props.media.secure_url

  return (
    <div className={styles.imageWrapper}>
       <img src={src} />
    </div>
  )
}

export default ImageTail
