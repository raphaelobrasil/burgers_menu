import Carte from '@/common/components/carte'
import useStoreData from '@/common/hooks/useStoreData'
import openCarteMenu from '@/common/utils/openCarteMenu'
import CardFigure from './cards/card_menu_figure'
import CardDefault from './cards/card_menu_default'
import useModal from '@/common/hooks/useStoreModal'

const CarteList = () => {
  const { data, updateValue } = useStoreData()
  const { openModal } = useModal()

  return (
    <>
      {
        data.map((carteOption, carteKey) =>     
          <Carte  
            key={`carte-list-${carteOption.titleGroup + carteKey}`}      
            $titleGroup={carteOption.titleGroup}
            $open={!!carteOption.showCarte}
            $close={() => 
              updateValue(openCarteMenu(carteKey, data, !carteOption.showCarte))
            } 
          >
            {
                carteOption.carte.map((options, keyOption) => {
                  if (!!options.images) return <CardFigure key={options.id} {...options} $onClick={() => openModal(carteKey, keyOption)} />
                  return <CardDefault  key={options.id} {...options} $onClick={() => openModal(carteKey, keyOption)} />
                })
            }
          </Carte>
        )
      }
    </>
  )
}

export default CarteList