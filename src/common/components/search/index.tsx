import Icon from './icon'
import { SearchRoot } from './styles'

const Search = () => {
  return (
    <SearchRoot data-testid='search-id-test' >
      <span><Icon /></span>
      <input placeholder='Search menu items'/>      
    </SearchRoot>
  )
}

export default Search