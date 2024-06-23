import { useSelector, useDispatch } from 'react-redux'
import { updateStore } from '@/common/redux/slices/store_modal'
import { stateModal, UseStoreModalInterface } from '@/common/interface/store_modal.interface'

const useStoreModal = (): UseStoreModalInterface => {
  const dataModal = useSelector((state: stateModal) => state.storeModal)
  const dispatch = useDispatch()

  const openModal = (keyCarte: number, keyOption: number) => {
    dispatch(updateStore({ keyOption, keyCarte, showModal: true, type: 'option' }))
  }

  const closeModal = () => {
    dispatch(updateStore({ showModal: false, type: 'option' }))
  }

  const openModalBasket = () => {
    dispatch(updateStore({ showModal: true, type: 'basket' }))
  }

  return {
    dataModal,
    closeModal,
    openModal,
    openModalBasket
  }
}

export default useStoreModal