import Image from 'next/image'
import { TabInterface } from './tab.interface'
import { TagRoot } from './style'

const Tab = ({ $src, $title }: TabInterface): JSX.Element => {
  return (
    <TagRoot
      data-testid='tab-id-test' 
    >
      <aside>
        <Image
          priority
          fill
          src={$src}
          alt={$title}
          sizes='100%'
          className='imgTab'
        />
      </aside>
      <figcaption>
         {$title}         
      </figcaption>
    </TagRoot>
  )
}

export default Tab