import { MenuOptionsInterface } from '../menu.interface'
import { menuList } from '../menu.const'

const MenuOptions = ({ $changeTitle }: MenuOptionsInterface): JSX.Element => {
  return (
    <ul>
      {
        menuList.map(({ title, src }, key) =>
          <li 
            key={title + key} 
            onClick={() => $changeTitle(title)}
          >
            <a href={src}>
              {title}
            </a>
          </li>
        )
      }
    </ul>
  )
}

export default MenuOptions