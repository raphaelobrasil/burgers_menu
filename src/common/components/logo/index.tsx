import Image from 'next/image'
import { LogoRoot } from './styles'

const Logo = () => {
  return (
    <LogoRoot>
      <div />
      <Image
        priority
        fill
        src='/img/logo.png'
        alt='logo burgers'
        sizes='100%'
        className='logo-burgers'
      />
      <div className='logo-banner' />
    </LogoRoot>
  )
}

export default Logo