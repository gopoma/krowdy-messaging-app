import { useAppDispatch, useAppSelector } from './useStore'
import { onCloseModal, onOpenModal } from '../store'

export const useModalStore = () => {
  const dispatch = useAppDispatch()
  const { isModalOpen, component } = useAppSelector((state) => state.modal)

  const openModal = (component = '') => {
    dispatch(onOpenModal(component))
  }

  const closeModal = () => {
    dispatch(onCloseModal())
  }

  return {
    isModalOpen,
    component,
    openModal,
    closeModal
  }
}
