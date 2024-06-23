import { ModalContentRoot, ModalContainer } from '../styles'
import FloatButton from "@/common/components/float_button"
import ContentHeader from './modal_content_header'
import ListCardOptions from './list_cards'
import useModalContent from '../useModalContent'

const ModalContent = () => {
  const { option, callUpdateModifier } = useModalContent()
  const hasImg = (!!option.images?.alt && !!option.images?.src)

  return (
    <ModalContainer $emptyBg={!hasImg} $emptyOptions={!option.modifiers}>
      <ModalContentRoot $emptyBg={!hasImg} $emptyOptions={!option.modifiers}>
        <ContentHeader
          $alt={option.images?.alt ?? ''}
          $src={option.images?.src ?? ''}
          $description={option.description}
          $title={option.name}
          $hasImg={hasImg}
        />
        <ListCardOptions
          option={option}
          $action={callUpdateModifier}
        />
        <FloatButton $type='price' />
      </ModalContentRoot>
    </ModalContainer>
  )
}

export default ModalContent