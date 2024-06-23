import { api } from './api'
import { ApiMenuInterface } from '@/common/interface/api_menu.interface'
const getMenu = async (): Promise<ApiMenuInterface | null> => api.get<ApiMenuInterface>('menu')
  .then(response => response.data)
  .catch(() => null)

export default getMenu