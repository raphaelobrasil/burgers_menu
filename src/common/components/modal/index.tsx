import * as S from './styles'
import ModalContent from './sub_components/modal_content'
import BasketContent from '@/common/components/basket'
import useStoreModal from '@/common/hooks/useStoreModal'
import useHiddenOverFlow from '@/common/hooks/useHiddenOverFlow'

const Modal = () => {
  useHiddenOverFlow()
  const { dataModal, closeModal } = useStoreModal()

  return (
    <S.ModalRoot
      data-testid='modal-id-test'
    >
    <>
      <S.BackgroundModal
        id='backgroundModal'
        onClick={closeModal}
      />
      {dataModal.type === 'option' && <ModalContent />}
      {dataModal.type === 'basket' && <S.ModalContainer><BasketContent $isModal /></S.ModalContainer>}
    </>
    </S.ModalRoot>
  )
}

export default Modal