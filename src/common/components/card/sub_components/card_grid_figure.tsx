import Image from 'next/image'
import { GridFigure } from '../styles'
import { CardGridFigureInterface } from '../card.interfaces'

const CardGridFigure = ({ children, $src, $alt }: CardGridFigureInterface): JSX.Element => {
  return (
    <GridFigure>
      <figcaption>
        {children}        
      </figcaption>
      <aside>
        <Image
          priority
          fill
          src={$src}
          alt={$alt}
          sizes='100%'
          className='imgMenu'
        />
      </aside>
    </GridFigure>
  )
}

export default CardGridFigure