import { ButtonInterface } from "./button.interface"
import { ButtonRoot  } from './style'

const Button = ({ children, $action, $disable }: ButtonInterface): JSX.Element => {
  return (
    <ButtonRoot
      onClick={$action}
      data-testid='button-id-test'
      $disable={$disable}
    >
      {children}
    </ButtonRoot>
  )
}

export default Button