import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import styles from '../App.scss'

const Modal = ({handleClose, children}) => {
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

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.element,
}

export default Modal
