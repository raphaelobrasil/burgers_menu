'use client'

import { BasketRoot } from './styles'
import useStoreModal from '@/common/hooks/useStoreModal'
import CloseModal from './icon'
import FloatButton from '@/common/components/float_button'
import { BasketInterface } from './basket.interface'
import useStoreData from '@/common/hooks/useStoreData'
import useStoreBasket from '@/common/hooks/useStoreBasket'
import Card from './sub_components/basket_card_count'

const Basket = ({ $isModal }: BasketInterface) => {
  const { dataBasket, decreaseToBasket, increaseToBasket } = useStoreBasket()
  const { closeModal } = useStoreModal()
  const { data } = useStoreData()

  let priceTotal = 0

  dataBasket.forEach(item => {
    priceTotal = priceTotal + item.price
  })

  return (
    <BasketRoot $isModal={$isModal}>
      <header className='basket-header'>
        {$isModal && <span onClick={closeModal} ><CloseModal /></span>}
        <h2>Basket</h2>
      </header>
      <section>
        {
          !dataBasket[0] && <p className='basket-empty'>Seu carrinho está vazio</p>
        }
        {
          !!dataBasket[0] && (
            <>  
              {
                dataBasket.map((item, key) => 
                  <Card 
                    key={`basket-item-id-${item.id}`}
                    $count={item.count}
                    $decrease={() => decreaseToBasket(key, dataBasket, data)}
                    $increase={() => increaseToBasket(key, dataBasket, data)}
                    $name={item.name}
                    $price={item.price}
                    $modifier={item.modifier}
                  />
                )
              }        
              <div className='basket-subtotal'>
                <span>Sub total:</span>
                <output>R$ {priceTotal}</output>
              </div>
              <div className='basket-total'>
                <span>Total:</span>
                <output>R$ {priceTotal}</output>
              </div>
            </>
          ) 
        }
      </section>
      {!!dataBasket[0] && <FloatButton $type='checkout' />}
    </BasketRoot>
  )
}

export default Basket