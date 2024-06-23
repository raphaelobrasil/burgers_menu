import { ListCardOption } from '../styles'
import Card from './card_option'
import { ListCardOptionsInterface } from '../modal.interface'

const ListCardOptions = ({ option, $action }: ListCardOptionsInterface) => {
  return (
    <>
      {
        option.modifiers?.map((modifier, keyModifier) => 
          <ListCardOption key={`modifier-id-${keyModifier}`}>
            <header className='list-card-option-header'>
              <h3>{modifier.name}</h3>
              <p>Select 1 option</p>
            </header>
            {
              modifier.items.map((item, keyItem) =>
                <Card
                  $action={(value) => $action(value, keyModifier)} 
                  $keyItem={keyItem}
                  $nameItem={item.name}
                  $price={item.price}
                  $title={option.name}
                  key={`modifier-options-id-${keyItem}`}
                />
              )
            }
          </ListCardOption>
        )
      }
    </>
  )
}

export default ListCardOptions