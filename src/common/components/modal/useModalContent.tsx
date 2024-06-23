import useStoreModal from '@/common/hooks/useStoreModal'
import useStoreData from '@/common/hooks/useStoreData'
import updateModifier from '@/common/utils/updateModifier'

const useModalContent = () => {
  const { dataModal } = useStoreModal()
  const { data, updateValue } = useStoreData()
  const option = data[dataModal.keyCarte].carte[dataModal.keyOption]

  const callUpdateModifier = (value: string, keyModifier: number) => {
    const updateData = updateModifier(
      value,
      keyModifier,
      [...data],
      dataModal.keyCarte, 
      dataModal.keyOption
    )

    updateValue(updateData)
  }

  return {
    option,
    callUpdateModifier
  }
}

export default useModalContent