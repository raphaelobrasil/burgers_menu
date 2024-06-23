import { RadioInterface } from './radio.interface'
import * as S from './style'

const Radio = ({ $findOptionSelected, $id, $name, $value }: RadioInterface): JSX.Element => {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    $findOptionSelected(event.target.value)
  }

  return (
    <S.Radio
      type="radio" 
      id={$id} 
      name={$name} 
      value={$value} 
      onChange={handleRadioChange}
      data-testid={`radio-id-test-${$id}`}
    />
  )
}

export default Radio