import { CarteInterface } from './carte.interface'
import { CarteRoot } from './styles'
import Arrow from './icon'

const Carte = ({ $titleGroup, $close, $open, children }: CarteInterface) => {
  return (
    <CarteRoot id={$titleGroup} $open={$open}>
      <header className='header-carte'>
        <h2>{$titleGroup}</h2>
        <span onClick={$close}><Arrow /></span>
      </header>
      {
        $open &&
          <section className='section-carte'>
            {children}
          </section>
      }
    </CarteRoot>
  )
}

export default Carte