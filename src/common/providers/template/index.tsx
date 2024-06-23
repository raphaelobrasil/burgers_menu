import { TemplateInterface } from './Template.interface'
import Header from '@/common/components/header'
import Footer from '@/common/components/footer'

const Template = ({ children }: TemplateInterface) => {
  return (
    <>
      <Header />
        { children  }
      <Footer />
    </>
  )
}

export default Template