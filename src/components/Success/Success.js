import React from 'react'

import styles from '../Drag/component.less'
import logoimg from '../../assets/lazybuilder.png'

const Success = props => {
  return (
    <div className={`${styles.center} ${styles.fillScreen}`}>
      <img src={logoimg} />
      <hr />
      <h3 className={styles.dragText}>Do a little dance,</h3>
      <h3 className={styles.dragText}>make a little code,</h3>
      <h3 className={styles.dragText}>and get ready!</h3>
      <hr />
      <p>{props.message}</p>
      <hr />
      <button
        onClick={() => {
          window.location.reload()
        }}
        className="btn btn-large btn-positive"
      >
        Reset lazyBuilder to do more work...
      </button>
    </div>
  )
}

export default Success
