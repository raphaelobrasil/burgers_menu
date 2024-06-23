import getMenu from '@/common/services/get_menu'
import Home from '@/modules/home'
import Content from '@/modules/home/sub_component/content'

export default async function Page() {
  const data = await getMenu()

  return (
    <>
      {
        (data !== null) &&
          <Home data={data}>
            <Content />
          </Home>
      }
      {
        (data === null) && 'Error page'
      }
    </>
  )
}
