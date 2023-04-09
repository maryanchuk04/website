import React from 'react'
import './modal.css'

const Modal = ({ children, close }) => {
	return (
		<div className='modal-bg' onClick={close}>
			<div className="modal-container" onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}

export default Modal