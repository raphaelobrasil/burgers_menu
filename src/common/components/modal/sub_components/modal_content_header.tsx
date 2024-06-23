import Image from 'next/image'
import CloseModal from '../icon'
import useStoreModal from '@/common/hooks/useStoreModal'
import { ModalContentHeaderInterface } from '../modal.interface'

const ContentHeader = ({ $alt, $description, $src, $title, $hasImg }: ModalContentHeaderInterface) => {
  const { closeModal } = useStoreModal()

  return (
    <figure className='modal-content-figure'>
      <span onClick={closeModal} ><CloseModal /></span>
      {
        $hasImg && (
          <Image
            priority
            fill
            src={$src}
            alt={$alt}
            sizes='100%'
            className='modal-content-img'
          />
        )
      }
      <figcaption>
        <h2>{$title}</h2>
        <p>{$description}</p>
      </figcaption>
    </figure>
  )
}

export default ContentHeader