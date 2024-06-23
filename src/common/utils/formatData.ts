
import { StoreDataInterface } from '@/common/interface/store_data.interface'
import { ApiMenuInterface, ApiImgInterface, ApiItemsInterface } from '@/common/interface/api_menu.interface'

const formatImages = (alt: string, imgs?: ApiImgInterface[]) => !!imgs ? { src: imgs[0].image, alt } : undefined

const formatCate = (option: ApiItemsInterface) => {
  const images = formatImages(option.name, option.images)

  return {
    ...option,
    images,
  }
}

const formatData = (apiData: ApiMenuInterface): StoreDataInterface[] => {
  const data = apiData.sections.map(menu => {
    return {
      src: menu.images[0].image,
      titleGroup: menu.name,
      showCarte: true,
      carte: menu.items.map(options => formatCate(options))
    }
  }) as StoreDataInterface[]
  
  return data
}

export default formatData