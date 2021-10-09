import React, {useRef} from 'react'
import styles from '../App.scss'

const Modal = ({children, handleClose}) => {
  const dialogRef = useRef(null)

  const handleBackdropClick = (e) => {
    // close only if clicked outside of dialog
    if (!dialogRef.current.contains(e.target)) {
      handleClose()
    }
  }

  return (
    <div className={styles.modalBackdrop} onClick={handleBackdropClick}>
      <div className={styles.dialog} ref={dialogRef} role="dialog">
        {children}
      </div>
    </div>
  )
}

export default Modal