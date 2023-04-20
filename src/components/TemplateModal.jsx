import Modal from 'react-modal'
import { useModalStore } from '../hooks/useModalStore'

Modal.setAppElement('body')

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto'
  }
}

export const TemplateModal = ({ children }) => {
  const { isModalOpen } = useModalStore()

  return (
    <Modal
      isOpen={ isModalOpen }
      style={ customStyles }
      className='modal'
      overlayClassName='modal-fondo'
      closeTimeoutMS={ 200 }
    >
      { children }
    </Modal>
  )
}
