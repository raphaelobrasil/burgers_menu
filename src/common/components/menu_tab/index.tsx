import { MenuTabRoot } from './styles'
import Tab from '@/common/components/tab'
import useStoreData from '@/common/hooks/useStoreData'
import openCarteMenu from '@/common/utils/openCarteMenu'

const MenuTab = () => {
  const { data, updateValue } = useStoreData()

  return (
    <MenuTabRoot>
      <ul>
        {
          data.map(({ src, titleGroup }, key) => 
            <li 
              key={`menu-tab-options-${titleGroup + key}`}
              onClick={() => 
                updateValue(openCarteMenu(key, data, true))
              }
            >
              <a href={`#${titleGroup}`}>
                <Tab 
                  $src={src} 
                  $title={titleGroup}
                />
              </a>
            </li>
          )
        }
      </ul>
    </MenuTabRoot>
  )
}

export default MenuTab