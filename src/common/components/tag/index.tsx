import { TagContainer } from './style'
import { TagInterface } from './tag.interface'

const Tag = ({ children }: TagInterface ): JSX.Element => {
  return (
    <TagContainer>
      {children}
    </TagContainer>
  )
}

export default Tag